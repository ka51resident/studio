
import { Metadata } from "next";
import ServicesContent from "./_components/services-content";

export const metadata: Metadata = {
  title: "Services | Akash Enterprises",
  description: "Explore our comprehensive electrical engineering services, from industrial electrification to healthcare solutions, all delivered with a commitment to quality and safety.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
