import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// ─── Upstash Redis Rate Limiter ──────────────────────────────────────────────
// Limits to 5 requests per day per IP
const redis = Redis.fromEnv();
const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(5, "1 d"),
});

// ─── Request Timeout Helper ──────────────────────────────────────────────────
const REQUEST_TIMEOUT_MS = 15_000; // 15 seconds max

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Request timed out")), ms);
    promise
      .then((val) => { clearTimeout(timer); resolve(val); })
      .catch((err) => { clearTimeout(timer); reject(err); });
  });
}

// ─── Constants ───────────────────────────────────────────────────────────────
const MAX_PROMPT_LENGTH = 200;

const SYSTEM_INSTRUCTION = `You are a landing page content generator. You ONLY return valid JSON.
You NEVER return code, HTML, markdown, or explanations.
You MUST respond with EXACTLY this JSON structure and nothing else:
{
  "heroTitle": "short catchy headline (max 8 words)",
  "subtitle": "one sentence description (max 25 words)",
  "features": [
    { "icon": "single emoji", "title": "short title (max 4 words)", "description": "one sentence (max 12 words)" },
    { "icon": "single emoji", "title": "short title (max 4 words)", "description": "one sentence (max 12 words)" },
    { "icon": "single emoji", "title": "short title (max 4 words)", "description": "one sentence (max 12 words)" }
  ],
  "cta": "call to action button text (max 4 words)"
}
Always return exactly 3 features. Keep all text extremely concise.`;

// ─── POST Handler ────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    // 1. Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    try {
      const { success } = await ratelimit.limit(ip);
      if (!success) {
        return NextResponse.json(
          { error: "Daily AI generation limit reached (5/day). Please try again tomorrow." },
          { status: 429 }
        );
      }
    } catch (error) {
      console.warn("Rate limit check failed, bypassing...", error);
    }

    // 2. Validate API key exists (server-side only)
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured. Falling back to mock data.", fallback: true },
        { status: 503 }
      );
    }

    // 3. Parse and validate request body
    let body: { prompt?: string };
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const prompt = body.prompt?.trim();
    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required." },
        { status: 400 }
      );
    }

    if (prompt.length > MAX_PROMPT_LENGTH) {
      return NextResponse.json(
        { error: `Prompt must be ${MAX_PROMPT_LENGTH} characters or less.` },
        { status: 400 }
      );
    }

    // 4. Call Gemini Flash with timeout
    const ai = new GoogleGenAI({ apiKey });

    const response = await withTimeout(
      ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `Generate landing page content for: ${prompt}`,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
          maxOutputTokens: 300, // Keep output tiny for free-tier optimization
          responseMimeType: "application/json",
        },
      }),
      REQUEST_TIMEOUT_MS
    );

    const rawText = response.text?.trim();

    if (!rawText) {
      return NextResponse.json(
        { error: "Empty response from AI.", fallback: true },
        { status: 502 }
      );
    }

    // 5. Parse and validate JSON structure
    let parsed: Record<string, unknown>;
    try {
      parsed = JSON.parse(rawText);
    } catch {
      return NextResponse.json(
        { error: "AI returned invalid JSON.", fallback: true },
        { status: 502 }
      );
    }

    // Validate required fields exist
    if (
      typeof parsed.heroTitle !== "string" ||
      typeof parsed.subtitle !== "string" ||
      !Array.isArray(parsed.features) ||
      typeof parsed.cta !== "string"
    ) {
      return NextResponse.json(
        { error: "AI response missing required fields.", fallback: true },
        { status: 502 }
      );
    }

    // 6. Sanitize: return ONLY the expected fields, nothing extra
    const sanitized = {
      heroTitle: String(parsed.heroTitle).slice(0, 100),
      subtitle: String(parsed.subtitle).slice(0, 200),
      features: (parsed.features as Array<Record<string, unknown>>).slice(0, 3).map((f) => ({
        icon: String(f.icon || "✨").slice(0, 4),
        title: String(f.title || "Feature").slice(0, 50),
        description: String(f.description || "").slice(0, 120),
      })),
      cta: String(parsed.cta).slice(0, 50),
    };

    return NextResponse.json(sanitized, { status: 200 });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "An unexpected error occurred.";

    console.error("[/api/generate] Error:", message);

    return NextResponse.json(
      {
        error: message === "Request timed out"
          ? "Generation timed out. Please try again."
          : "AI generation failed. Using mock data instead.",
        fallback: true,
      },
      { status: 500 }
    );
  }
}
