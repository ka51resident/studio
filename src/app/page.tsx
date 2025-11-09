
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Briefcase, Building2, ShieldCheck, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import React, { useMemo, useRef, useState } from "react";
import AnimatedCounter from "@/components/animated-counter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Logo from "@/components/logo";


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
    { name: "Innovate Solutions", logo: "https://picsum.photos/seed/logo1/150/60", hint: "tech logo" },
    { name: "TechCorp", logo: "https://picsum.photos/seed/logo2/150/60", hint: "corporate logo" },
    { name: "Creative Minds", logo: "https://picsum.photos/seed/logo3/150/60", hint: "design logo" },
    { name: "Global Ventures", logo: "https://picsum.photos/seed/logo4/150/60", hint: "global logo" },
    { name: "NextGen Industries", logo: "https://picsum.photos/seed/logo5/150/60", hint: "industrial logo" },
    { name: "Apex Group", logo: "https://picsum.photos/seed/logo6/150/60", hint: "business logo" },
    { name: "Marquee Motors", logo: "https://picsum.photos/seed/auto1/150/60", hint: "car logo" },
    { name: "PharmaCure", logo: "https://picsum.photos/seed/pharma1/150/60", hint: "pharma logo" },
    { name: "Starlight Hotels", logo: "https://picsum.photos/seed/hotel1/150/60", hint: "hotel logo" },
    { name: "Reliance Industries", logo: "https://picsum.photos/seed/reliance/150/60", hint: "industrial logo" },
    { name: "L&T Construction", logo: "https://picsum.photos/seed/lnt/150/60", hint: "construction logo" },
    { name: "Tata Projects", logo: "https://picsum.photos/seed/tata/150/60", hint: "corporate logo" },
    { name: "JSW Group", logo: "https://picsum.photos/seed/jsw/150/60", hint: "steel logo" },
    { name: "Adani Group", logo: "https://picsum.photos/seed/adani/150/60", hint: "corporate logo" },
    { name: "Shapoorji Pallonji", logo: "https://picsum.photos/seed/shapoorji/150/60", hint: "construction logo" },
    { name: "AeroSpace Dynamics", logo: "https://picsum.photos/seed/aero/150/60", hint: "aerospace logo" },
];


const heroImages = [
    { src: "https://picsum.photos/seed/hero1/1200/600", alt: "Modern architecture", hint: "modern architecture" },
    { src: "https://picsum.photos/seed/hero2/1200/600", alt: "Construction site", hint: "construction site" },
    { src: "https://picsum.photos/seed/hero3/1200/600", alt: "Finished project", hint: "luxury home" },
]

function StatItem({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: 0.1,
  });
  const isInView = !!entry?.isIntersecting;

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center gap-2 p-6 text-center bg-card rounded-lg shadow-lg",
        "transition-all duration-300 hover:scale-105 hover:shadow-xl",
        isInView ? "animate-in fade-in-0" : "opacity-0",
      )}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-2">
        {stat.icon}
      </div>
      <div className="text-4xl sm:text-5xl font-bold tracking-tighter text-primary">
        <AnimatedCounter
          target={stat.value}
          postfix={stat.postfix}
          isInView={isInView}
        />
      </div>
      <p className="text-sm sm:text-base text-muted-foreground mt-1">
        {stat.label}
      </p>
    </div>
  );
}


export default function Home() {
    const heroPlugin = React.useRef(
      Autoplay({ delay: 5000, stopOnInteraction: true })
    )
    const testimonialsPlugin = React.useRef(
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
                    plugins={[heroPlugin.current]}
                    className="w-full"
                    onMouseEnter={heroPlugin.current.stop}
                    onMouseLeave={heroPlugin.current.reset}
                 >
                    <CarouselContent>
                      {heroImages.map((image, index) => (
                        <CarouselItem key={index} className="pl-0">
                           <Image
                              src={image.src}
                              alt={image.alt}
                              data-ai-hint={image.hint}
                              width={1200}
                              height={600}
                              className="object-cover rounded-xl shadow-2xl"
                              priority={index === 0}
                              loading={index === 0 ? 'eager' : 'lazy'}
                            />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
              </div>
            </div>
          </div>
        </section>

        <section id="stats" className="py-12 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
              Our Achievements
            </h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, index) => (
                <StatItem key={index} stat={stat} index={index} />
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
              plugins={[testimonialsPlugin.current]}
              onMouseEnter={testimonialsPlugin.current.stop}
              onMouseLeave={testimonialsPlugin.current.reset}
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
            </Carousel>
          </div>
        </section>

        <section id="clients" className="py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
                  Our Clientele & Partners
                </h2>
                <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px] [perspective:2000px]">
                    <div className="absolute w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                         <div className="relative w-40 h-16 sm:w-48 sm:h-20 lg:w-56 lg:h-24 bg-card p-4 rounded-lg shadow-2xl flex items-center justify-center z-10">
                            <Logo />
                         </div>
                    </div>
                    <div className="relative w-full h-full animate-spin [animation-duration:40s] [animation-timing-function:linear] [animation-iteration-count:infinite]">
                        {clients.slice(0, 16).map((client, index) => {
                            const angle = (index / 16) * 360;
                            const radiusX = 'min(45%, 300px)';
                            const radiusY = 'min(30%, 200px)';
                            return (
                                <div
                                    key={client.name}
                                    className={cn(
                                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-16 sm:w-32 sm:h-20 bg-card rounded-lg shadow-lg flex items-center justify-center p-2",
                                        "transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:z-20"
                                    )}
                                    style={{
                                        transform: `rotate(${angle}deg) translate(calc(${radiusX} * cos(${angle}deg)), calc(${radiusY} * sin(${angle}deg))) rotate(-${angle}deg)`,
                                    }}
                                >
                                    {client.logo ? (
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        width={150}
                                        height={60}
                                        data-ai-hint={client.hint}
                                        className="object-contain max-w-full max-h-full"
                                        loading="lazy"
                                    />
                                    ) : (
                                    <p className="text-xs sm:text-sm font-semibold text-center text-muted-foreground">{client.name}</p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
      </main>
    </div>
  )
};

    