import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/lib/store';

export const metadata: Metadata = {
  title: 'WorldFolio X • Your Local Dev. Global Reach.',
  description: 'Revolutionary AI-powered, hyper-adaptive portfolio & resume that automatically transforms itself based on geographic location, language, and cultural context.',
  keywords: ['WorldFolio X', 'Adaptive Portfolio', 'AI Resume', 'Next.js 14', 'TypeScript', 'Fullstack Developer', 'Dnyaneshwar'],
  authors: [{ name: 'Dnyaneshwar' }],
  metadataBase: new URL('https://world-folio-x.vercel.app'),
  verification: {
    google: 'google1462d9b7f1d00d92',
  },
  openGraph: {
    title: 'WorldFolio X • Your Local Dev. Global Reach.',
    description: 'World’s first AI-powered intelligent portfolio engine automatically adapting language, attire, theme, and currency.',
    url: 'https://world-folio-x.vercel.app',
    siteName: 'WorldFolio X',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'WorldFolio X Hyper-Adaptive AI Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WorldFolio X • Your Local Dev. Global Reach.',
    description: 'Local to Global Intelligent Portfolio Engine built in under 90 minutes.',
    images: ['https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="google1462d9b7f1d00d92" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
