"use client";

import { useState, useCallback, useRef } from "react";
import type { ProjectFormInput, LandingPageData, MockAIResponse } from "@/types/generator";
import { getMockData } from "@/lib/mock-data";

type GeneratorStatus = "idle" | "generating" | "done" | "error";

export const DEFAULT_PROJECT_CONFIG: ProjectFormInput = {
  projectType: "ai-saas",
  themeStyle: "modern",
  brandVibe: "professional",
  primaryColor: "#8b5cf6",
};

// Build a human-readable prompt from the form config
function buildPrompt(config: ProjectFormInput): string {
  const typeLabels: Record<string, string> = {
    fitness: "Fitness App",
    "ai-saas": "AI SaaS Product",
    restaurant: "Restaurant",
    clothing: "Clothing Brand",
    portfolio: "Portfolio Website",
  };
  const vibeLabels: Record<string, string> = {
    professional: "professional",
    playful: "playful",
    luxurious: "luxurious",
    energetic: "energetic",
    trustworthy: "trustworthy",
  };
  return `${typeLabels[config.projectType] || config.projectType} with a ${vibeLabels[config.brandVibe] || config.brandVibe} and ${config.themeStyle} vibe`;
}

export function useGenerator() {
  const [config, setConfig] = useState<ProjectFormInput>(DEFAULT_PROJECT_CONFIG);
  const [status, setStatus] = useState<GeneratorStatus>("idle");
  const [resultData, setResultData] = useState<LandingPageData | null>(null);
  const [rawAIResponse, setRawAIResponse] = useState<MockAIResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [usedFallback, setUsedFallback] = useState(false);
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  // Guard against double-submissions
  const isGeneratingRef = useRef(false);

  const updateConfig = useCallback(
    <K extends keyof ProjectFormInput>(key: K, value: ProjectFormInput[K]) => {
      setConfig((prev) => ({ ...prev, [key]: value }));
      setStatus("idle");
      setResultData(null);
      setRawAIResponse(null);
      setErrorMessage(null);
      setUsedFallback(false);
    },
    []
  );

  const applyFallback = useCallback(
    (cfg: ProjectFormInput, message?: string) => {
      const mockResult = getMockData(cfg.projectType, cfg.brandVibe);
      const mockAI: MockAIResponse = {
        heroTitle: mockResult.heroTitle,
        subtitle: mockResult.subtitle,
        features: mockResult.features,
        cta: mockResult.cta,
      };
      setRawAIResponse(mockAI);
      setResultData(mockResult);
      setUsedFallback(true);
      setErrorMessage(message || null);
      setStatus("done");
    },
    []
  );

  const generate = useCallback(async () => {
    // Prevent double submissions or cooldown
    if (isGeneratingRef.current || cooldownRemaining > 0) return;
    isGeneratingRef.current = true;

    // Start 20s cooldown
    setCooldownRemaining(20);
    const interval = setInterval(() => {
      setCooldownRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    setStatus("generating");
    setRawAIResponse(null);
    setResultData(null);
    setErrorMessage(null);
    setUsedFallback(false);

    try {
      const prompt = buildPrompt(config);

      // Call our secure server-side API route
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok || data.fallback || data.error) {
        // API failed or told us to fallback — use mock data gracefully
        applyFallback(config, data.error || "AI unavailable. Showing preview with mock data.");
        return;
      }

      // Got real AI response — merge it into a full LandingPageData
      const aiResponse: MockAIResponse = {
        heroTitle: data.heroTitle,
        subtitle: data.subtitle,
        features: data.features,
        cta: data.cta,
      };

      // Use mock data as the structural scaffold, override with AI content
      const scaffold = getMockData(config.projectType, config.brandVibe);
      const merged: LandingPageData = {
        ...scaffold,
        heroTitle: aiResponse.heroTitle,
        subtitle: aiResponse.subtitle,
        features: aiResponse.features,
        cta: aiResponse.cta,
        // Split heroTitle into title + highlight for the preview renderer
        heroHighlight: aiResponse.heroTitle.split(" ").slice(-2).join(" "),
      };
      // Adjust heroTitle to exclude the highlight portion
      const titleWords = aiResponse.heroTitle.split(" ");
      if (titleWords.length > 2) {
        merged.heroTitle = titleWords.slice(0, -2).join(" ");
        merged.heroHighlight = titleWords.slice(-2).join(" ");
      } else {
        merged.heroTitle = titleWords[0] || "";
        merged.heroHighlight = titleWords.slice(1).join(" ") || "";
      }

      setRawAIResponse(aiResponse);
      setResultData(merged);
      setUsedFallback(false);
      setStatus("done");
    } catch (err) {
      console.error("Generation error:", err);
      applyFallback(config, "Network error. Showing preview with mock data.");
    } finally {
      isGeneratingRef.current = false;
    }
  }, [config, applyFallback]);

  return {
    config,
    updateConfig,
    status,
    resultData,
    rawAIResponse,
    errorMessage,
    usedFallback,
    cooldownRemaining,
    generate,
  };
}
