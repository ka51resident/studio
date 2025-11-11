
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Flag, Trophy, Zap, Award, Leaf, Shield, Gem } from "lucide-react";
import Image from "next/image";
import TimelineItem from "./_components/timeline-item";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const timelineEvents = [
  {
    year: "1992",
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
          To be the industry’s leading client-focused electrical solution provider, delivering exceptional quality through innovative, sustainable practices, energy conservation, adherence to international standards, and a steadfast commitment to safety.
          </p>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        
          <b>People-Planet-Profit Framework</b><br/>
          <p className="text-muted-foreground">
           We strive to grow People, Planet, and Profits in balance, creating safe, sustainable, and high-quality electrical infrastructure that serves communities today and empowers generations to come.

          </p>
        </div>
        <div className="relative h-96 rounded-lg overflow-hidden shadow-lg animate-in fade-in zoom-in duration-700">
          <Image
            src="https://picsum.photos/seed/about-us/600/450"
            alt="Our team"
            data-ai-hint="construction team meeting"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="mb-24 bg-card p-8 md:p-12 rounded-lg shadow-xl animate-in fade-in duration-700">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Message from Our Proprietor</h2>
            <blockquote className="max-w-3xl mx-auto">
              <div className="text-base md:text-lg text-muted-foreground mb-6 space-y-4">
                <p>“Our journey began with a single commitment: to deliver work that people could trust and to stand by every promise we made.”</p>
                <p>Akash Enterprises was founded on the belief that quality, safety, and integrity form the true foundation of every successful project. What started as a small, dedicated team has grown into a trusted name in electrical contracting, known for reliability, precision, and a hands-on approach.</p>
                <p>Over the years, we have had the privilege of powering industries, institutions, and communities. Each project has strengthened our conviction that excellence is achieved through discipline, teamwork, and genuine care for our clients and partners.</p>
                <p>Today, as the second generation steps in to take this legacy forward, our principles remain unchanged. The next chapter of Akash Enterprises is driven by innovation, sustainability, and a renewed commitment to the people who have always been at the heart of our success: our clients, our employees, and our partners.</p>
                <p>For us, true success lies in earning our clients’ trust, one project at a time.</p>
              </div>
              <cite className="font-semibold not-italic text-primary">- Ravindra Nayak, Proprietor and Founder</cite>
            </blockquote>
          </div>
          <div className="order-1 md:order-2 relative h-80 md:h-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://picsum.photos/seed/handshake/600/800"
              alt="A confident handshake"
              data-ai-hint="happy customer handshake"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
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
