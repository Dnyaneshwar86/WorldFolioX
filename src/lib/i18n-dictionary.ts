export interface Dictionary {
  navHome: string;
  navSkills: string;
  navProjects: string;
  navTestimonials: string;
  navStory: string;
  navPricing: string;
  navContact: string;
  heroBadge: string;
  tagline: string;
  ctaHire: string;
  ctaBookCall: string;
  ctaResume: string;
  timerLabel: string;
  timerReplayBtn: string;
  personaSwitchLabel: string;
  voiceNavActive: string;
  trustMapHeader: string;
  pricingHeader: string;
  contactHeader: string;
  liteModeToggle: string;
  payWithUpi: string;
  payWithStripe: string;
}

export const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी (Hindi)', flag: '🇮🇳' },
  { code: 'mr', name: 'मराठी (Marathi)', flag: '🇮🇳' },
  { code: 'gu', name: 'ગુજરાતી (Gujarati)', flag: '🇮🇳' },
  { code: 'ta', name: 'தமிழ் (Tamil)', flag: '🇮🇳' },
  { code: 'te', name: 'తెలుగు (Telugu)', flag: '🇮🇳' },
  { code: 'kn', name: 'கன்னட (Kannada)', flag: '🇮🇳' },
  { code: 'bn', name: 'বাংলা (Bengali)', flag: '🇮🇳' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)', flag: '🇮🇳' },
  { code: 'de', name: 'Deutsch (German)', flag: '🇩🇪' },
  { code: 'fr', name: 'Français (French)', flag: '🇫🇷' },
  { code: 'es', name: 'Español (Spanish)', flag: '🇪🇸' },
  { code: 'ja', name: '日本語 (Japanese)', flag: '🇯🇵' },
  { code: 'zh', name: '中文 (Chinese)', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية (Arabic)', flag: '🇸🇦' },
  { code: 'ru', name: 'Русский (Russian)', flag: '🇷🇺' },
  { code: 'pt', name: 'Português (Portuguese)', flag: '🇧🇷' },
];

