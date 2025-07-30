import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Briefcase, Building2, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const heroSlides = [
  {
    title: "Building the Future, One Project at a Time.",
    description: "Akash Enterprises is your trusted partner in construction and development, delivering excellence and reliability for over a decade.",
    imageUrl: "https://placehold.co/1200x600.png",
    imageHint: "modern architecture"
  },
  {
    title: "Innovative Commercial Spaces.",
    description: "We create cutting-edge commercial buildings that are both functional and aesthetically pleasing, designed to meet the demands of modern business.",
    imageUrl: "https://placehold.co/1200x600.png",
    imageHint: "corporate building"
  },
  {
    title: "Luxury Residential Properties.",
    description: "Our residential projects are the epitome of comfort and luxury, built with the finest materials and an unwavering attention to detail.",
    imageUrl: "https://placehold.co/1200x600.png",
    imageHint: "luxury home"
  },
];

const stats = [
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    value: "15+",
    label: "Years of Service",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    value: "300+",
    label: "Projects Completed",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: "250+",
    label: "Satisfied Clients",
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


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full bg-card">
          <Carousel
            className="w-full"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[600px] w-full">
                    <Image
                      src={slide.imageUrl}
                      alt={slide.title}
                      data-ai-hint={slide.imageHint}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="container px-4 md:px-6 text-center text-white">
                        <div className="flex flex-col justify-center space-y-4">
                          <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                              {slide.title}
                            </h1>
                            <p className="max-w-[600px] mx-auto text-gray-200 md:text-xl">
                              {slide.description}
                            </p>
                          </div>
                          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                            <Button asChild size="lg">
                              <Link href="/portfolio">Our Work</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                               <Link href="/contact">Contact Us</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 border-white hover:bg-white hover:text-black" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 border-white hover:bg-white hover:text-black" />
          </Carousel>
        </section>

        <section id="stats" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((stat, index) => (
                <Card key={index} className="flex flex-col items-center justify-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="flex flex-col items-center gap-4">
                    {stat.icon}
                    <p className="text-4xl font-bold">{stat.value}</p>
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
              {clients.map((client) => (
                <div key={client.name} className="flex justify-center">
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
