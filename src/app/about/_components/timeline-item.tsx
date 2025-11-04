
// src/app/about/_components/timeline-item.tsx
"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

type TimelineItemProps = {
  event: TimelineEvent;
  index: number;
};

export default function TimelineItem({ event, index }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 0.5,
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;

  const isOdd = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex items-center transition-all duration-700 ease-out",
        "md:justify-normal",
        isOdd ? "md:flex-row-reverse" : "",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="hidden md:block w-1/2"></div>
      <div className="hidden md:flex items-center justify-center w-12">
        <div className="z-10 flex items-center justify-center w-12 h-12 bg-card rounded-full ring-4 ring-primary shadow-lg">
          {event.icon}
        </div>
      </div>
      <Card className="w-full md:w-1/2 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center gap-4 mb-2">
          <div className="flex md:hidden items-center justify-center w-10 h-10 bg-card rounded-full ring-2 ring-primary shadow-lg shrink-0">
            {event.icon}
          </div>
          <time className="text-lg font-bold text-primary">{event.year}</time>
        </div>
        <CardHeader className="p-0">
          <CardTitle>{event.title}</CardTitle>
        </CardHeader>
        <CardDescription className="pt-2">{event.description}</CardDescription>
      </Card>
    </div>
  );
}

    