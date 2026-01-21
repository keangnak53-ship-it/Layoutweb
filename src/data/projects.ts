
export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  status: string;
  summary: string;
  image: string;
  // Detail page fields
  client?: string;
  sector?: string;
  builtArea?: string;
  contractValue?: string;
  year?: string;
  description?: {
    background: string;
    objectives: string;
    designConcept: string;
  };
  scopeServices?: string[];
  challengesSolutions?: {
    challenge: string;
    solution: string;
  }[];
  gallery?: string[];
}

export const projects: Project[] = [
  // Government Office Buildings
  {
    id: 1,
    title: "Ministry of Interior (MOI)",
    category: "Government Office Building",
    location: "Phnom Penh",
    status: "Completed",
    summary: "Complete construction of the main administrative building for the Ministry of Interior.",
    image: "/images/Thumbnail-1.jpg",
    client: "Ministry of Interior",
    sector: "Government",
    builtArea: "25,000 sqm",
    contractValue: "$45M",
    year: "2023",
    description: {
      background: "The Ministry of Interior required a modern and functional headquarters to centralize its administrative operations in Phnom Penh.",
      objectives: "To create a landmark building that reflects the strength and stability of the ministry while providing high-efficiency workspaces.",
      designConcept: "A blend of traditional Khmer architectural elements with modern corporate design, featuring a large central atrium and energy-efficient facade."
    },
    scopeServices: ["Architectural Design", "Structural Engineering", "MEP Installation", "Interior Fit-out"],
    challengesSolutions: [
      {
        challenge: "Maintaining strict government security protocols during construction.",
        solution: "Implemented a multi-layered security and access control system for all site personnel."
      }
    ],
    gallery: [
      "/images/Thumbnail-1.jpg",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    title: "Ministry of Economy & Finance (MEF)",
    category: "Government Office Building",
    location: "Phnom Penh",
    status: "Completed",
    summary: "Large-scale office complex development with modern architectural features.",
    image: "/images/Thumbnail-2.jpg",
    client: "Ministry of Economy & Finance",
    sector: "Government",
    builtArea: "30,000 sqm",
    year: "2022",
    description: {
      background: "The MEF expansion project was initiated to accommodate the growing needs of the national financial administration.",
      objectives: "To deliver a contemporary office environment with advanced digital infrastructure.",
      designConcept: "Minimalist glass and steel construction emphasizing transparency and modernization."
    },
    scopeServices: ["Design & Build", "Project Management", "HVAC Systems"],
    challengesSolutions: [
      {
        challenge: "Complex structural requirements for a deep basement in a high-density urban area.",
        solution: "Utilized advanced diaphragm wall techniques to ensure site stability and minimize impact on surrounding buildings."
      }
    ]
  },
  {
    id: 3,
    title: "Electricite du Cambodge (EDC)",
    category: "Government Office Building",
    location: "Phnom Penh",
    status: "Completed",
    summary: "Technical and administrative headquarters for the national power utility.",
    image: "/images/Thumbnail-3.jpg",
    client: "EDC",
    sector: "Utility / Government",
    year: "2021",
    description: {
      background: "EDC needed an integrated facility for technical operations monitoring and administrative management.",
      objectives: "Seamless integration of high-tech command centers with administrative offices.",
      designConcept: "Industrial-modern aesthetic with exposed structural elements and high-performance glass."
    },
    scopeServices: ["Civil Engineering", "Specialized MEP", "Telecommunications Infrastructure"]
  },
  {
    id: 12,
    title: "National Social Security Fund (NSSF)",
    category: "Government Office Building",
    location: "Phnom Penh",
    status: "Completed",
    summary: "Custom-built facility designed for public service efficiency and high traffic.",
    image: "/images/Thumbnail-4.jpg",
    client: "NSSF",
    sector: "Social Services",
    year: "2022"
  },
  {
    id: 13,
    title: "National Council for Education (NCE)",
    category: "Government Office Building",
    location: "Phnom Penh",
    status: "Completed",
    summary: "Multi-functional building featuring conference halls and research centers.",
    image: "/images/Thumbnail-5.jpg",
    client: "NCE",
    sector: "Education / Government",
    year: "2020"
  },
  {
    id: 14,
    title: "GCDE Building",
    category: "Government Office Building",
    location: "Phnom Penh",
    status: "Completed",
    summary: "State-of-the-art office structure with integrated security and logistics systems.",
    image: "/images/Thumbnail-6.jpg"
  },
  {
    id: 4,
    title: "Anti-Corruption Unit (ACU)",
    category: "Government Office Building",
    location: "Phnom Penh",
    status: "Completed",
    summary: "Modern institutional building with high-security specifications and sustainable design.",
    image: "/images/Thumbnail-7.jpg"
  },
  
  // Public Service Buildings
  {
    id: 15,
    title: "Cambodia-China Friendship Hospital (CCRH)",
    category: "Public Service Building",
    location: "Phnom Penh",
    status: "Completed",
    summary: "Large medical facility featuring specialized units and international standards.",
    image: "/images/Thumbnail-8.jpg",
    client: "Ministry of Health",
    sector: "Healthcare",
    builtArea: "15,000 sqm",
    year: "2023"
  },
  {
    id: 16,
    title: "National Technical Training Institute (NTTI)",
    category: "Public Service Building",
    location: "Phnom Penh",
    status: "Completed",
    summary: "Vocational training campus with workshops and advanced laboratories.",
    image: "/images/Thumbnail-9.jpg"
  },
  {
    id: 5,
    title: "Royal University of Phnom Penh (RUPP)",
    category: "Public Service Building",
    location: "Phnom Penh",
    status: "Completed",
    summary: "Expansion project including new faculty buildings and student centers.",
    image: "/images/Thumbnail.jpg"
  },
  {
    id: 6,
    title: "Institute of Technology (ITC)",
    category: "Public Service Building",
    location: "Phnom Penh",
    status: "Completed",
    summary: "Renovation and construction of specialized engineering laboratories.",
    image: "/images/Thumbnail-1.jpg"
  },
  {
    id: 17,
    title: "NTTI Siem Reap Campus",
    category: "Public Service Building",
    location: "Siem Reap",
    status: "Completed",
    summary: "Regional training facility designed with sustainable local materials.",
    image: "https://images.unsplash.com/photo-1523050335100-26466336e1a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  // Ongoing Projects (Implement)
  {
    id: 101,
    title: "New Ministry Annex B",
    category: "Government Office Building",
    location: "Phnom Penh",
    status: "Ongoing",
    summary: "Large-scale administrative building extension featuring sustainable energy solutions.",
    image: "/images/Thumbnail-6.jpg",
    client: "Ministry of Public Works",
    year: "2024 (Expected)"
  },
  {
    id: 102,
    title: "National Polytechnic Extension",
    category: "Public Service Building",
    location: "Phnom Penh",
    status: "Ongoing",
    summary: "Institutional building expansion with new lecture halls and tech labs.",
    image: "/images/Thumbnail-9.jpg",
    year: "2024"
  },
  {
    id: 103,
    title: "Mekong View Condominium",
    category: "Private Building",
    location: "Chroy Changvar",
    status: "Ongoing",
    summary: "Premium residential development with riverfront views.",
    image: "/images/Thumbnail-8.jpg",
    year: "2025"
  },
  {
    id: 104,
    title: "Provincial Water Supply Upgrade",
    category: "Water Treatment Plant",
    location: "Kampong Cham",
    status: "Ongoing",
    summary: "Strategic water infrastructure expansion to rural districts.",
    image: "/images/Thumbnail-5.jpg",
    year: "2024"
  }
];

