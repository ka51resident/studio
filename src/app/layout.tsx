import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Header from '@/components/header';
import Footer from '@/components/footer';
<<<<<<< HEAD
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/next"
=======
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next"
>>>>>>> fec8c71 (implement vercel speed-insights)

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Akash Enterprises',
  description: 'Building the future, one project at a time.',
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
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased', inter.variable)}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
<<<<<<< HEAD
        <Analytics />
=======
        <SpeedInsights />
>>>>>>> fec8c71 (implement vercel speed-insights)
      </body>
    </html>
  );
}
