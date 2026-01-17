"use client";

import { useState, useMemo } from "react";
import JobCard from "./job-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Job = {
    title: string;
    location: string;
    qualification: string;
    experience: string;
    summary: string;
    responsibilities: string[];
};

const experienceLevels = {
    "all": "All Experience Levels",
    "entry": "Entry Level (1-3 years)",
    "mid": "Mid Level (3-7 years)",
    "senior": "Senior Level (7+ years)",
};

const getExperienceCategory = (expString: string): 'entry' | 'mid' | 'senior' | 'other' => {
    if (expString.toLowerCase().includes("as applicable")) {
        return "entry";
    }
    const match = expString.match(/\d+/);
    if (!match) return "other";

    const minExp = parseInt(match[0], 10);

    if (minExp >= 7) return "senior";
    if (minExp >= 3) return "mid";
    if (minExp >= 1) return "entry";
    
    return "other";
};

export default function JobList({ jobs }: { jobs: Job[] }) {
    const [experienceFilter, setExperienceFilter] = useState("all");

    const filteredJobs = useMemo(() => {
        if (experienceFilter === "all") {
            return jobs;
        }
        return jobs.filter(job => getExperienceCategory(job.experience) === experienceFilter);
    }, [jobs, experienceFilter]);

    return (
        <div>
            <div className="mb-8 flex justify-end">
                <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                    <SelectTrigger className="w-full md:w-[280px]">
                        <SelectValue placeholder="Filter by experience" />
                    </SelectTrigger>
                    <SelectContent>
                        {Object.entries(experienceLevels).map(([key, value]) => (
                            <SelectItem key={key} value={key}>
                                {value}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job, index) => (
                        <JobCard key={index} job={job} />
                    ))
                ) : (
                    <div className="md:col-span-2 lg:col-span-3 text-center text-muted-foreground py-8">
                        <p>No open roles match the selected filter.</p>
                    </div>
                )}
            </section>
        </div>
    );
}
