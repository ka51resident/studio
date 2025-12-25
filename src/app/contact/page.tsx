
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./_components/contact-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const officeLocations = [
  {
    title: "HEAD OFFICE",
    address: " <b>ANNA</b> Complex, 4th Floor,# 430, Hennagara Gate, Bommasandra Indl. Area, Hosur Road, Bangalore - 560 099",
  },
  {
    title: "BIDADI",
    address: " # 391 / 468, <b>Shreya Complex</b> Bidadi Indl. Area Main Road, Medanahalli Village, Bidadi Hobli, Ramanagara Dist. Bangalore - 562 109.",
  },
  {
    title: "ODISHA",
    address: "Ramachandrapur Bazar, PO Jatni, PS Jatni, Khordha District - 752050",
  }
];

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-24">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
          We&apos;re here to help. Reach out to us with any questions or to start your next project.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <ContactForm />
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <MapPin className="h-7 w-7 text-primary" />
              Our Offices
            </h3>
            <div className="space-y-6">
              {officeLocations.map((office, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-lg">{office.title}</h4>
                  <p 
                    className="text-muted-foreground mb-2"
                    dangerouslySetInnerHTML={{ __html: office.address }}
                  />
                 
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
