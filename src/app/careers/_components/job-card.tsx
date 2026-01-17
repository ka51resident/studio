
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin, GraduationCap, Calendar, ListChecks, CheckCircle2 } from "lucide-react";
import ApplyModal from "./apply-modal";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type Job = {
    title: string;
    location: string;
    qualification: string;
    experience: string;
    summary: string;
    responsibilities: string[];
};

const RESPONSIBILITIES_TO_SHOW = 3;

export default function JobCard({ job }: { job: Job }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const shownResponsibilities = isExpanded ? job.responsibilities : job.responsibilities.slice(0, RESPONSIBILITIES_TO_SHOW);

  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl">{job.title}</CardTitle>
        <CardDescription>{job.summary}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-primary" />
            <span>{job.qualification}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{job.experience}</span>
          </div>
        </div>
        
        <div>
            <h3 className="text-base font-semibold flex items-center gap-2 mb-2">
                <ListChecks className="h-4 w-4 text-primary" />
                Responsibilities
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              {shownResponsibilities.map((resp, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>
            {job.responsibilities.length > RESPONSIBILITIES_TO_SHOW && (
              <Button variant="link" onClick={toggleExpanded} className="p-0 h-auto text-sm mt-2 text-primary hover:no-underline">
                {isExpanded ? "Show less" : `Show ${job.responsibilities.length - RESPONSIBILITIES_TO_SHOW} more...`}
              </Button>
            )}
        </div>
      </CardContent>
      <CardFooter>
        <ApplyModal jobTitle={job.title} />
      </CardFooter>
    </Card>
  );
}
