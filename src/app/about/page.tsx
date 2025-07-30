import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, Flag, Trophy, Zap } from "lucide-react";
import Image from "next/image";

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
            src="https://placehold.co/600x450.png"
            alt="Our team"
            data-ai-hint="construction team meeting"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-center md:justify-normal md:odd:flex-row-reverse animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="hidden md:block w-1/2"></div>
                <div className="hidden md:flex items-center justify-center w-12">
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-card rounded-full ring-4 ring-primary shadow-lg">
                    {event.icon}
                  </div>
                </div>
                <Card className="w-full md:w-1/2 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex md:hidden items-center justify-center w-10 h-10 bg-card rounded-full ring-2 ring-primary shadow-lg shrink-0">
                      {event.icon}
                    </div>
                    <time className="text-lg font-bold text-primary">{event.year}</time>
                  </div>
                  <CardHeader className="p-0">
                    <CardTitle>{event.title}</CardTitle>
                  </CardHeader>
                  <CardDescription className="pt-2">{event.description}</CardDescription>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
