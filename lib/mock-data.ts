import { MockDataMap, LandingPageData } from "@/types/generator";

const defaultFeatures1 = [
  { icon: "⚡", title: "Fast Setup", description: "Get started in seconds with our optimized onboarding." },
  { icon: "🎨", title: "Beautiful Design", description: "Crafted with care, pixel perfect layouts." },
  { icon: "🔒", title: "Secure Data", description: "Your safety is our top priority, fully encrypted." },
];

const defaultFeatures2 = [
  { icon: "📈", title: "Growth Engine", description: "Scale effortlessly with built-in analytical tools." },
  { icon: "☁️", title: "Cloud Native", description: "Access anywhere, anytime, fully synchronized." },
  { icon: "✨", title: "Auto Magic", description: "Let smart algorithms handle the boring tasks." },
];

export const MOCK_DATA: MockDataMap = {
  "fitness": {
    professional: [
      {
        brandName: "FitPro",
        heroTitle: "Elevate Your",
        heroHighlight: "Fitness Journey",
        subtitle: "Expert coaching and personalized plans to help you achieve your goals safely and efficiently.",
        features: [
          { icon: "💪", title: "Personalized Plans", description: "Tailored to your specific body and dietary needs." },
          { icon: "📈", title: "Track Progress", description: "See your gains and improvements in real-time." },
          { icon: "🤝", title: "Expert Coaches", description: "Learn directly from certified athletic trainers." }
        ],
        cta: "Start Free Trial",
        ctaSubtext: "No credit card required. 14-day free trial.",
        navLinks: ["Programs", "Coaches", "Pricing"],
        badgeText: "New Athletic Programs Available",
        statsLabel: "Active Members",
        statsValue: "10,000+"
      },
      {
        brandName: "VigorHealth",
        heroTitle: "Redefine Your",
        heroHighlight: "Physical Limits",
        subtitle: "A modern approach to wellness combining clinical research with physical training.",
        features: [
          { icon: "🧪", title: "Scientific Approach", description: "Workouts based on verified bio-mechanics." },
          { icon: "🥗", title: "Nutrition Integration", description: "Meal plans aligned perfectly with target workouts." },
          { icon: "📊", title: "Metrics Dashboard", description: "Track heart rate, calories, and performance curves." }
        ],
        cta: "Book Assessment",
        ctaSubtext: "Includes a free 30-minute expert consultation.",
        navLinks: ["Method", "Scientists", "Plans"],
        badgeText: "Clinically Proven Training Method",
        statsLabel: "Peak Performance Rate",
        statsValue: "98.4%"
      }
    ],
    playful: [
      {
        brandName: "SweatSmile",
        heroTitle: "Make Fitness",
        heroHighlight: "Fun Again",
        subtitle: "Join the most energetic community and dance your way to vibrant health.",
        features: [
          { icon: "🎉", title: "Fun Classes", description: "Exciting daily routines that never get boring." },
          { icon: "👯‍♀️", title: "Community First", description: "Sweat, laugh, and achieve milestones together." },
          { icon: "🏆", title: "Weekly Challenges", description: "Complete fun goals and win cool gear." }
        ],
        cta: "Join the Party",
        ctaSubtext: "First class is completely free!",
        navLinks: ["Classes", "Events", "Pricing"],
        badgeText: "Join our next global dance-off",
        statsLabel: "Calories Burned",
        statsValue: "1.2M+"
      },
      {
        brandName: "FlexyPets",
        heroTitle: "Stretch and Play",
        heroHighlight: "Every Single Day",
        subtitle: "The world's first fitness app that combines exercises with your favorite pets!",
        features: [
          { icon: "🐶", title: "Pet Co-training", description: "Exercises designed to do with your dog or cat." },
          { icon: "🎈", title: "Playful Goals", description: "Unlock virtual badges and pet toys as you burn calories." },
          { icon: "☀️", title: "Outdoor Quests", description: "Interactive map challenges for you and your furry buddy." }
        ],
        cta: "Start Playing Free",
        ctaSubtext: "Available on iOS and Android.",
        navLinks: ["How it Works", "Testimonials", "App"],
        badgeText: "Voted Funniest App of 2026",
        statsLabel: "Dogs Happy",
        statsValue: "45,000+"
      }
    ],
    luxurious: [
      {
        brandName: "Aura",
        heroTitle: "Experience",
        heroHighlight: "Elite Wellness",
        subtitle: "A premium sanctuary designed specifically for your mind, body, and soul.",
        features: defaultFeatures1,
        cta: "Request Membership",
        ctaSubtext: "Exclusive access only via custom invitation.",
        navLinks: ["Amenities", "Spa", "Membership"],
        badgeText: "Award-winning Luxury Facilities",
        statsLabel: "Exclusive Locations",
        statsValue: "5"
      },
      {
        brandName: "Sovereign Club",
        heroTitle: "The Sovereign",
        heroHighlight: "Athletic Standard",
        subtitle: "Ultra-premium training programs featuring bespoke nutritional regimes and private coaching.",
        features: defaultFeatures2,
        cta: "Schedule Private Tour",
        ctaSubtext: "Strictly limited member capacity.",
        navLinks: ["Estates", "Coaching", "Concierge"],
        badgeText: "Ultra-Premium Health Club",
        statsLabel: "Maximum Members/Club",
        statsValue: "150"
      }
    ],
    energetic: [
      {
        brandName: "CRUSH",
        heroTitle: "Push Your",
        heroHighlight: "Limits Now",
        subtitle: "High-intensity training designed for those who refuse to settle for average.",
        features: defaultFeatures1,
        cta: "Start Sweating",
        ctaSubtext: "Don't hold back. Join the movement.",
        navLinks: ["Workouts", "Trainers", "Store"],
        badgeText: "New High-Intensity Classes",
        statsLabel: "Daily Workouts Completed",
        statsValue: "5,000+"
      },
      {
        brandName: "VoltFit",
        heroTitle: "Supercharge Your",
        heroHighlight: "Metabolism",
        subtitle: "High energy, thumping beats, and non-stop motion to blast fat and build muscle.",
        features: defaultFeatures2,
        cta: "Get Volt Energy",
        ctaSubtext: "Get instantly energized.",
        navLinks: ["Beats", "Schedule", "Gear"],
        badgeText: "Warning: High Energy Workouts",
        statsLabel: "Average Heart Rate",
        statsValue: "142 BPM"
      }
    ],
    trustworthy: [
      {
        brandName: "TrueFit",
        heroTitle: "Science-Backed",
        heroHighlight: "Fitness Results",
        subtitle: "Proven methodologies and certified medical professionals to guarantee your long-term success.",
        features: defaultFeatures1,
        cta: "Consult an Expert",
        ctaSubtext: "Free initial body composition analysis.",
        navLinks: ["Science", "Testimonials", "Pricing"],
        badgeText: "100% Certified Trainers & Nutritionists",
        statsLabel: "Success Stories",
        statsValue: "5,000+"
      },
      {
        brandName: "Shield Athletics",
        heroTitle: "Safe & Sustainable",
        heroHighlight: "Body Longevity",
        subtitle: "Exercise protocols optimized to prevent injury and promote healthy joint aging.",
        features: defaultFeatures2,
        cta: "Check Programs",
        ctaSubtext: "Recommended by orthopedists.",
        navLinks: ["Philosophy", "Clinics", "Advisors"],
        badgeText: "Approved by National Spine Association",
        statsLabel: "Zero-Injury Rate",
        statsValue: "100%"
      }
    ]
  },
  "ai-saas": {
    professional: [
      {
        brandName: "NexusAI",
        heroTitle: "Automate Your",
        heroHighlight: "Enterprise Workflow",
        subtitle: "State-of-the-art AI agents designed to automate complex, repetitive business operations.",
        features: defaultFeatures1,
        cta: "Request Demo",
        ctaSubtext: "14-day premium enterprise pilot.",
        navLinks: ["Features", "Solutions", "Pricing"],
        badgeText: "SOC2 Type II Certified",
        statsLabel: "Business Hours Saved",
        statsValue: "2.4M"
      },
      {
        brandName: "TaskFlow.AI",
        heroTitle: "Intelligent Team",
        heroHighlight: "Co-ordination",
        subtitle: "An AI-powered project manager that assigns tasks, schedules sprints, and writes status reports.",
        features: defaultFeatures2,
        cta: "Optimize Team Free",
        ctaSubtext: "Takes under 5 minutes to connect.",
        navLinks: ["Integrations", "AI Manager", "Security"],
        badgeText: "Seamless Slack & Teams Integration",
        statsLabel: "Team Productivity",
        statsValue: "+42%"
      }
    ],
    playful: [
      {
        brandName: "RoboPal",
        heroTitle: "Your Friendly",
        heroHighlight: "Office AI Assistant",
        subtitle: "Make work feel like play with our incredibly helpful and interactive AI helper.",
        features: defaultFeatures1,
        cta: "Say Hello to Robo",
        ctaSubtext: "Free forever plan available.",
        navLinks: ["Features", "Integrations", "Pricing"],
        badgeText: "Over 50 cute avatars to choose from!",
        statsLabel: "Happy Office Workers",
        statsValue: "50k+"
      },
      {
        brandName: "Sparky.ai",
        heroTitle: "Spark Up Your",
        heroHighlight: "Creative Content",
        subtitle: "Stuck on ideas? Sparky creates engaging posts, jokes, and blogs in your exact tone!",
        features: defaultFeatures2,
        cta: "Ignite Sparky",
        ctaSubtext: "No boring output guaranteed.",
        navLinks: ["Tones", "Ideas", "Community"],
        badgeText: "Now with 80% more humor!",
        statsLabel: "Jokes Written",
        statsValue: "250,000"
      }
    ],
    luxurious: [
      {
        brandName: "Onyx",
        heroTitle: "Bespoke Enterprise",
        heroHighlight: "Machine Intelligence",
        subtitle: "Tailored neural networks crafted for elite businesses demanding absolute perfection.",
        features: defaultFeatures1,
        cta: "Request Private Access",
        ctaSubtext: "Exclusively for Fortune 500 companies.",
        navLinks: ["Solutions", "Security", "Company"],
        badgeText: "Premium Concierge Engineering",
        statsLabel: "Client Retention",
        statsValue: "100%"
      },
      {
        brandName: "Apex AI",
        heroTitle: "The Premium Era of",
        heroHighlight: "Decision Intelligence",
        subtitle: "High-net-worth algorithmic wealth management and market simulation built with predictive AI.",
        features: defaultFeatures2,
        cta: "Initiate Private Consultation",
        ctaSubtext: "Strict NDAs required.",
        navLinks: ["System", "Performance", "Pedigree"],
        badgeText: "Managing Over $10B in Private Assets",
        statsLabel: "Alpha Outperformance",
        statsValue: "8.2%"
      }
    ],
    energetic: [
      {
        brandName: "TurboAI",
        heroTitle: "Supercharge Business",
        heroHighlight: "Output Instantly",
        subtitle: "Blazing fast inference models designed to give your application real-time super-powers.",
        features: defaultFeatures1,
        cta: "Boost Performance Now",
        ctaSubtext: "Zero cold-starts. High scalability.",
        navLinks: ["Products", "API Docs", "Pricing"],
        badgeText: "Lowest Latency AI API in the Market",
        statsLabel: "Inference Time",
        statsValue: "< 8ms"
      },
      {
        brandName: "Hyperdrive",
        heroTitle: "Break The",
        heroHighlight: "Speed Limit",
        subtitle: "Real-time voice synthesis and interactive visual generation models with zero lag.",
        features: defaultFeatures2,
        cta: "Accelerate App",
        ctaSubtext: "Free trial includes 1 million API calls.",
        navLinks: ["Speed Benchmarks", "Pricing", "Status"],
        badgeText: "Running on custom H100 GPU Clusters",
        statsLabel: "Uptime Guaranteed",
        statsValue: "99.999%"
      }
    ],
    trustworthy: [
      {
        brandName: "Veritas",
        heroTitle: "Fully Audited &",
        heroHighlight: "Reliable AI Models",
        subtitle: "Transparent, unbiased, and fully explainable models for critical operations and high-stakes fields.",
        features: defaultFeatures1,
        cta: "Review Whitepaper",
        ctaSubtext: "Compliant with EU AI Act.",
        navLinks: ["Ethics", "Research", "Safety Docs"],
        badgeText: "Audited by Independent Ethical Councils",
        statsLabel: "Hallucination Rate",
        statsValue: "0.01%"
      },
      {
        brandName: "Credence AI",
        heroTitle: "Safe & Compliant",
        heroHighlight: "Finance Automation",
        subtitle: "AI agents fully trained on banking regulations and strictly ring-fenced for extreme security.",
        features: defaultFeatures2,
        cta: "Get Auditor Report",
        ctaSubtext: "Zero data leakage pledge.",
        navLinks: ["Framework", "Compliance", "Security"],
        badgeText: "FINRA & SEC Compliant Systems",
        statsLabel: "Security Breaches",
        statsValue: "0"
      }
    ]
  },
  "restaurant": {
    professional: [
      {
        brandName: "Bistro 42",
        heroTitle: "Artisanal Fine",
        heroHighlight: "Dining Redefined",
        subtitle: "Experience outstanding culinary excellence, seasonal ingredients, and a world-class wine collection.",
        features: defaultFeatures1,
        cta: "Book Table Reservation",
        ctaSubtext: "Reservations strongly recommended.",
        navLinks: ["Menu", "Chef", "Reservations"],
        badgeText: "Proud Recipient of 2 Michelin Stars",
        statsLabel: "Wine Varieties",
        statsValue: "450+"
      },
      {
        brandName: "Foundry Grill",
        heroTitle: "Smoked Craft &",
        heroHighlight: "Rustic Flavors",
        subtitle: "Wood-fired steaks and artisanal hand-crafted cocktails built on traditional smokehouse methods.",
        features: defaultFeatures2,
        cta: "Reserve a Table",
        ctaSubtext: "Private booths available.",
        navLinks: ["Smokehouse", "Drinks", "Private Events"],
        badgeText: "Ranked Top 10 Steakhouses in State",
        statsLabel: "Aged Prime Cut Selection",
        statsValue: "18 Days"
      }
    ],
    playful: [
      {
        brandName: "Taco Loco",
        heroTitle: "Crazy Good and",
        heroHighlight: "Spicy Tacos",
        subtitle: "Vibrant and authentic street food served with a wild twist and fresh homemade sauces.",
        features: defaultFeatures1,
        cta: "Order Pickup / Delivery",
        ctaSubtext: "Fast and piping hot delivery.",
        navLinks: ["Menu", "Locations", "Order Online"],
        badgeText: "Voted Best Street Tacos in Town!",
        statsLabel: "Satisfied Foodies",
        statsValue: "1M+"
      },
      {
        brandName: "SugarRush",
        heroTitle: "Doughnuts, Milkshakes &",
        heroHighlight: "Sweet Dreams",
        subtitle: "A neon wonderland featuring crazy sweet creations, giant milkshakes, and customizable doughnuts!",
        features: defaultFeatures2,
        cta: "Build a Sugar Box",
        ctaSubtext: "Sugar rush guaranteed.",
        navLinks: ["Menu Creator", "Shakes", "Party Bookings"],
        badgeText: "Now offering gluten-free options!",
        statsLabel: "Sprinkles Used Today",
        statsValue: "4.5M"
      }
    ],
    luxurious: [
      {
        brandName: "L'Etoile",
        heroTitle: "An Unparalleled Taste of",
        heroHighlight: "Pure Elegance",
        subtitle: "Indulge in our carefully curated multi-course tasting menu crafted by world-renowned French chefs.",
        features: defaultFeatures1,
        cta: "Inquire for Private Seating",
        ctaSubtext: "Strict dress code enforced.",
        navLinks: ["Tasting Menu", "Wine Cellar", "Private Estates"],
        badgeText: "Selected as Global Culinary Icon 2026",
        statsLabel: "Chef Awards",
        statsValue: "12"
      },
      {
        brandName: "The Gilded Lounge",
        heroTitle: "Artisanal Oysters &",
        heroHighlight: "Vintage Caviar",
        subtitle: "Sophisticated seafood and top-shelf champagne pairings served in an opulent, gold-leaf aesthetic.",
        features: defaultFeatures2,
        cta: "Request Lounge Pass",
        ctaSubtext: "Exclusive member access after 10 PM.",
        navLinks: ["Oyster Bar", "Champagne Menu", "VIP Rooms"],
        badgeText: "Private Waterfront Dining",
        statsLabel: "Vintage Dom Pérignon Pool",
        statsValue: "24 Years"
      }
    ],
    energetic: [
      {
        brandName: "FireGrill",
        heroTitle: "Extreme Sizzle &",
        heroHighlight: "Intense Spice",
        subtitle: "The absolute hottest, smokiest BBQ joint in town. Come hungry, leave completely satisfied.",
        features: defaultFeatures1,
        cta: "Browse Sizzling Menu",
        ctaSubtext: "Challenge yourself with our ghost pepper wings.",
        navLinks: ["Menu", "Our Pitmasters", "Locations"],
        badgeText: "Try our Triple Smoke Pit Challenge!",
        statsLabel: "Ghost Peppers Eaten",
        statsValue: "15,000+"
      },
      {
        brandName: "Noodle Rush",
        heroTitle: "Fast, Hot & Spicy",
        heroHighlight: "Street Woks",
        subtitle: "Blazing fast stir-fried noodles tossed in high-heat woks right in front of your eyes.",
        features: defaultFeatures2,
        cta: "Speed Order Now",
        ctaSubtext: "Average prep time under 3 minutes.",
        navLinks: ["Customize Wok", "Bowls", "Express Delivery"],
        badgeText: "Loud Beats & Fiery Treats",
        statsLabel: "Woks Tossed / Hour",
        statsValue: "180"
      }
    ],
    trustworthy: [
      {
        brandName: "Nonna's",
        heroTitle: "Authentic Family-Style",
        heroHighlight: "Italian Tradition",
        subtitle: "Delicious, rich family recipes passed down lovingly through multiple generations.",
        features: defaultFeatures1,
        cta: "See Family Menu",
        ctaSubtext: "Open daily for lunch and dinner.",
        navLinks: ["Nonna's Story", "Menu", "Reservations"],
        badgeText: "Warmly serving our local community since 1950",
        statsLabel: "Handmade Pasta Batches",
        statsValue: "250,000"
      },
      {
        brandName: "Harvest Table",
        heroTitle: "100% Organic &",
        heroHighlight: "Farm-To-Fork",
        subtitle: "Sustainably grown, locally sourced organic ingredients from family farms we know and trust.",
        features: defaultFeatures2,
        cta: "Meet Our Farmers",
        ctaSubtext: "All ingredients traced back to local soil.",
        navLinks: ["Farms", "Green Menu", "Education"],
        badgeText: "Zero Pesticides & Fully Organic Purity",
        statsLabel: "Local Partner Farms",
        statsValue: "14"
      }
    ]
  },
  "clothing": {
    professional: [
      {
        brandName: "Thread & Co",
        heroTitle: "High-Quality &",
        heroHighlight: "Modern Basics",
        subtitle: "Sustainably sourced, long-lasting premium clothing designed for the style-conscious professional.",
        features: defaultFeatures1,
        cta: "Shop The Collection",
        ctaSubtext: "Free shipping and returns over $75.",
        navLinks: ["Men", "Women", "Sourcing"],
        badgeText: "100% Organic Egyptian Cotton",
        statsLabel: "Sustainable Output",
        statsValue: "100%"
      },
      {
        brandName: "Form & Fit",
        heroTitle: "Perfect Tailoring &",
        heroHighlight: "Sleek Silhouettes",
        subtitle: "Sophisticated capsule wardrobes custom engineered to fit your body type flawlessly.",
        features: defaultFeatures2,
        cta: "Find Your Perfect Fit",
        ctaSubtext: "Includes a free custom tailors assessment.",
        navLinks: ["Capsules", "Fitting App", "Philosophy"],
        badgeText: "Next-gen 3D Fit Engine inside",
        statsLabel: "Perfect Fit Guarantee",
        statsValue: "99.7%"
      }
    ],
    playful: [
      {
        brandName: "PopStyle",
        heroTitle: "Express Your Vibrant",
        heroHighlight: "True Colors",
        subtitle: "Quirky, bold, and energetic clothing that makes a statement wherever you walk.",
        features: defaultFeatures1,
        cta: "Grab 10% Discount Coupon",
        ctaSubtext: "Unlock massive weekly sticker packs.",
        navLinks: ["Custom Tees", "Fun Jackets", "Sale"],
        badgeText: "Strictly Limited Edition Drops",
        statsLabel: "Quirky Artwork Options",
        statsValue: "800+"
      },
      {
        brandName: "PixelWear",
        heroTitle: "Chiptune & Retro",
        heroHighlight: "Arcade Fashion",
        subtitle: "Indie clothing featuring high-quality pixel art embroidery and neon accents.",
        features: defaultFeatures2,
        cta: "Insert Coin & Shop",
        ctaSubtext: "Ships in collector arcade box.",
        navLinks: ["8-Bit Tees", "Hoodies", "Keychains"],
        badgeText: "Official collaboration with retro titles!",
        statsLabel: "Nostalgia Factor",
        statsValue: "100/100"
      }
    ],
    luxurious: [
      {
        brandName: "Maison",
        heroTitle: "Exquisite Elegance In",
        heroHighlight: "Every Single Thread",
        subtitle: "Bespoke high-end fashion and couture collections designed in the heart of Paris.",
        features: defaultFeatures1,
        cta: "Discover the Atelier",
        ctaSubtext: "Private styling available by appointment.",
        navLinks: ["Fall Collection", "Atelier", "Global Boutiques"],
        badgeText: "Presented at Paris & Milan Fashion Weeks",
        statsLabel: "Exclusive Boutiques",
        statsValue: "20"
      },
      {
        brandName: "Valerius Silk",
        heroTitle: "Premium Italian Silk",
        heroHighlight: "Loungewear",
        subtitle: "Indulgently soft, custom embroidered silk pajamas and robes crafted for ultimate comfort.",
        features: defaultFeatures2,
        cta: "Explore Silk Robes",
        ctaSubtext: "Hand-spun silk.",
        navLinks: ["Loom", "Robes", "Custom Monogram"],
        badgeText: "Hand-crafted in Lake Como, Italy",
        statsLabel: "Silk Thread Count",
        statsValue: "800"
      }
    ],
    energetic: [
      {
        brandName: "Velocity",
        heroTitle: "Built Strictly For",
        heroHighlight: "Peak Athleticism",
        subtitle: "High-performance activewear engineered with breathability and extreme flexibility in mind.",
        features: defaultFeatures1,
        cta: "Shop Elite Activewear",
        ctaSubtext: "Free high-speed returns and exchanges.",
        navLinks: ["Running Specs", "Gym Clothing", "Yoga Collection"],
        badgeText: "Revolutionary Omni-Dry Sweat Wick Tech",
        statsLabel: "Athletes Sponsored",
        statsValue: "50+"
      },
      {
        brandName: "Ignite Gear",
        heroTitle: "Light Up Your",
        heroHighlight: "Night Runs",
        subtitle: "Fully reflective, hyper-visible athletic gear with embedded custom LED warning arrays.",
        features: defaultFeatures2,
        cta: "Light Up Run",
        ctaSubtext: "Battery life guaranteed for 12 hours.",
        navLinks: ["LED Jackets", "Vests", "Battery Tech"],
        badgeText: "Ultra-Lightweight Safety Fabrics",
        statsLabel: "Visibility Distance",
        statsValue: "500m"
      }
    ],
    trustworthy: [
      {
        brandName: "Heritage",
        heroTitle: "Timeless Quality That",
        heroHighlight: "Lasts a Lifetime",
        subtitle: "Heavyweight denim, raw leather boots, and durable shirts constructed with classic techniques.",
        features: defaultFeatures1,
        cta: "Invest in Classics",
        ctaSubtext: "Backed fully by our legendary lifetime repair guarantee.",
        navLinks: ["Raw Denim", "Leather Boots", "Workshop Story"],
        badgeText: "All goods proudly hand-crafted in the USA",
        statsLabel: "Years of Family Craft",
        statsValue: "50"
      },
      {
        brandName: "EcoShield Wear",
        heroTitle: "Fair Trade & Fully",
        heroHighlight: "Sustainable Protection",
        subtitle: "All jackets made 100% from ocean-bound plastics and colored strictly with organic plant dyes.",
        features: defaultFeatures2,
        cta: "Support Clean Oceans",
        ctaSubtext: "10% of each purchase goes to ocean cleanups.",
        navLinks: ["Ocean Plastic Tech", "Dye Process", "Impact Audit"],
        badgeText: "Certified B-Corp & Global Eco Seal",
        statsLabel: "Plastics Upcycled",
        statsValue: "180 Tons"
      }
    ]
  },
  "portfolio": {
    professional: [
      {
        brandName: "Alex Doe",
        heroTitle: "Building Seamless &",
        heroHighlight: "Digital Journeys",
        subtitle: "Senior Product Designer specializing in building beautiful, accessible SaaS dashboards.",
        features: defaultFeatures1,
        cta: "Examine Case Studies",
        ctaSubtext: "Currently booking select freelance contracts.",
        navLinks: ["UX Work", "Writing", "Contact Details"],
        badgeText: "Featured UX design on ProductHunt",
        statsLabel: "Digital Products Shipped",
        statsValue: "50+"
      },
      {
        brandName: "Devin Code",
        heroTitle: "Bulletproof Backend",
        heroHighlight: "Architecture Specialist",
        subtitle: "Rust & Go systems engineer building distributed systems with low latency and high reliability.",
        features: defaultFeatures2,
        cta: "Request Tech Resume",
        ctaSubtext: "Active open-source maintainer.",
        navLinks: ["OSS Projects", "Benchmarks", "Contact"],
        badgeText: "Top 0.1% GitHub Contributor",
        statsLabel: "Production Uptime Maintained",
        statsValue: "99.99%"
      }
    ],
    playful: [
      {
        brandName: "Studio Z",
        heroTitle: "Let's Make Something",
        heroHighlight: "Incredibly Magical",
        subtitle: "Creative director and illustrator crafting whimsical brand visuals for lovely startups.",
        features: defaultFeatures1,
        cta: "Say Hello & Spark Magic",
        ctaSubtext: "Will paint for coffee.",
        navLinks: ["Fun Portfolio", "Goodies Store", "Send Message"],
        badgeText: "Official illustrator for leading children books",
        statsLabel: "Happy Indie Brands",
        statsValue: "120+"
      },
      {
        brandName: "Pixel Pete",
        heroTitle: "Pixel Art & Cute",
        heroHighlight: "Game Assets",
        subtitle: "Indie game designer crafting retro tiles, character models, and funny walking loops.",
        features: defaultFeatures2,
        cta: "Download Free Asset Pack",
        ctaSubtext: "Includes Unity & Godot presets.",
        navLinks: ["Sprites", "Animations", "Hire Pete"],
        badgeText: "Creator of 3 award-winning jam games",
        statsLabel: "Asset Downloads",
        statsValue: "80,000"
      }
    ],
    luxurious: [
      {
        brandName: "E. Vance",
        heroTitle: "Bespoke Art Direction",
        heroHighlight: "For Premium Brands",
        subtitle: "Transforming identities of modern luxury and fashion brands with sleek, elevated design concepts.",
        features: defaultFeatures1,
        cta: "Inquire for Selected Works",
        ctaSubtext: "Access strictly password protected.",
        navLinks: ["Protected Work", "Aesthetic", "Contact"],
        badgeText: "Design featured in Vogue & Architectural Digest",
        statsLabel: "Exhibitions & Shows",
        statsValue: "15"
      },
      {
        brandName: "Alexander V",
        heroTitle: "Haute Couture & High",
        heroHighlight: "End Photography",
        subtitle: "Capturing the striking elegance of premium models and fine art objects with medium format film.",
        features: defaultFeatures2,
        cta: "View Selected Plates",
        ctaSubtext: "Limited silver gelatin prints available.",
        navLinks: ["Gallery", "Monographs", "Studio"],
        badgeText: "Solo Show at Paris Fine Art Museum 2026",
        statsLabel: "Limited Pressings",
        statsValue: "500"
      }
    ],
    energetic: [
      {
        brandName: "Max Motion",
        heroTitle: "Bringing Dynamic Motion",
        heroHighlight: "Straight to Life",
        subtitle: "Freelance 3D and motion designer crafting high-energy visual loops and responsive interactive reels.",
        features: defaultFeatures1,
        cta: "Watch Dynamic Showreel",
        ctaSubtext: "Updated for summer 2026 with new work.",
        navLinks: ["3D Work", "VFX Loops", "Say Hi!"],
        badgeText: "Official VFX contributor for global music festivals",
        statsLabel: "Frames Rendered & Baked",
        statsValue: "1.2B+"
      },
      {
        brandName: "Sonic Boom",
        heroTitle: "Loud, Heavy & Immersive",
        heroHighlight: "Sound Design",
        subtitle: "Custom synthesizer patches and high-energy SFX design for action-packed video games.",
        features: defaultFeatures2,
        cta: "Hear Demo Tracks",
        ctaSubtext: "Warning: Turn your bass up.",
        navLinks: ["Tracks", "Synth Specs", "Hire Studio"],
        badgeText: "Won Best Audio Design Award 2025",
        statsLabel: "Synthesizers in Studio",
        statsValue: "28"
      }
    ],
    trustworthy: [
      {
        brandName: "Sarah Dev",
        heroTitle: "Enterprise Software &",
        heroHighlight: "Reliable Backend",
        subtitle: "Expert full-stack engineer and cybersecurity consultant specialized in securing medical records.",
        features: defaultFeatures1,
        cta: "Review Security Audits",
        ctaSubtext: "All code fully cryptographically signed.",
        navLinks: ["SaaS Projects", "Security Audits", "Contact Details"],
        badgeText: "Registered Whitehat Security Consultant",
        statsLabel: "Production Bugs Found & Fixed",
        statsValue: "10,000+"
      },
      {
        brandName: "Arthur Finance",
        heroTitle: "Dependable Fintech &",
        heroHighlight: "Ledger Security",
        subtitle: "Consulting architect specialized in building high-frequency banking APIs and ledger databases.",
        features: defaultFeatures2,
        cta: "Verify PGP Key",
        ctaSubtext: "Available for critical emergency audits.",
        navLinks: ["Core Banking", "Ledgers", "Auditing"],
        badgeText: "Certified Ledger Integrity Architect",
        statsLabel: "API Integrity Audited",
        statsValue: "100%"
      }
    ]
  },
  "startup": {
    professional: [
      {
        brandName: "LaunchPad",
        heroTitle: "Accelerate Your Venture",
        heroHighlight: "Growth Now",
        subtitle: "The ultimate scaling ecosystem for modern software startups to acquire customers and measure metrics.",
        features: [
          { icon: "🚀", title: "Rapid Scale", description: "Automated user acquisition loops built to scale." },
          { icon: "📊", title: "Real-time Metrics", description: "Granular cohort retention and LTV calculations." },
          { icon: "🛡️", title: "Enterprise Ready", description: "Fully compliant SOC2 and GDPR framework templates." }
        ],
        cta: "Launch Your App",
        ctaSubtext: "Free 14-day growth trial.",
        navLinks: ["Features", "Pricing", "Enterprise"],
        badgeText: "Voted #1 Startup Product of 2026",
        statsLabel: "Startups Scaled",
        statsValue: "1,500+"
      },
      {
        brandName: "SynergyFlow",
        heroTitle: "Streamline Your Business",
        heroHighlight: "Operations Today",
        subtitle: "The unified operational platform designed to sync team workflows, document knowledge, and track OKRs.",
        features: [
          { icon: "⚙️", title: "Automated Workflows", description: "Connect tools and design custom logic in minutes." },
          { icon: "📂", title: "Centralized Knowledge", description: "A single secure directory for all company policies." },
          { icon: "🎯", title: "Goal Tracking", description: "Align teams dynamically around key objectives." }
        ],
        cta: "Request Enterprise Demo",
        ctaSubtext: "Book a personalized team walkthrough.",
        navLinks: ["Platform", "Solutions", "Pricing"],
        badgeText: "Trusted by 500+ global enterprises",
        statsLabel: "Time Saved",
        statsValue: "20 hrs/wk"
      }
    ],
    playful: [
      {
        brandName: "Yo! Startup",
        heroTitle: "Build Creative Dreams",
        heroHighlight: "In Minutes",
        subtitle: "Get your ideas out into the wild instantly, without writing boring boilerplate configuration files.",
        features: [
          { icon: "🎈", title: "Fast Setup", description: "No complex setup. Just select your preset templates and run." },
          { icon: "🍕", title: "Fuel Ideas", description: "Unlock badges, points, and digital prizes as you build." },
          { icon: "✨", title: "Magic Content", description: "Instantly create brand logos and descriptions using AI." }
        ],
        cta: "Get Started Free",
        ctaSubtext: "Start building immediately!",
        navLinks: ["Why Us", "Games", "Pricing"],
        badgeText: "Now with 100% more pixels!",
        statsLabel: "Happy Creators",
        statsValue: "85,000"
      },
      {
        brandName: "Zappy.io",
        heroTitle: "Make Group Projects",
        heroHighlight: "Super Fun",
        subtitle: "A super cute, interactive productivity whiteboard where your team can sketch ideas and play game-like challenges.",
        features: [
          { icon: "🎨", title: "Interactive Canvas", description: "Draw, stick notes, and use goofy emojis with your team." },
          { icon: "👾", title: "Gamified Sprints", description: "Earn badges and level up as you complete your tickets." },
          { icon: "💬", title: "Cute Avatars", description: "Talk in voice rooms using cute pixel avatars." }
        ],
        cta: "Create Free Board",
        ctaSubtext: "No signup required to start sketching.",
        navLinks: ["Playground", "Templates", "Pricing"],
        badgeText: "Loved by creative teams worldwide 🦄",
        statsLabel: "Boards Created",
        statsValue: "250,000+"
      }
    ],
    luxurious: [
      {
        brandName: "Aether Venture",
        heroTitle: "Bespoke Incubation For",
        heroHighlight: "Elite Founders",
        subtitle: "A premium private sanctuary providing capital, elite design execution, and world-class distribution.",
        features: [
          { icon: "⚜️", title: "Bespoke Advisory", description: "Private guidance from serial founders with $10B+ exits." },
          { icon: "💎", title: "Exclusive Funding", description: "Access premium syndicate capital circles in silence." },
          { icon: "🏛️", title: "Elite Network", description: "Strictly limited member seats for maximum prestige." }
        ],
        cta: "Request Invitation",
        ctaSubtext: "Strict NDAs required for onboarding.",
        navLinks: ["Aesthetic", "Capital", "Advisors"],
        badgeText: "Managing Over $5B in Private Syndicate Capital",
        statsLabel: "Success Rate",
        statsValue: "100%"
      },
      {
        brandName: "Verdant Capital",
        heroTitle: "Elevate Modern Founders",
        heroHighlight: "To New Heights",
        subtitle: "Exclusive capital placement, bespoke financial design, and high-prestige syndication for visionary founders.",
        features: [
          { icon: "📈", title: "Bespoke Placements", description: "Custom financing structures tailored for high-growth firms." },
          { icon: "🔐", title: "Discreet Syndication", description: "Private capital matching with ultra-exclusive family offices." },
          { icon: "⚜️", title: "Founders Concierge", description: "Dedicated strategic partners for tax, legal, and operational prep." }
        ],
        cta: "Request Private Briefing",
        ctaSubtext: "Subject to verification of founding credentials.",
        navLinks: ["Heritage", "Capital Solutions", "Contact"],
        badgeText: "Exclusive Syndicate For Exceptional Visionaries",
        statsLabel: "Syndicate Net Worth",
        statsValue: "$12B+"
      }
    ],
    energetic: [
      {
        brandName: "HyperLaunch",
        heroTitle: "Scale Your Growth At",
        heroHighlight: "Warp Speed",
        subtitle: "High-octane marketing engines and customer acquisition funnels to out-pace your competition.",
        features: [
          { icon: "🔥", title: "Warp Speed Loops", description: "Push features and launch campaigns in under 60 seconds." },
          { icon: "⚡", title: "Hyper Analytics", description: "Real-time user engagement tracking with absolute zero lag." },
          { icon: "💥", title: "Growth Hacks", description: "Unlock proprietary organic marketing funnels instantly." }
        ],
        cta: "Go Hyper Now",
        ctaSubtext: "Limited free growth assessments.",
        navLinks: ["Campaigns", "Speed", "Pricing"],
        badgeText: "Caution: Built for high-growth tech",
        statsLabel: "Average CTR Boost",
        statsValue: "240%"
      },
      {
        brandName: "Vortex.io",
        heroTitle: "Unleash Massive Startup",
        heroHighlight: "Velocity Now",
        subtitle: "High-octane growth engines, fast deployment pipelines, and instant customer feedback systems built for action.",
        features: [
          { icon: "⚡", title: "Sub-Second Deployments", description: "Ship your code to production in less than a second." },
          { icon: "💥", title: "High-Impact Analytics", description: "Real-time user heatmaps and action tracking on the fly." },
          { icon: "🔥", title: "Blitzscaling Playbook", description: "Access battle-tested growth scripts to acquire initial users." }
        ],
        cta: "Start Blitzscaling",
        ctaSubtext: "Get instantly onboarded in 20 seconds.",
        navLinks: ["Velocity", "Stack", "Pricing"],
        badgeText: "Built strictly for fast-moving startups",
        statsLabel: "Speed Increase",
        statsValue: "10x Faster"
      }
    ],
    trustworthy: [
      {
        brandName: "SafeScale",
        heroTitle: "Secure Corporate Growth &",
        heroHighlight: "Stability",
        subtitle: "Compliant capital injection and corporate scaling blueprints for risk-averse, safety-first companies.",
        features: [
          { icon: "🔒", title: "Shield Security", description: "Top-tier database encryption and privacy by default." },
          { icon: "⚖️", title: "Legal Compliance", description: "Automated regulatory reporting for SEC, GDPR and HIPAA." },
          { icon: "🤝", title: "Guaranteed Stability", description: "Backed by 24/7 technical operations and auditing squads." }
        ],
        cta: "Consult SafeScale",
        ctaSubtext: "Includes detailed compliance audits.",
        navLinks: ["Compliance", "Audit", "Safety"],
        badgeText: "Backed by the National Security Council",
        statsLabel: "Audit Rating",
        statsValue: "AAA"
      },
      {
        brandName: "Vanguard Guard",
        heroTitle: "Secure Your Enterprise",
        heroHighlight: "Digital Assets",
        subtitle: "Military-grade data compliance, automated security patching, and strict isolation for modern startup stacks.",
        features: [
          { icon: "🛡️", title: "Zero Trust Network", description: "Complete separation of concerns and end-to-end encryption." },
          { icon: "🔍", title: "Continuous Audits", description: "Real-time vulnerability scanning and immediate report builds." },
          { icon: "📋", title: "Auto Compliance", description: "Instant generation of SOC2, ISO27001, and HIPAA compliance packs." }
        ],
        cta: "Schedule Audit Consultation",
        ctaSubtext: "Backed by 24/7 Incident Response team.",
        navLinks: ["Security", "Compliance", "Advisories"],
        badgeText: "Authorized Federal Compliance Scaffolding",
        statsLabel: "Secured Systems",
        statsValue: "4,500+"
      }
    ]
  }
};

export function getMockData(type: import("@/types/generator").ProjectType, vibe: import("@/types/generator").BrandVibe): LandingPageData {
  const options = MOCK_DATA[type]?.[vibe];
  if (!options || options.length === 0) {
    return MOCK_DATA["ai-saas"]["professional"][0];
  }
  // Randomly select one of the variations to simulate actual generative variability!
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
