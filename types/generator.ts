export type ProjectType =
  | "fitness"
  | "ai-saas"
  | "restaurant"
  | "clothing"
  | "portfolio";

export type ThemeStyle =
  | "modern"
  | "minimal"
  | "bold"
  | "retro"
  | "vibrant";

export type BrandVibe =
  | "professional"
  | "playful"
  | "luxurious"
  | "energetic"
  | "trustworthy";

export interface ProjectFormInput {
  projectType: ProjectType;
  themeStyle: ThemeStyle;
  brandVibe: BrandVibe;
  primaryColor: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface MockAIResponse {
  heroTitle: string;
  subtitle: string;
  features: FeatureItem[];
  cta: string;
}

// Keep LandingPageData in sync or support extension
export interface LandingPageData extends MockAIResponse {
  brandName: string;
  heroHighlight: string;
  ctaSubtext: string;
  navLinks: string[];
  badgeText: string;
  statsLabel: string;
  statsValue: string;
}

export type MockDataMap = Record<
  ProjectType,
  Record<BrandVibe, LandingPageData[]>
>;
