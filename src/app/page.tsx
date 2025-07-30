
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Briefcase, Building2, ShieldCheck, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import AnimatedCounter from "@/components/animated-counter";

const stats = [
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    value: 15,
    label: "Years of Service",
    postfix: "+",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    value: 300,
    label: "Projects Completed",
    postfix: "+",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: 250,
    label: "Satisfied Clients",
    postfix: "+",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    value: 1.5,
    label: "Million Safe Man-Hours",
    postfix: "M+",
  },
];

const testimonials = [
  {
    quote: "Akash Enterprises transformed our vision into reality. Their commitment to quality and deadlines is unparalleled. We couldn't be happier with the outcome.",
    name: "Priya Sharma",
    title: "CEO, Innovate Solutions",
  },
  {
    quote: "The team's professionalism and expertise were evident from day one. They delivered an exceptional product that exceeded all our expectations.",
    name: "Rohan Gupta",
    title: "Director, TechCorp",
  },
  {
    quote: "Working with Akash Enterprises was a seamless experience. Their communication was clear and consistent, making the entire process a breeze.",
    name: "Anjali Mehta",
    title: "Founder, Creative Minds",
  },
];

const clients = [
  { name: "Innovate Solutions", logo: "https://placehold.co/150x60.png", hint: "tech logo" },
  { name: "TechCorp", logo: "https://placehold.co/150x60.png", hint: "corporate logo" },
  { name: "Creative Minds", logo: "https://placehold.co/150x60.png", hint: "design logo" },
  { name: "Global Ventures", logo: "https://placehold.co/150x60.png", hint: "global logo" },
  { name: "NextGen Industries", logo: "https://placehold.co/150x60.png", hint: "industrial logo" },
  { name: "Apex Group", logo: "https://placehold.co/150x60.png", hint: "business logo" },
];

const heroImages = [
    { src: "https://placehold.co/1200x600.png", alt: "Modern architecture", hint: "modern architecture" },
    { src: "https://placehold.co/1200x600.png", alt: "Construction site", hint: "construction site" },
    { src: "https://placehold.co/1200x600.png", alt: "Finished project", hint: "luxury home" },
]


export default function Home() {
    const plugin = React.useRef(
      Autoplay({ delay: 3000, stopOnInteraction: true })
    )
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-20 lg:py-28 bg-card">
          <div className="container px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-6">
              <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Building the Future, One Project at a Time.
                </h1>
                <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                  Akash Enterprises is your trusted partner in construction and development, delivering excellence and reliability for over a decade.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center animate-in fade-in slide-in-from-top-6 duration-700">
                <Button asChild size="lg">
                  <Link href="/portfolio">Our Work</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                   <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
              <div className="w-full max-w-5xl pt-8 animate-in fade-in zoom-in-95 duration-700">
                 <Carousel 
                    plugins={[plugin.current]}
                    className="w-full"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                 >
                    <CarouselContent>
                      {heroImages.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                             <Image
                                src={image.src}
                                alt={image.alt}
                                data-ai-hint={image.hint}
                                width={1200}
                                height={600}
                                className="object-cover rounded-xl shadow-2xl"
                              />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
              </div>
            </div>
          </div>
        </section>

        <section id="stats" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
              Our Achievements
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <Card key={index} className="flex flex-col items-center justify-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 animate-in fade-in slide-in-from-bottom-8" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}>
                  <CardContent className="flex flex-col items-center gap-4">
                    {stat.icon}
                    <div className="text-4xl font-bold">
                       <AnimatedCounter target={stat.value} postfix={stat.postfix} />
                    </div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-12 md:py-24 bg-card">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
              What Our Clients Say
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="flex flex-col justify-between p-6 h-full shadow-lg">
                        <div>
                          <div className="flex mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <p className="text-muted-foreground mb-4">&quot;{testimonial.quote}&quot;</p>
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        <section id="clients" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
              Our Clientele & Partners
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {clients.map((client, index) => (
                <div key={client.name} className="flex justify-center animate-in fade-in zoom-in-95" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards' }}>
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={150}
                    height={60}
                    data-ai-hint={client.hint}
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
