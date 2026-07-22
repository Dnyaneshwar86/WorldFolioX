import { PersonaProfile, RegionId, CurrencyCode } from './types';

export const PERSONAS: Record<RegionId, PersonaProfile> = {
  in_rural: {
    id: 'in_rural',
    name: 'Rural & Village India (Gramin)',
    locationName: 'Sangamner / Rural Maharashtra',
    country: 'India',
    flag: '🇮🇳',
    defaultLang: 'mr',
    currency: 'INR',
    avatarStyle: 'traditional',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    avatarCaption: 'Authentic Traditional Indian Attire',
    themePreset: 'village_vibrant',
    paymentPrimary: 'upi',
    greetingTitle: 'राम राम! / नमस्ते!',
    greetingSubtitle: 'From Local Village Roots to Cutting-Edge Tech Solutions',
    greetingAudioText: 'Ram Ram! I build fast, simple, and high-trust digital solutions for local business growth and global impact.',
    testimonialsFilter: 'in_rural',
    projectsFilter: 'in_rural',
    whatsappNumber: '+919370983235',
  },
  in_metro: {
    id: 'in_metro',
    name: 'Tech Hub India (Bengaluru / Mumbai)',
    locationName: 'Bengaluru / Mumbai',
    country: 'India',
    flag: '🇮🇳',
    defaultLang: 'hi',
    currency: 'INR',
    avatarStyle: 'smart_casual',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    avatarCaption: 'Modern Tech Architect',
    themePreset: 'neon_tech',
    paymentPrimary: 'upi',
    greetingTitle: 'Namaste India!',
    greetingSubtitle: 'Building High-Scale Fullstack Platforms for Unicorns & Startups',
    greetingAudioText: 'Namaste! Ready to transform your product with hyper-fast Next.js AI applications and scalable architectures.',
    testimonialsFilter: 'in_metro',
    projectsFilter: 'in_metro',
    whatsappNumber: '+919370983235',
  },
  us_corp: {
    id: 'us_corp',
    name: 'Corporate North America',
    locationName: 'San Francisco / New York',
    country: 'United States',
    flag: '🇺🇸',
    defaultLang: 'en',
    currency: 'USD',
    avatarStyle: 'corporate',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    avatarCaption: 'Executive Software Engineer',
    themePreset: 'corporate_slate',
    paymentPrimary: 'calendly',
    greetingTitle: 'Welcome Enterprise Partner',
    greetingSubtitle: 'Engineering Enterprise AI Solutions & Mission-Critical Web Apps',
    greetingAudioText: 'Hello! I deliver high-performing enterprise-grade applications, custom AI workflows, and resilient cloud software.',
    testimonialsFilter: 'us_corp',
    projectsFilter: 'us_corp',
    whatsappNumber: '+14155552671',
  },
  eu_minimal: {
    id: 'eu_minimal',
    name: 'Minimalist Europe',
    locationName: 'Berlin / London / Zurich',
    country: 'Germany',
    flag: '🇪🇺',
    defaultLang: 'de',
    currency: 'EUR',
    avatarStyle: 'creative',
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    avatarCaption: 'Minimalist UX & Web Systems Design',
    themePreset: 'minimal_amber',
    paymentPrimary: 'stripe',
    greetingTitle: 'Guten Tag / Welcome',
    greetingSubtitle: 'Precision Engineering, Accessible UX & Clean Architecture',
    greetingAudioText: 'Willkommen! Focused on clean design, AAA accessibility, performance optimization, and robust engineering.',
    testimonialsFilter: 'eu_minimal',
    projectsFilter: 'eu_minimal',
    whatsappNumber: '+49301234567',
  },
  apac_startup: {
    id: 'apac_startup',
    name: 'Asia-Pacific Innovation Hub',
    locationName: 'Singapore / Tokyo',
    country: 'Singapore',
    flag: '🇸🇬',
    defaultLang: 'ja',
    currency: 'JPY',
    avatarStyle: 'smart_casual',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    avatarCaption: 'Global Tech Lead & AI Engineer',
    themePreset: 'cyber_glow',
    paymentPrimary: 'stripe',
    greetingTitle: 'Konnichiwa / Hello APAC!',
    greetingSubtitle: 'Hyper-Fast Product Iteration & Next-Gen AI Microservices',
    greetingAudioText: 'Konnichiwa! Let us build futuristic digital experiences with lightning speed, global localization, and AI smarts.',
    testimonialsFilter: 'apac_startup',
    projectsFilter: 'apac_startup',
    whatsappNumber: '+6567890123',
  },
};

export function detectUserPersona(countryCode?: string, lang?: string): PersonaProfile {
  const language = (lang || (typeof navigator !== 'undefined' ? navigator.language : 'en')).toLowerCase();
  
  if (language.includes('mr') || language.includes('gu') || language.includes('ta') || language.includes('te') || language.includes('kn') || language.includes('ml')) {
    return PERSONAS.in_rural;
  }
  if (language.includes('hi') || countryCode === 'IN') {
    return PERSONAS.in_metro;
  }
  if (countryCode === 'US' || countryCode === 'CA') {
    return PERSONAS.us_corp;
  }
  if (countryCode === 'DE' || countryCode === 'FR' || countryCode === 'GB' || countryCode === 'NL' || language.includes('de') || language.includes('fr')) {
    return PERSONAS.eu_minimal;
  }
  if (countryCode === 'JP' || countryCode === 'SG' || countryCode === 'KR' || language.includes('ja') || language.includes('zh')) {
    return PERSONAS.apac_startup;
  }

  return PERSONAS.in_metro;
}
