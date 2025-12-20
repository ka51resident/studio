
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Briefcase, Building2, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import React, { useRef, useEffect, useState } from "react";
import AnimatedCounter from "@/components/animated-counter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";


const stats = [
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    value: 30,
    label: "Years of Service",
    postfix: "+",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    value: 750,
    label: "Projects Completed",
    postfix: "+",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: 350,
    label: "Satisfied Clients",
    postfix: "+",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    value: 3,
    label: "Million Safe Man-Hours",
    postfix: "+",
  },
];

const testimonials = [
  {
    quote: "Akash Enterprises handled our complete HT and LT electrical installation flawlessly. The team’s professionalism, adherence to timelines, and focus on safety were exceptional",
    name: "Manjushree Technopack Ltd",
  },
  {
    quote: "The quality of work and technical expertise Akash Enterprises brings to every site sets them apart. Their attention to detail and coordination with other contractors ensured seamless execution",
    name: "Suprajit Engineering Limited",
  },
  {
    quote: "Electrical safety is critical for hospitals, and Akash Enterprises exceeded our expectations. Their understanding of healthcare systems, conformity to audit standards, and commitment to zero downtime impressed us",
    name: "Bagchi Sri Shankara Cancer Care & Research Institute",
  },
  {
    quote: "From design to commissioning, Akash Enterprises demonstrated complete ownership. The lighting and power systems in our hotel were executed with precision and quality workmanship",
    name: "Marasa Sarovar Premiere, Tirupati",
  },
  {
    quote: "The team at Akash Enterprises is dependable and highly skilled. They worked efficiently in a live office environment with minimal disruption and excellent results",
    name: "Bosch India",
  },
  {
    quote: "We’ve partnered with Akash Enterprises on multiple expansion projects. Their consistency in quality and proactive communication make them our preferred electrical contractor",
    name: "Toyota Kirloskar Motor Limiteda",
  },
  {
    quote: "Akash Enterprises executed the entire electrical scope of our office towers flawlessly. The team maintained quality and safety throughout, earning our full confidence.",
    name: "MSRDB North Tower",
  },
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
    const testimonialPlugin = React.useRef(
      Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    const [clients, setClients] = useState<{name: string, logo: string}[]>([]);

    useEffect(() => {
        const clientLogos = [
            '1.png', '2.png', '3.png', '4.png', '5.png', '6.png',
            '7.png', '8.png', '9.png', '10.png', '11.png',
            '12.png', '13.png','14.png', '15.png','16.png','17.png','18.png'
        ].map(fileName => ({
            name: fileName.split('.')[0].replace(/(\d+)$/, ' $1').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
            logo: `/clients/${fileName}`
        }));
        setClients(clientLogos);
    }, []);

    const clientsFirstRow = clients.slice(0, Math.ceil(clients.length / 2));
    const clientsSecondRow = clients.slice(Math.ceil(clients.length / 2));


  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-20 lg:py-28 bg-card">
          <div className="container px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-6">
              <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Powering Progress with People, Safety and Sustainability
                </h1>
                <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Akash Enterprises delivers safe, sustainable, and quality-driven power solutions across industrial, commercial, and infrastructure projects built on trust, technical excellence, and over three decades of experience.
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

        <section id="stats" className="py-12 md:py-24 bg-background">
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
                plugins={[testimonialPlugin.current]}
                className="w-full max-w-4xl mx-auto"
                onMouseEnter={testimonialPlugin.current.stop}
                onMouseLeave={testimonialPlugin.current.reset}
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 h-full">
                                <Card className="h-full p-6 shadow-lg flex flex-col justify-between">
                                    <blockquote className="flex flex-col justify-between h-full">
                                        <p className="text-muted-foreground mb-4 text-lg">“{testimonial.quote}”</p>
                                        <footer className="font-semibold text-right">- {testimonial.name}</footer>
                                    </blockquote>
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

        <section id="clients" className="py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
                    Our Clientele & Partners
                </h2>
                <div 
                    className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                >
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
                        {clientsFirstRow.map((client) => (
                            <li key={client.name} className="relative w-[300px] h-[120px]">
                                <Image src={client.logo} alt={client.name} fill className="object-contain" loading="lazy" />
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll" aria-hidden="true">
                        {clientsFirstRow.map((client) => (
                            <li key={client.name} className="relative w-[300px] h-[120px]">
                                <Image src={client.logo} alt={client.name} fill className="object-contain" loading="lazy" />
                            </li>
                        ))}
                    </ul>
                </div>
                 <div 
                    className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mt-8"
                >
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll-reverse">
                        {clientsSecondRow.map((client) => (
                            <li key={client.name} className="relative w-[300px] h-[120px]">
                                <Image src={client.logo} alt={client.name} fill className="object-contain" loading="lazy" />
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll-reverse" aria-hidden="true">
                        {clientsSecondRow.map((client) => (
                            <li key={client.name} className="relative w-[300px] h-[120px]">
                                <Image src={client.logo} alt={client.name} fill className="object-contain" loading="lazy" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
      </main>
    </div>
  )
};

    
    
