
"use client";

import {
  Building,
  CheckCircle2,
  Factory,
  Gem,
  Hospital,
  PlugZap,
  Shield,
} from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const services = [
  {
    id: "eht-ht-lt",
    title: "EHT, HT & LT",
    icon: <PlugZap className="h-6 w-6" />,
    images: [
      {
        src: "https://picsum.photos/seed/eht1/800/600",
        hint: "electrical substation",
      },
      {
        src: "https://picsum.photos/seed/eht2/800/600",
        hint: "power lines",
      },
      {
        src: "https://picsum.photos/seed/eht3/800/600",
        hint: "transformer station",
      },
    ],
    description:
      "We provide the solution to your Substation Construction needs by involving in all the phases from the scratch resulting in the requirement of Customer’s each structural, electrical and mechanical specifications.",
    content:
      "We power up 11kV/66kV/110kV/220kV Substations involving Site & Equipment Solution, Power Sanctioning & Statutory Approvals, Construction Drawing, and Cost Estimation, Design / Build capabilities, AutoCAD drawing and line mapping, Transformer Installation & Civil Works, Control Systems, Switchgear selection and Installation of LT Switchgear panel, Structural steel and fence selection, Engineering, Testing & Commissioning, Substation Maintenance Works. Our commitment to quality of the work and teamwork has earned us the trust of many long-standing customers. The rich field experience and design exposure reinforced the confidence to undertake varieties of contract works & a wide range of maintenance works for all types of projects.",
    substations: [
      "66/110/220 KV SUBSTATION",
      "66/110/220 KV UG CABLING & OVERHEAD LINES",
      "HT SUBSTATIONS & PANELS",
      "TRANSFORMERS & INSTALLATION",
      "LV PANELS & INSTALLATION",
    ],
  },
  {
    id: "industrial",
    title: "Industrial Electrification",
    icon: <Factory className="h-6 w-6" />,
    images: [
      {
        src: "https://picsum.photos/seed/industrial1/800/600",
        hint: "industrial factory interior",
      },
      {
        src: "https://picsum.photos/seed/industrial2/800/600",
        hint: "manufacturing plant",
      },
    ],
    description:
      "Akash Enterprises delivers comprehensive electrical solutions for industrial facilities, ensuring safety, efficiency, and long-term reliability. We support new industrial developments as well as system upgrades, helping manufacturers maintain uninterrupted operations and meet evolving industry standards.",
    content:
      "Our expertise spans power distribution, control systems, automation, and specialized installations for challenging industrial environments. Every solution is engineered with precision so your facility operates at peak performance while maintaining compliance and safety. Our experience across automotive, aerospace, FMCG, pharmaceuticals, engineering, packaging, and textiles ensures each project is executed with industry-specific understanding and best practices.",
    substations: [
      "Industrial power distribution systems",
      "Motor Control Centers (MCC) and Power Control Centers (PCC)",
      "HT and LT panel installation and integration",
      "Process automation and control wiring",
      "Hazardous area electrical works and flameproof installations",
      "Cable routing, tray systems, and earthing networks",
      "Machine power connectivity and equipment upgrades",
      "Energy-efficient solutions and power factor improvement",
      "Preventive and breakdown maintenance support",
    ],
  },
  {
    id: "commercial-hospitality",
    title: "Commercial & Hospitality",
    icon: <Building className="h-6 w-6" />,
    images: [
      {
        src: "https://picsum.photos/seed/commercial1/800/600",
        hint: "modern office building",
      },
      {
        src: "https://picsum.photos/seed/commercial2/800/600",
        hint: "hotel lobby interior",
      },
    ],
    description:
      "Akash Enterprises delivers specialized electrical solutions for commercial and hospitality environments, ensuring safety, functionality, and an elevated user experience. We understand the unique demands of offices, retail spaces, hotels, and resorts, where reliability, aesthetics, and seamless operations are critical.",
    content:
      "We design and implement complete electrical systems that support both frontline guest experiences and back-end operations, integrating energy-efficient lighting, automation, and power distribution for 24/7 performance. Our experience includes corporate offices, retail environments, hotels, resorts, education institutions, and mixed-use commercial spaces, all executed to the highest standards of safety and quality.",
    substations: [
        "Complete electrical wiring and distribution for commercial and hospitality projects",
        "LT panels, distribution boards, bus ducts, and rising mains",
        "Lighting design, façade lighting, and ambience-driven illumination",
        "Backup power systems, UPS solutions, and generator integration",
        "Smart lighting controls and building management systems",
        "Cable management, tray systems, and structured electrical layouts",
        "Earthing and lightning protection systems",
        "Renovation, retrofitting, and upgrades for running facilities",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: <Hospital className="h-6 w-6" />,
    images: [
      {
        src: "https://picsum.photos/seed/hospitality1/800/600",
        hint: "modern hospital exterior",
      },
      {
        src: "https://picsum.photos/seed/hospitality2/800/600",
        hint: "hospital room",
      },
    ],
    description:
      "Specialized electrical systems for healthcare and hospitality sectors, meeting stringent regulatory requirements and ensuring guest and patient safety.",
    content:
      "We understand the critical nature of electrical systems in hospitals, clinics, and hotels. We provide reliable power, life-safety systems, nurse call stations, and sophisticated lighting and energy management systems designed for 24/7 operation and the comfort of your guests and patients.",
    substations: [],
  },
  {
    id: "elv",
    title: "ELV Systems",
    icon: <Shield className="h-6 w-6" />,
    images: [
      {
        src: "https://picsum.photos/seed/elv1/800/600",
        hint: "security camera network",
      },
      {
        src: "https://picsum.photos/seed/elv2/800/600",
        hint: "server room",
      },
    ],
    description:
      "Design and installation of Extra-Low Voltage (ELV) systems for modern communication, security, and building automation.",
    content:
      "Our ELV services include structured cabling, access control, CCTV, public address systems, and fire alarm systems. We integrate these critical systems to enhance the safety, security, and connectivity of your facility, all while ensuring seamless operation.",
    substations: [],
  },
  {
    id: "value-added",
    title: "Value Added Services",
    icon: <Gem className="h-6 w-6" />,
    images: [
      {
        src: "https://picsum.photos/seed/value1/800/600",
        hint: "electrical engineering schematic",
      },
      {
        src: "https://picsum.photos/seed/value2/800/600",
        hint: "energy audit",
      },
    ],
    description:
      "Beyond standard installations, we offer services that enhance the longevity, efficiency, and reliability of your electrical infrastructure.",
    content:
      "Our value-added services include energy audits, power quality analysis, preventative maintenance programs, thermal imaging, and retrofitting of existing systems. We help you optimize energy consumption, prevent downtime, and extend the life of your electrical assets.",
    substations: [],
  },
];

export default function ServicesPage() {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <div className="container py-12 md:py-24 animate-in fade-in duration-500">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 animate-in fade-in slide-in-from-top-4 duration-700">
          Our Services
        </h1>
        <p className="max-w-3xl mx-auto text-muted-foreground text-lg animate-in fade-in slide-in-from-top-6 duration-700">
          We offer a comprehensive range of electrical engineering services,
          tailored to meet the unique needs of each sector we serve.
        </p>
      </section>

      <Tabs defaultValue={services[0].id} className="w-full">
        <TabsList className="h-auto flex-wrap justify-center bg-transparent p-0 gap-2 sm:gap-4">
            {services.map((service) => (
            <TabsTrigger
                key={service.id}
                value={service.id}
                className="w-full sm:w-auto flex-col sm:flex-row justify-center sm:justify-start text-base font-semibold py-3 px-4 h-auto rounded-lg data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
            >
                <div className="flex items-center gap-3">
                    {service.icon}
                    {service.title}
                </div>
            </TabsTrigger>
            ))}
        </TabsList>

        <div className="mt-8">
            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-0">
                <Card className="overflow-hidden shadow-lg animate-in fade-in zoom-in-95 duration-500">
                  <div className="grid lg:grid-cols-2">
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <h2 className="text-3xl font-bold mb-4">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground text-base mb-6">
                        {service.description}
                      </p>
                      <p className="text-muted-foreground text-base">
                        {service.content}
                      </p>

                      {service.substations &&
                        service.substations.length > 0 && (
                          <div className="mt-8">
                            <h3 className="font-bold text-xl mb-4">
                              Scope of Services
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                              {service.substations.map((item, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-3 bg-muted/50 p-3 rounded-lg"
                                >
                                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                  <span className="font-medium text-sm">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                    <div className="relative min-h-[300px] md:min-h-0 p-8">
                      <Carousel
                        plugins={[plugin.current]}
                        className="w-full"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                      >
                        <CarouselContent>
                          {service.images.map((image, index) => (
                            <CarouselItem key={index}>
                              <div className="relative aspect-video">
                                <Image
                                  src={image.src}
                                  alt={service.title}
                                  data-ai-hint={image.hint}
                                  fill
                                  className="object-cover rounded-lg"
                                  loading="lazy"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                      </Carousel>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
        </div>
      </Tabs>
    </div>
  );
}
