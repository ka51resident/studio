import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Akash Enterprises | Premier Electrical Contracting Services',
    template: '%s | Akash Enterprises',
  },
  description: 'Akash Enterprises offers leading electrical contracting services for industrial, commercial, and healthcare sectors. Specializing in HT/LT substation work, safety, and sustainable solutions for over 30 years.',
  keywords: ['electrical contractor', 'industrial electrification', 'commercial electrical services', 'healthcare electrical solutions', 'HT substation', 'LT panels', 'electrical safety', 'sustainable energy', 'Akash Enterprises'],
  openGraph: {
    title: 'Akash Enterprises | Premier Electrical Contracting Services',
    description: 'Delivering safe, sustainable, and quality-driven power solutions for industrial, commercial, and infrastructure projects across India.',
    url: 'https://www.akashenterprises.com',
    siteName: 'Akash Enterprises',
    images: [
      {
        url: '/og-image.png', // It's good practice to have a specific Open Graph image
        width: 1200,
        height: 630,
        alt: 'Akash Enterprises - Powering Progress',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akash Enterprises | Premier Electrical Contracting Services',
    description: 'Your trusted partner for comprehensive electrical solutions, from industrial plants to commercial complexes.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href='/favicon.ico'/>
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased', inter.variable)}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
