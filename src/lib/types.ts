export type RegionId = 'in_rural' | 'in_metro' | 'us_corp' | 'eu_minimal' | 'apac_startup';

export type CurrencyCode = 'INR' | 'USD' | 'EUR' | 'GBP' | 'JPY';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rateAgainstUSD: number;
  rateAgainstINR: number;
  format: (amount: number) => string;
}

export interface PersonaProfile {
  id: RegionId;
  name: string;
  locationName: string;
  country: string;
  flag: string;
  defaultLang: string;
  currency: CurrencyCode;
  avatarStyle: 'traditional' | 'smart_casual' | 'corporate' | 'creative';
  avatarUrl: string;
  avatarCaption: string;
  themePreset: 'village_vibrant' | 'neon_tech' | 'corporate_slate' | 'cyber_glow' | 'minimal_amber';
  paymentPrimary: 'upi' | 'stripe' | 'calendly' | 'whatsapp';
  greetingTitle: string;
  greetingSubtitle: string;
  greetingAudioText: string;
  testimonialsFilter: RegionId;
  projectsFilter: RegionId;
  whatsappNumber: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  region: RegionId;
  tags: string[];
  metrics: string;
  image: string;
  liveUrl?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  region: RegionId;
  avatar: string;
  quote: string;
  rating: number;
}

export interface VisitorLog {
  id: string;
  timestamp: string;
  city: string;
  country: string;
  device: string;
  lang: string;
  actionTaken?: string;
}

export interface ServiceTier {
  id: string;
  title: string;
  tagline: string;
  inrPrice: number;
  usdPrice: number;
  features: string[];
  popular?: boolean;
}
