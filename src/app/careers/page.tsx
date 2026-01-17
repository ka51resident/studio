
import JobList from "./_components/job-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Akash Enterprises",
  description: "Explore career opportunities at Akash Enterprises. Join our team and help us power the future with innovative and sustainable electrical solutions.",
};


const jobOpenings = [
    {
        title: "PROJECT MANAGER – ELECTRICAL",
        location: "Mysore / Bangalore",
        qualification: "Diploma or BE in Electrical Engineering",
        experience: "7 to 15 years",
        summary: "Responsible for planning, executing, and completing electrical projects safely, on time, and as per contract requirements.",
        responsibilities: [
            "Plan and manage project activities from start to completion",
            "Coordinate with clients, consultants, and internal teams",
            "Monitor site progress, quality, and safety compliance",
            "Guide supervisors and site teams",
            "Review drawings, resolve site issues, and support billing and reporting",
            "Ensure timely completion and client satisfaction",
        ],
    },
    {
        title: "ELECTRICAL PROJECT SUPERVISOR",
        location: "Mysore / Bangalore",
        qualification: "Diploma or BE in Electrical Engineering",
        experience: "3 to 5 years",
        summary: "Handles daily site execution and supervises electrical works.",
        responsibilities: [
            "Supervise electricians and technicians at site",
            "Ensure work is done as per drawings and instructions",
            "Coordinate materials and manpower",
            "Maintain daily work progress records",
            "Ensure safety practices are followed at site",
            "Report progress and issues to the Project Manager",
        ],
    },
    {
        title: "SAFETY MANAGER",
        location: "Bommasandra and Site Visits",
        qualification: "Diploma in HSE or equivalent",
        experience: "7 to 9 years",
        summary: "Leads safety planning and compliance across all projects.",
        responsibilities: [
            "Develop and monitor safety systems and procedures",
            "Conduct safety audits and inspections",
            "Guide Safety Officers and project teams",
            "Ensure statutory and client safety compliance",
            "Investigate incidents and implement preventive measures",
            "Promote a strong safety culture across the organisation",
        ],
    },
    {
        title: "HSE OFFICER",
        location: "Mysore / Bangalore",
        qualification: "Diploma in HSE or equivalent",
        experience: "1 to 3 years",
        summary: "Ensures safety rules and procedures along with liaising with Client for Safety Instructions where needed at project sites.",
        responsibilities: [
            "Conduct toolbox talks and safety briefings",
            "Implement permit-to-work systems",
            "Monitor safe and unsafe activities",
            "Provide on-job safety training",
            "Conduct regular site safety inspections",
            "Report incidents and support corrective actions",
        ],
    },
    {
        title: "STORES MANAGER",
        location: "Head Office",
        qualification: "Diploma or BE in Electrical Engineering",
        experience: "5 to 8 years",
        summary: "Responsible for managing tools, materials, and store operations across sites.",
        responsibilities: [
            "Manage tools, materials, and consumables",
            "Ensure proper storage, servicing, and maintenance of tools",
            "Verify BOQ quantities against site requirements",
            "Conduct and ensure weekly store visits to all sites",
            "Monitor stock levels and coordinate material movement",
            "Maintain accurate store records and reports",
        ],
    },
    {
        title: "STORE KEEPER",
        location: "Mysore / Site Locations",
        qualification: "Diploma or BE in Electrical Engineering",
        experience: "1 to 3 years",
        summary: "Handles daily store operations at site or yard.",
        responsibilities: [
            "Receive, issue, and record materials",
            "Maintain stock registers and inventory records",
            "Ensure proper handling and storage of materials",
            "Support site teams with timely material availability",
            "Assist in material reconciliation and reporting",
        ],
    },
    {
        title: "ADMIN EXECUTIVE",
        location: "Site / Office",
        qualification: "Graduate",
        experience: "1 to 3 years",
        summary: "Supports administrative and coordination work at site and office.",
        responsibilities: [
            "Manage attendance and basic documentation",
            "Maintain employee and site records",
            "Coordinate accommodation and welfare arrangements",
            "Handle routine correspondence and office support",
            "Assist project teams with administrative tasks",
        ],
    },
    {
        title: "DESIGN ENGINEER",
        location: "Head Office",
        qualification: "Diploma or BE in Electrical Engineering",
        experience: "3 to 6 years",
        summary: "Prepares and supports electrical design and drawings.",
        responsibilities: [
            "Prepare SLDs, layouts, and detailed drawings",
            "Modify drawings based on site feedback",
            "Coordinate with project teams for clarifications",
            "Ensure drawings meet project and technical requirements",
            "Use AutoCAD for all design work",
        ],
    },
    {
        title: "QUALITY ENGINEER",
        location: "Project Sites across Karnataka and Odisha",
        qualification: "Diploma or BE in Electrical Engineering",
        experience: "3 to 6 years",
        summary: "Ensures work quality meets project and client standards.",
        responsibilities: [
            "Inspect ongoing works at site",
            "Ensure work follows approved drawings and specifications",
            "Implement inspection and test plans",
            "Record and close quality observations",
            "Support continuous improvement at site",
        ],
    },
    {
        title: "PRO Manager",
        location: "Head Office with External Coordination",
        qualification: "Graduate | If no formal education, clear and concise communication is adequate",
        experience: "5 to 8 years",
        summary: "Acts as a liaison between the company, clients, and government authorities.",
        responsibilities: [
            "Coordinate with government departments and authorities",
            "Liaise between clients and regulatory bodies",
            "Handle submission, follow-up, and status tracking of files",
            "Ensure timely approvals, clearances, and documentation",
            "Keep management informed on file status and progress",
        ],
    },
    {
        title: "ELECTRICIAN",
        location: "Project Sites",
        qualification: "ITI or equivalent",
        experience: "As applicable",
        summary: "Executes electrical installation and maintenance works at site.",
        responsibilities: [
            "Carry out electrical installations and terminations",
            "Perform testing and maintenance activities",
            "Follow site instructions and safety practices",
            "Use proper tools and PPE during work",
            "Maintain quality and safety standards",
        ],
    },
];


export default function CareersPage() {
  return (
    <div className="container py-12 md:py-24 animate-in fade-in duration-500">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 animate-in fade-in slide-in-from-top-4 duration-700">
          Careers at Akash Enterprises
        </h1>
        <p className="max-w-3xl mx-auto text-muted-foreground text-lg text-center animate-in fade-in slide-in-from-top-6 duration-700">
          Join our team and be a part of a legacy of excellence in the electrical engineering industry. We are looking for passionate, skilled, and dedicated individuals to help us power the future.
        </p>
        <p className="mt-4 font-semibold text-primary">OPEN ROLES AS ON 17 JANUARY 2026</p>
      </section>

      <JobList jobs={jobOpenings} />
    </div>
  );
}