export const DICTIONARIES: Record<string, Dictionary> = {
  en: {
    navHome: 'Home',
    navSkills: 'Skills',
    navProjects: 'Projects',
    navTestimonials: 'Testimonials',
    navStory: 'Journey',
    navPricing: 'Pricing',
    navContact: 'Contact',
    heroBadge: 'Hyper-Adaptive AI Portfolio',
    tagline: 'Your Local Dev. Global Reach.',
    ctaHire: 'Hire Me Now',
    ctaBookCall: 'Schedule Call',
    ctaResume: 'Download Resume (PDF)',
    timerLabel: '⚡ Built & Deployed in',
    timerReplayBtn: 'Replay 90-Min Build',
    personaSwitchLabel: 'Simulate Locale:',
    voiceNavActive: 'Voice Control Active',
    trustMapHeader: 'Global & Local Client Trust Map',
    pricingHeader: 'Transparent Service Packages',
    contactHeader: 'Get In Touch',
    liteModeToggle: 'Offline Lite Mode',
    payWithUpi: 'Pay via UPI QR Code',
    payWithStripe: 'Pay via Credit Card (Stripe)',
  },
  hi: {
    navHome: 'होम',
    navSkills: 'कौशल',
    navProjects: 'प्रोजेक्ट्स',
    navTestimonials: 'प्रशंसापत्र',
    navStory: 'यात्रा',
    navPricing: 'मूल्य निर्धारण',
    navContact: 'संपर्क करें',
    heroBadge: 'हाइपर-अडैप्टिव एआई पोर्टफोलियो',
    tagline: 'आपका स्थानीय डेवलपर। वैश्विक पहुंच।',
    ctaHire: 'मुझे अभी हायर करें',
    ctaBookCall: 'कॉल शेड्यूल करें',
    ctaResume: 'रिज्यूमे डाउनलोड करें',
    timerLabel: '⚡ केवल समय में बनाया गया:',
    timerReplayBtn: '90 मिनट बिल्ड रीप्ले देखें',
    personaSwitchLabel: 'स्थान बदलें:',
    voiceNavActive: 'वॉइस कंट्रोल सक्रिय',
    trustMapHeader: 'स्थानीय और वैश्विक ग्राहक मानचित्र',
    pricingHeader: 'पारदर्शी सेवा पैकेज',
    contactHeader: 'संपर्क में रहें',
    liteModeToggle: 'ऑफलाइन लाइट मोड',
    payWithUpi: 'यूपीआई क्यूआर द्वारा भुगतान करें',
    payWithStripe: 'स्ट्राइप द्वारा भुगतान करें',
  },
  mr: {
    navHome: 'मुख्य पृष्ठ',
    navSkills: 'कौशल्ये',
    navProjects: 'प्रकल्प',
    navTestimonials: 'अभिप्राय',
    navStory: 'प्रवास',
    navPricing: 'दर पत्रक',
    navContact: 'संपर्क करा',
    heroBadge: 'हायपर-अडॅप्टिव्ह AI पोर्टफोलिओ',
    tagline: 'तुमचा स्थानिक डेव्हलपर. जागतिक पोहोच.',
    ctaHire: 'काम सुरु करा',
    ctaBookCall: 'कॉल निश्चित करा',
    ctaResume: 'रेझ्युमे डाउनलोड करा',
    timerLabel: '⚡ अवघ्या वेळेत तयार केले:',
    timerReplayBtn: '९० मिनिटांचा रिप्ले पहा',
    personaSwitchLabel: 'स्थान निवडा:',
    voiceNavActive: 'व्हॉइस कंट्रोल सुरू आहे',
    trustMapHeader: 'स्थानिक व जागतिक विश्वास नकाशा',
    pricingHeader: 'सुलभ व स्पष्ट दर',
    contactHeader: 'संपर्क साधा',
    liteModeToggle: 'ऑफलाइन लाईट मोड',
    payWithUpi: 'UPI QR द्वारे पेमेंट करा',
    payWithStripe: 'कार्ड द्वारे पेमेंट करा',
  },
  de: {
    navHome: 'Startseite',
    navSkills: 'Fähigkeiten',
    navProjects: 'Projekte',
    navTestimonials: 'Referenzen',
    navStory: 'Reise',
    navPricing: 'Preise',
    navContact: 'Kontakt',
    heroBadge: 'Hyper-Adaptives KI-Portfolio',
    tagline: 'Ihr lokaler Entwickler. Globale Reichweite.',
    ctaHire: 'Jetzt Beauftragen',
    ctaBookCall: 'Termin Buchen',
    ctaResume: 'Lebenslauf Herunterladen',
    timerLabel: '⚡ Erstellt & Bereitgestellt in',
    timerReplayBtn: '90-Minuten-Build Replay',
    personaSwitchLabel: 'Standort Simulieren:',
    voiceNavActive: 'Sprachsteuerung Aktiv',
    trustMapHeader: 'Globale & Lokale Kundenkarte',
    pricingHeader: 'Transparente Dienstleistungspakete',
    contactHeader: 'Kontakt Aufnehmen',
    liteModeToggle: 'Offline-Lite-Modus',
    payWithUpi: 'Zahlen mit UPI',
    payWithStripe: 'Zahlen mit Kreditkarte (Stripe)',
  },
  ja: {
    navHome: 'ホーム',
    navSkills: 'スキル',
    navProjects: 'プロジェクト',
    navTestimonials: 'お客様の声',
    navStory: 'ストーリー',
    navPricing: '料金プラン',
    navContact: 'お問い合わせ',
    heroBadge: 'ハイパーアダプティブAIポートフォリオ',
    tagline: 'ローカルな開発。グローバルな成果。',
    ctaHire: '今すぐ依頼する',
    ctaBookCall: 'ミーティング予約',
    ctaResume: '履歴書をダウンロード',
    timerLabel: '⚡ 構築＆デプロイ完了:',
    timerReplayBtn: '90分リプレイ再生',
    personaSwitchLabel: '地域を変更:',
    voiceNavActive: '音声操作アクティブ',
    trustMapHeader: 'グローバル実績マップ',
    pricingHeader: '透明性の高い料金体系',
    contactHeader: 'お問い合わせはこちら',
    liteModeToggle: 'オフラインライトモード',
    payWithUpi: 'UPI決済',
    payWithStripe: 'クレジットカード決済 (Stripe)',
  },
};

export function getDictionary(lang: string): Dictionary {
  const code = lang.slice(0, 2).toLowerCase();
  return DICTIONARIES[code] || DICTIONARIES['en'];
}
