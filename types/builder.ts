export type SectionId = "navbar" | "hero" | "features" | "stats" | "testimonials" | "pricing" | "faq" | "cta" | "footer";

export interface BuilderConfig {
  // Content
  brandName: string;
  tagline: string;
  subtitle: string;
  ctaLabel: string;
  ctaSecondaryLabel: string;
  features: FeatureItem[];
  stats: StatItem[];
  testimonials: TestimonialItem[];
  pricing: PricingItem[];
  faqs: FaqItem[];
  sectionOrder: SectionId[];
  heroImage?: string;

  // Visual style
  theme: 'minimal' | 'luxury' | 'startup' | 'gaming' | 'creator' | 'fitness';
  primaryColor: string;
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'full';
  shadow: 'none' | 'sm' | 'md' | 'lg' | 'glow';
  font: 'sans' | 'serif' | 'mono' | 'display';
  typographyScale: 'compact' | 'normal' | 'large';
  sectionSpacing: 'tight' | 'normal' | 'relaxed' | 'loose';

  // Sections
  heroStyle: 'centered' | 'split' | 'minimal' | 'bold';
  navbarStyle: 'floating' | 'stuck' | 'transparent' | 'bordered';
  buttonStyle: 'solid' | 'outline' | 'ghost' | 'gradient';
  cardStyle: 'flat' | 'elevated' | 'bordered' | 'glass';
  featureLayout: '3-col' | '2-col' | 'list' | 'alternating';

  // Mode
  darkMode: boolean;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

export interface PricingItem {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
