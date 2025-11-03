
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import ProjectModal from "./_components/project-modal";
import type { Project } from "./_components/project-modal";

const projects: Project[] = [
  {
    title: "Modern Corporate HQ",
    category: "Commercial",
    imageUrl: "https://picsum.photos/seed/project1/600/400",
    hint: "modern office building",
    description: "A landmark corporate headquarters designed for innovation and collaboration. This state-of-the-art facility features an open-concept layout, sustainable building materials, and advanced smart-building technology to create a productive and inspiring work environment.",
    details: [
      { label: "Location", value: "Metropolis" },
      { label: "Size", value: "250,000 sq ft" },
      { label: "Duration", value: "24 Months" },
      { label: "Features", value: "LEED Platinum, Rooftop Garden, Smart HVAC" },
    ],
    images: [
      { src: "https://picsum.photos/seed/p1-1/800/600", alt: "Office Lobby", hint: "modern office lobby" },
      { src: "https://picsum.photos/seed/p1-2/800/600", alt: "Exterior View", hint: "office building exterior" },
      { src: "https://picsum.photos/seed/p1-3/800/600", alt: "Collaborative Workspace", hint: "open office workspace" },
    ],
  },
  {
    title: "Luxury Residential Tower",
    category: "Residential",
    imageUrl: "https://picsum.photos/seed/project2/600/400",
    hint: "apartment building",
    description: "An iconic residential tower offering breathtaking city views and unparalleled luxury. Each unit is meticulously crafted with high-end finishes, and residents enjoy access to a full suite of amenities including a pool, fitness center, and private cinema.",
    details: [
        { label: "Location", value: "Coast City" },
        { label: "Units", value: "150" },
        { label: "Height", value: "40 Stories" },
        { label: "Amenities", value: "Rooftop Pool, Gym, Concierge" },
    ],
    images: [
      { src: "https://picsum.photos/seed/p2-1/800/600", alt: "Apartment Interior", hint: "luxury apartment interior" },
      { src: "https://picsum.photos/seed/p2-2/800/600", alt: "Rooftop Pool", hint: "rooftop pool city" },
      { src: "https://picsum.photos/seed/p2-3/800/600", alt: "Building Lobby", hint: "luxury hotel lobby" },
    ],
  },
  {
    title: "State-of-the-Art Factory",
    category: "Industrial",
    imageUrl: "https://picsum.photos/seed/project3/600/400",
    hint: "industrial factory",
    description: "A cutting-edge industrial facility designed for maximum efficiency and safety. This project involved complex engineering and the integration of automated systems to support large-scale manufacturing operations.",
    details: [
        { label: "Location", value: "Industrial Park 12" },
        { label: "Size", value: "500,000 sq ft" },
        { label: "Technology", value: "Automated Assembly Lines, Robotics" },
        { label: "Completed", value: "2022" },
    ],
    images: [
      { src: "https://picsum.photos/seed/p3-1/800/600", alt: "Factory Floor", hint: "factory assembly line" },
      { src: "https://picsum.photos/seed/p3-2/800/600", alt: "Warehouse section", hint: "large industrial warehouse" },
      { src: "https://picsum.photos/seed/p3-3/800/600", alt: "Exterior of factory", hint: "modern factory exterior" },
    ],
  },
  {
    title: "Community Shopping Mall",
    category: "Commercial",
    imageUrl: "https://picsum.photos/seed/project4/600/400",
    hint: "shopping mall exterior",
    description: "A vibrant shopping and lifestyle destination for the community. The mall features a diverse mix of retail stores, dining options, and entertainment venues, all housed within an inviting, modern architectural design.",
    details: [
        { label: "Location", value: "Oakwood Suburbs" },
        { label: "Retail Space", value: "300,000 sq ft" },
        { label: "Anchor Tenants", value: "3" },
        { label: "Parking", value: "2,000+ spaces" },
    ],
    images: [
      { src: "https://picsum.photos/seed/p4-1/800/600", alt: "Mall interior", hint: "shopping mall interior" },
      { src: "https://picsum.photos/seed/p4-2/800/600", alt: "Food court", hint: "mall food court" },
      { src: "https://picsum.photos/seed/p4-3/800/600", alt: "Exterior at night", hint: "mall exterior night" },
    ],
  },
  {
    title: "Eco-Friendly Villa",
    category: "Residential",
    imageUrl: "https://picsum.photos/seed/project5/600/400",
    hint: "modern house",
    description: "A stunning example of sustainable luxury living. This custom-built villa integrates seamlessly with its natural surroundings and incorporates green technologies such as solar power, rainwater harvesting, and passive cooling.",
    details: [
        { label: "Location", value: "Green Valley" },
        { label: "Bedrooms", value: "5" },
        { label: "Lot Size", value: "2 Acres" },
        { label: "Green Features", value: "Solar Panels, Rainwater Harvesting" },
    ],
    images: [
      { src: "https://picsum.photos/seed/p5-1/800/600", alt: "Villa living room", hint: "luxury living room" },
      { src: "https://picsum.photos/seed/p5-2/800/600", alt: "Villa exterior and pool", hint: "modern house pool" },
      { src: "https://picsum.photos/seed/p5-3/800/600", alt: "Master bedroom", hint: "luxury bedroom view" },
    ],
  },
  {
    title: "Logistics Warehouse",
    category: "Industrial",
    imageUrl: "https://picsum.photos/seed/project6/600/400",
    hint: "large warehouse",
    description: "A massive logistics and distribution center built to streamline supply chain operations. The facility includes high-bay storage, advanced docking systems, and a fully integrated warehouse management system.",
    details: [
        { label: "Location", value: "Port District" },
        { label: "Size", value: "1,000,000 sq ft" },
        { label: "Loading Docks", value: "120" },
        { label: "Completion", value: "18 Months" },
    ],
    images: [
      { src: "https://picsum.photos/seed/p6-1/800/600", alt: "Warehouse interior", hint: "warehouse shelving" },
      { src: "https://picsum.photos/seed/p6-2/800/600", alt: "Loading docks", hint: "truck loading dock" },
      { src: "https://picsum.photos/seed/p6-3/800/600", alt: "Aerial view", hint: "warehouse aerial view" },
    ],
  },
];

const categories = ["All", "Commercial", "Residential", "Industrial"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="container py-12 md:py-24 animate-in fade-in duration-500">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 animate-in fade-in slide-in-from-top-4 duration-700">Our Portfolio</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg animate-in fade-in slide-in-from-top-6 duration-700">
          Explore a selection of our finest projects that showcase our commitment to quality and excellence.
        </p>
      </section>

      <div className="flex justify-center flex-wrap gap-2 mb-12 animate-in fade-in slide-in-from-top-8 duration-700">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group animate-in fade-in zoom-in-95 flex flex-col" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards' }}>
            <CardHeader className="p-0">
              <div className="relative h-60 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  data-ai-hint={project.hint}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle>{project.title}</CardTitle>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex justify-between items-center">
              <Badge variant={project.category === "Commercial" ? "default" : project.category === "Residential" ? "secondary" : "outline"}>
                {project.category}
              </Badge>
              <Button variant="link" className="p-0 h-auto" onClick={() => setSelectedProject(project)}>Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </section>
      
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
