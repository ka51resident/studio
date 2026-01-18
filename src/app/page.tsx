
import type { Metadata } from 'next';
import HomeContent from '@/components/home-content';

export const metadata: Metadata = {
  title: "Akash Enterprises | Powering Progress with Safety and Sustainability",
  description: "Akash Enterprises delivers safe, sustainable, and quality-driven power solutions across industrial, commercial, and infrastructure projects. Discover our legacy of excellence.",
};

export default function Home() {
  return <HomeContent />;
}
