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

const policyItems = [
  {
    value: "quality",
    title: "Quality Management (ISO 9001:2015)",
    icon: <Award className="h-5 w-5 text-primary" />,
    points: [
      "Deliver services with consistent quality, meeting or exceeding customer requirements and expectations.",
      "Establish and maintain an Integrated Management System (IMS) that promotes continual improvement of services through measurable objectives and regular reviews.",
      "Foster a workplace culture of openness, mutual respect, innovation, empowerment, teamwork, and excellence.",
    ],
  },
  {
    value: "environmental",
    title: "Environmental Management (ISO 14001:2015)",
    icon: <Leaf className="h-5 w-5 text-primary" />,
    points: [
      "Prevent pollution and minimize environmental impact by using energy and natural resources efficiently and optimally.",
      "Commit to protecting the environment by reducing waste, managing resources sustainably, and addressing environmental risks effectively.",
      "Fulfil compliance obligations by adhering to all applicable environmental laws, regulations, and other requirements.",
    ],
  },
  {
    value: "safety",
    title: "Occupational Health & Safety (ISO 45001:2018)",
    icon: <Shield className="h-5 w-5 text-primary" />,
    points: [
      "Provide a safe and healthy work environment for all personnel and interested parties by identifying and controlling hazards to prevent occupational injuries, illnesses, and property loss.",
      "Eliminate hazards and reduce OH&S risks through systematic hazard identification, risk assessment, and implementation of appropriate controls.",
      "Enhance awareness of occupational health and safety risks and controls through training, participation, and consultation with workers at all levels.",
      "Strive for continual improvement of OH&S performance by establishing measurable objectives and evaluating performance regularly.",
    ],
  },
  {
    value: "commitments",
    title: "Our Commitments",
    icon: <Gem className="h-5 w-5 text-primary" />,
    points: [
      "Promote the active consultation and participation of all personnel in IMS processes and decision-making.",
      "Meet all relevant legal, regulatory, and other applicable requirements, while aligning our operations with global best practices.",
      "Continuously seek opportunities for improvement in quality, environmental sustainability, and workplace safety.",
      "Act as a responsible corporate citizen, fulfilling societal obligations and delivering value to stakeholders while ensuring the safety, health, and wellbeing of all.",
    ],
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
      
      <section className="py-12 md:py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Commitment to Safety & Quality</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 shadow-lg">
            <CardHeader>
              <CardTitle>Our Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Akash Enterprises is dedicated and committed to providing its customers and the ultimate consumer the electrical services in the buildings, factories, residential areas with consistent quality and timely delivery, in line with customer requirements and satisfaction. We strive to meet or exceed customer expectations and objectives of all stakeholders, whilst enhancing value for all stakeholders.
              </p>
              <p>
                At Akash Enterprises, we are committed to delivering high-quality electrical installation and maintenance services for buildings, factories, and residential areas. Our services include the design, procurement, installation, commissioning, and maintenance of electrical systems and products. We are dedicated to ensuring customer satisfaction, enhancing stakeholder value, protecting the environment, and safeguarding the health and safety of all personnel and other interested parties. To achieve this, we align our operations with ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 standards.
              </p>
            </CardContent>
          </Card>

          <Accordion type="single" collapsible className="w-full">
            {policyItems.map((item) => (
              <AccordionItem value={item.value} key={item.value}>
                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                    <div className="flex items-center gap-4">
                        {item.icon}
                        {item.title}
                    </div>
                </AccordionTrigger>
                <AccordionContent className="pl-12">
                  <ul className="list-disc space-y-2 text-muted-foreground">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

    </div>
  );
}
