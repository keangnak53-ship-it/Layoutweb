
export interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Civil Engineer",
    department: "Engineering",
    location: "Phnom Penh",
    type: "Full Time",
    summary: "Lead complex engineering projects and mentor junior staff to ensure structural integrity and execution excellence.",
    responsibilities: [
      "Oversee structural design and analysis for high-rise developments",
      "Coordinate with architects and MEP consultants",
      "Ensure compliance with local building codes and international standards",
      "Conduct site inspections and quality control audits"
    ],
    requirements: [
      "Master's Degree in Civil engineering or related field",
      "10+ years of experience in structural design or site management",
      "Proficient in AutoCAD, SAP2000, and ETABS",
      "Excellent leadership and communication skills"
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Premium health insurance",
      "Opportunity for project-based relocation",
      "Continuous training and certification sponsorship"
    ]
  },
  {
    id: 2,
    title: "Project Manager",
    department: "Operations",
    location: "Siem Reap",
    type: "Full Time",
    summary: "Manage end-to-end project lifecycles, ensuring timelines, budgets, and quality standards are met.",
    responsibilities: [
      "Develop detailed project plans and schedules",
      "Manage project budgets and resource allocation",
      "Liaise with clients and stakeholders to provide regular updates",
      "Mitigate project risks and resolve site-level conflicts"
    ],
    requirements: [
      "B.S. in Engineering or Project Management",
      "PMP certification is highly desirable",
      "At least 7 years of project management experience",
      "Strong negotiation and organizational skills"
    ],
    benefits: [
      "Project completion bonuses",
      "Mobile phone and travel allowances",
      "Family insurance coverage",
      "Clear career progression path"
    ]
  },
  {
    id: 3,
    title: "Site Supervisor",
    department: "Construction",
    location: "Sihanoukville",
    type: "Contract",
    summary: "Direct daily site operations and ensure workforce adheres to safety and quality protocols.",
    responsibilities: [
      "Direct daily activities of construction crews",
      "Monitor site safety and environmental compliance",
      "Report daily progress and material consumption",
      "Coordinate deliveries and subcontractor work"
    ],
    requirements: [
      "Associate degree or Technical certificate in construction",
      "5+ years of on-site supervisory experience",
      "Strong understanding of construction safety (OSHA standards)",
      "Ability to read and interpret technical drawings"
    ],
    benefits: [
      "Daily site allowance",
      "Safety gear and uniform provided",
      "Performance-based contract extensions",
      "On-site accommodation for remote projects"
    ]
  }
];
