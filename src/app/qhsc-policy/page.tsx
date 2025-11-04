
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Award, Leaf, Shield, Gem } from "lucide-react";

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

export default function QHSCPolicyPage() {
  return (
    <div className="container py-12 md:py-24 animate-in fade-in duration-500">
        <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 animate-in fade-in slide-in-from-top-4 duration-700">QHSE Policy</h1>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg animate-in fade-in slide-in-from-top-6 duration-700">
                Our commitment to Quality, Health, Safety, and Environment.
            </p>
        </section>

        <section>
            <div className="max-w-4xl mx-auto">
                <Card className="mb-8 shadow-lg">
                    <CardHeader>
                        <CardTitle>Our Policy Statement</CardTitle>
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
                            <div className="flex items-center gap-4 text-left">
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
