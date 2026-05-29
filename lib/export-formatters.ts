import type { BuilderConfig } from "@/types/builder";

export type ExportFormat = "json" | "markdown" | "react";

/**
 * Export as clean, readable JSON with metadata.
 */
export function toJSON(config: BuilderConfig): string {
  const output = {
    meta: {
      generatedAt: new Date().toISOString(),
      theme: config.theme,
      primaryColor: config.primaryColor,
      font: config.font,
    },
    content: {
      brandName: config.brandName,
      tagline: config.tagline,
      subtitle: config.subtitle,
      ctaLabel: config.ctaLabel,
      ctaSecondaryLabel: config.ctaSecondaryLabel,
      features: config.features,
    },
    styles: {
      borderRadius: config.borderRadius,
      shadow: config.shadow,
      typographyScale: config.typographyScale,
      sectionSpacing: config.sectionSpacing,
    },
    layout: {
      heroStyle: config.heroStyle,
      navbarStyle: config.navbarStyle,
      buttonStyle: config.buttonStyle,
      cardStyle: config.cardStyle,
      featureLayout: config.featureLayout,
      darkMode: config.darkMode,
    }
  };
  return JSON.stringify(output, null, 2);
}

/**
 * Export as structured Markdown.
 */
export function toMarkdown(config: BuilderConfig): string {
  const lines: string[] = [
    `# ${config.brandName}`,
    "",
    `> ${config.tagline}`,
    "",
    config.subtitle,
    "",
    `**[${config.ctaLabel}]** | **[${config.ctaSecondaryLabel}]**`,
    "",
    "---",
    "",
    "## Features",
    "",
  ];

  for (const feature of config.features) {
    lines.push(`### ${feature.icon} ${feature.title}`);
    lines.push("");
    lines.push(feature.description);
    lines.push("");
  }

  lines.push("---");
  lines.push("");
  lines.push(
    `*Generated with Visual Builder — Theme: ${config.theme} / Color: ${config.primaryColor}*`
  );
  lines.push("");

  return lines.join("\n");
}

/**
 * Export as a minimal React/Tailwind functional component.
 */
export function toReactComponent(config: BuilderConfig): string {
  const color = config.primaryColor;
  const features = config.features
    .map(
      (f, i) =>
        `    { icon: "${f.icon}", title: "${esc(f.title)}", description: "${esc(f.description)}" }${i < config.features.length - 1 ? "," : ""}`
    )
    .join("\n");

  return `export default function LandingPage() {
  const brand = "${esc(config.brandName)}";
  const features = [
${features}
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans" data-theme="${config.theme}">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold" style={{ backgroundColor: "${color}" }}>
            {brand.charAt(0)}
          </div>
          <span className="text-xl font-bold tracking-tight">{brand}</span>
        </div>
        <button className="px-4 py-2 text-sm text-white rounded-md font-semibold" style={{ backgroundColor: "${color}" }}>
          ${esc(config.ctaLabel)}
        </button>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-20 pb-28">
        <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full mb-8 border" style={{ color: "${color}", backgroundColor: "${color}15", borderColor: "${color}30" }}>
          ${esc(config.tagline)}
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight">
          We are building <span style={{ color: "${color}" }}>the future.</span>
        </h1>
        <p className="text-lg md:text-xl opacity-60 mb-10 max-w-2xl">
          ${esc(config.subtitle)}
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-4 text-lg text-white rounded-lg font-semibold" style={{ backgroundColor: "${color}" }}>
            ${esc(config.ctaLabel)} →
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 opacity-95">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-xl border border-zinc-200 shadow-sm">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4" style={{ backgroundColor: "${color}15", color: "${color}" }}>
                {feature.icon}
              </div>
              <h3 className="text-base font-bold mb-2">{feature.title}</h3>
              <p className="text-sm opacity-60">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
`;
}

/** Escape double-quotes for safe interpolation into strings */
function esc(str: string): string {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

/** File extension for each format */
export function getFileExtension(format: ExportFormat): string {
  switch (format) {
    case "json":
      return ".json";
    case "markdown":
      return ".md";
    case "react":
      return ".tsx";
  }
}

/** MIME type for downloads */
export function getMimeType(format: ExportFormat): string {
  switch (format) {
    case "json":
      return "application/json";
    case "markdown":
      return "text/markdown";
    case "react":
      return "text/plain";
  }
}

/** Default filename for downloads */
export function getFileName(format: ExportFormat): string {
  switch (format) {
    case "json":
      return "landing-page.json";
    case "markdown":
      return "landing-page.md";
    case "react":
      return "LandingPage.tsx";
  }
}

/** Generate export content for a given format */
export function generateExport(
  format: ExportFormat,
  config: BuilderConfig
): string {
  switch (format) {
    case "json":
      return toJSON(config);
    case "markdown":
      return toMarkdown(config);
    case "react":
      return toReactComponent(config);
  }
}
