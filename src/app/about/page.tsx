
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Flag, Trophy, Zap, Award, Leaf, Shield, Gem } from "lucide-react";
import Image from "next/image";
import TimelineItem from "./_components/timeline-item";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const timelineEvents = [
  {
    year: "2008",
    title: "Foundation",
    description: "Akash Enterprises was founded with a vision to revolutionize the construction industry through quality and innovation.",
    icon: <Flag className="h-5 w-5 text-primary" />,
  },
  {
    year: "2012",
    title: "First Major Project",
    description: "Successfully completed our first large-scale commercial project, setting a new benchmark for excellence.",
    icon: <Briefcase className="h-5 w-5 text-primary" />,
  },
  {
    year: "2018",
    title: "Expansion",
    description: "Expanded operations to new regions and diversified our portfolio to include residential and industrial projects.",
    icon: <Zap className="h-5 w-5 text-primary" />,
  },
  {
    year: "2023",
    title: "Industry Award",
    description: "Recognized with the 'Excellence in Construction' award for our commitment to quality, safety, and sustainability.",
    icon: <Trophy className="h-5 w-5 text-primary" />,
  },
];

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24 animate-in fade-in duration-500">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 animate-in fade-in slide-in-from-top-4 duration-700">About Akash Enterprises</h1>
        <p className="max-w-3xl mx-auto text-muted-foreground text-lg animate-in fade-in slide-in-from-top-6 duration-700">
          For over 15 years, we have been a cornerstone of the construction industry, committed to building with integrity, quality, and a passion for excellence.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="animate-in fade-in slide-in-from-left duration-700">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground mb-4">
            Our mission is to deliver superior construction services by consistently improving the quality of our product; to add value for clients through innovation, foresight, integrity, and aggressive performance; and to serve with character and purpose that brings honor to our name.
          </p>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-muted-foreground">
            To be the preeminent provider of superior construction services by consistently improving the quality of our product; to add value for clients through innovation, foresight, and integrity.
          </p>
        </div>
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg animate-in fade-in zoom-in duration-700">
          <Image
            src="https://picsum.photos/seed/about-us/600/450"
            alt="Our team"
            data-ai-hint="construction team meeting"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="mb-24 relative overflow-hidden rounded-lg shadow-xl animate-in fade-in duration-700">
        <div className="relative h-96">
          <Image
            src="https://picsum.photos/seed/handshake/1200/400"
            alt="A confident handshake"
            data-ai-hint="happy customer handshake"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A Message from Our Proprietor</h2>
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl italic mb-4">
              "Building is not just about structures; it's about building trust, relationships, and a better future. Every project is a testament to our commitment to excellence and a promise of reliability to our clients."
            </p>
            <cite className="font-semibold not-italic text-primary-foreground/80">- Akash Patel, Founder</cite>
          </blockquote>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
