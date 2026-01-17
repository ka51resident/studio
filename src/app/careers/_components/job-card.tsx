
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, GraduationCap, Calendar } from "lucide-react";
import ApplyModal from "./apply-modal";

type Job = {
    title: string;
    location: string;
    qualification: string;
    experience: string;
    summary: string;
    responsibilities: string[];
};

export default function JobCard({ job }: { job: Job }) {
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
        
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="responsibilities" className="border-none">
                <AccordionTrigger className="text-base font-semibold py-2 hover:no-underline">
                    Responsibilities
                </AccordionTrigger>
                <AccordionContent>
                    <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                        {job.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                        ))}
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter>
        <ApplyModal jobTitle={job.title} />
      </CardFooter>
    </Card>
  );
}
