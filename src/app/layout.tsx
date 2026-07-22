import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/lib/store';

export const metadata: Metadata = {
  title: 'WorldFolio X • Your Local Dev. Global Reach.',
  description: 'Revolutionary AI-powered, hyper-adaptive portfolio & resume that automatically transforms itself based on geographic location, language, and cultural context.',
  keywords: ['WorldFolio X', 'Adaptive Portfolio', 'AI Resume', 'Next.js 14', 'TypeScript', 'Fullstack Developer'],
  authors: [{ name: 'Dnyaneshwar' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
