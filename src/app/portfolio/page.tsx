
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
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import placeholderImages from "@/lib/placeholder-images.json";
import ImageWithLoader from "@/components/ui/image-with-loader";

const services = [
  {
    id: "eht-ht-lt",
    title: "EHT, HT & LT",
    icon: <PlugZap className="h-6 w-6" />,
    images: placeholderImages.services['eht-ht-lt'],
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
    images: placeholderImages.services.industrial,
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
    title: "Commercial & Hospitality Electrification",
    icon: <Building className="h-6 w-6" />,
    images: placeholderImages.services['commercial-hospitality'],
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
    title: "Healthcare & Pharmaceutical Electrification",
    icon: <Hospital className="h-6 w-6" />,
    images: placeholderImages.services.healthcare,
    description:
      "Akash Enterprises delivers specialized electrical solutions for healthcare and pharmaceutical environments where safety, reliability, and regulatory compliance are critical. These facilities demand uninterrupted power, precise environmental control, and infrastructure that supports both patient care and process integrity.",
    content:
      "We design and implement electrical systems that support continuous operation, audit readiness, sterile environments, and enhanced safety for patients, staff, and technical teams. Our experience in high-dependency and process-critical areas ensures that every installation meets stringent healthcare and pharmaceutical standards. Our solutions are designed to maintain sterile conditions, ensure process reliability, and safeguard patient care. We work closely with facility teams, consultants, and auditors to deliver electrical systems that operate flawlessly in demanding 24/7 environments.",
    substations: [
      "Electrical systems for hospitals, clinics, laboratories, and pharmaceutical plants",
      "HT and LT distribution systems for critical and non-critical zones",
      "Life safety systems including fire alarm, emergency lighting, and evacuation support",
      "Nurse call systems, medical-grade wiring, and isolated power systems",
      "Cleanroom electrical installations and process-critical cabling",
      "Power integration for HVAC, chillers, AHUs, and specialized medical equipment",
      "Energy management systems and high-efficiency lighting",
      "Compliance support for audits and statutory requirements",
    ],
  },
  {
    id: "elv",
    title: "ELV Systems",
    icon: <Shield className="h-6 w-6" />,
    images: placeholderImages.services.elv,
    description:
      "Akash Enterprises provides complete design and installation of Extra Low Voltage (ELV) systems that support modern communication, security, and building automation needs. Our integrated approach ensures that all ELV systems work together seamlessly to enhance safety, connectivity, and operational efficiency.",
    content:
      "Our ELV solutions are engineered for reliability, scalability, and compliance, ensuring your facility remains secure and future-ready.",
    substations: [
      "Structured cabling and data networks",
      "Access control and biometric systems",
      "CCTV surveillance and monitoring solutions",
      "Public address and voice evacuation systems",
      "Fire alarm systems and detection equipment",
      "Building automation and integrated control systems",
      "Server rooms, racks, and IT infrastructure support",
    ],
  },
  {
    id: "value-engineering",
    title: "Value Engineering",
    icon: <Gem className="h-6 w-6" />,
    images: placeholderImages.services['value-engineering'],
    description:
      "Akash Enterprises offers value engineering services that enhance the performance, efficiency, and longevity of your electrical infrastructure. Our goal is to help clients reduce operational costs, improve system reliability, and achieve long-term sustainability without compromising quality or safety.",
    content:
      "Through detailed analysis and targeted improvements, we help you optimize energy consumption, prevent downtime, and extend the life of your electrical assets.",
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                              {service.substations.map((item, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-2 bg-muted/50 p-3 rounded-lg"
                                >
                                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
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
                              <ImageWithLoader
                                src={image.src}
                                alt={`${service.title} - example project ${index + 1}`}
                                data-ai-hint={image.hint}
                                fill
                                className="object-cover"
                                wrapperClassName="aspect-video"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        {service.images.length > 1 && (
                          <>
                            <CarouselPrevious className="left-2 md:-left-4" />
                            <CarouselNext className="right-2 md:-right-4" />
                          </>
                        )}
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
