
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

export type Project = {
  title: string;
  category: string;
  imageUrl: string;
  hint: string;
  description: string;
  details: { label: string; value: string }[];
  images: { src: string; alt: string; hint: string }[];
};

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const plugin = useRef(
      Autoplay({ delay: 3000, stopOnInteraction: true })
    )

  useEffect(() => {
    setIsOpen(!!project);
  }, [project]);

  if (!project) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0" onPointerDownOutside={(e) => e.preventDefault()}>
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/50 hover:bg-background">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </button>
        <div className="grid md:grid-cols-2">
          <div className="p-8 flex flex-col justify-center">
            <DialogHeader>
              <Badge variant="secondary" className="w-fit mb-2">{project.category}</Badge>
              <DialogTitle className="text-3xl font-bold mb-2">{project.title}</DialogTitle>
              <DialogDescription className="text-base text-muted-foreground">
                {project.description}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-6">
                <h4 className="font-semibold mb-3">Project Details</h4>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                    {project.details.map(detail => (
                        <div key={detail.label}>
                            <p className="font-medium text-foreground">{detail.label}</p>
                            <p className="text-muted-foreground">{detail.value}</p>
                        </div>
                    ))}
                </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center bg-muted/50 p-8">
            <Carousel 
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        data-ai-hint={image.hint}
                        fill
                        className="object-cover"
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
      </DialogContent>
    </Dialog>
  );
}
