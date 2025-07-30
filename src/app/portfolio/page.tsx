"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const projects = [
  {
    title: "Modern Corporate HQ",
    category: "Commercial",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "modern office building"
  },
  {
    title: "Luxury Residential Tower",
    category: "Residential",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "apartment building"
  },
  {
    title: "State-of-the-Art Factory",
    category: "Industrial",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "industrial factory"
  },
  {
    title: "Community Shopping Mall",
    category: "Commercial",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "shopping mall exterior"
  },
  {
    title: "Eco-Friendly Villa",
    category: "Residential",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "modern house"
  },
  {
    title: "Logistics Warehouse",
    category: "Industrial",
    imageUrl: "https://placehold.co/600x400.png",
    hint: "large warehouse"
  },
];

const categories = ["All", "Commercial", "Residential", "Industrial"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="container py-12 md:py-24">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Portfolio</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
          Explore a selection of our finest projects that showcase our commitment to quality and excellence.
        </p>
      </section>

      <div className="flex justify-center flex-wrap gap-2 mb-12">
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
          <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
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
            <CardContent className="p-6">
              <CardTitle>{project.title}</CardTitle>
            </CardContent>
            <CardFooter>
              <Badge variant={project.category === "Commercial" ? "default" : project.category === "Residential" ? "secondary" : "outline"}>
                {project.category}
              </Badge>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}
