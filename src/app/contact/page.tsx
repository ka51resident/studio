
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./_components/contact-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const officeLocations = [
  {
    title: "Head Office",
    address: "123 Construction Ave, Suite 100, Metropolis, ST 12345",
    mapLink: "https://www.google.com/maps/search/?api=1&query=123+Construction+Ave,+Metropolis"
  },
  {
    title: "Regional Office (North)",
    address: "456 Industry Blvd, Gotham City, ST 67890",
    mapLink: "https://www.google.com/maps/search/?api=1&query=456+Industry+Blvd,+Gotham+City"
  },
  {
    title: "Regional Office (South)",
    address: "789 Innovation Drive, Star City, ST 54321",
    mapLink: "https://www.google.com/maps/search/?api=1&query=789+Innovation+Drive,+Star+City"
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
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-full">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-muted-foreground">Send us an email for inquiries.</p>
              <a href="mailto:contact@akash.enterprises" className="text-primary hover:underline">
                contact@akash.enterprises
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-full">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-muted-foreground">Give us a call during business hours.</p>
              <a href="tel:+1234567890" className="text-primary hover:underline">
                (123) 456-7890
              </a>
            </div>
          </div>
          
          <Separator />

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <MapPin className="h-7 w-7 text-primary" />
              Our Offices
            </h3>
            <div className="space-y-6">
              {officeLocations.map((office, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-lg">{office.title}</h4>
                  <p className="text-muted-foreground mb-2">{office.address}</p>
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link href={office.mapLink} target="_blank" rel="noopener noreferrer">
                      View on Map
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
