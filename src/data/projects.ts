
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
    image: "https://images.unsplash.com/photo-1554906499-232120015509?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      "https://images.unsplash.com/photo-1554906499-232120015509?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Anti-Corruption Unit (ACU)",
    category: "Government Office Building",
    location: "Phnom Penh",
    status: "Completed",
    summary: "Modern institutional building with high-security specifications and sustainable design.",
    image: "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },

  // Public Service Buildings
  {
    id: 15,
    title: "Cambodia-China Friendship Hospital (CCRH)",
    category: "Public Service Building",
    location: "Phnom Penh",
    status: "Completed",
    summary: "Large medical facility featuring specialized units and international standards.",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Royal University of Phnom Penh (RUPP)",
    category: "Public Service Building",
    location: "Phnom Penh",
    status: "Completed",
    summary: "Expansion project including new faculty buildings and student centers.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Institute of Technology (ITC)",
    category: "Public Service Building",
    location: "Phnom Penh",
    status: "Completed",
    summary: "Renovation and construction of specialized engineering laboratories.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
  {
    id: 7,
    title: "National Stadium",
    category: "Public Service Building",
    location: "Phnom Penh",
    status: "Completed",
    summary: "Major infrastructural work on sports facilities and athlete accommodations.",
    image: "https://images.unsplash.com/photo-1560634628-98e3b3c3b018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },

  // Private Buildings
  {
    id: 10,
    title: "Royal Boutique Hotel",
    category: "Private Building",
    location: "Sihanoukville",
    status: "Completed",
    summary: "Luxury hospitality development with high-end finishes and amenities.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 18,
    title: "Luxury Residential Tower",
    category: "Private Building",
    location: "Phnom Penh",
    status: "Completed",
    summary: "High-rise residential building featuring modern urban design.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },

  // Water Treatment Plants
  {
    id: 8,
    title: "KT Water Treatment Plant",
    category: "Water Treatment Plant",
    location: "Kandal",
    status: "Completed",
    summary: "Full-scale water treatment facility with advanced purification systems.",
    image: "https://images.unsplash.com/photo-1581093196277-9f608beda3d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 19,
    title: "PV Water Treatment Facility",
    category: "Water Treatment Plant",
    location: "Prey Veng",
    status: "Completed",
    summary: "Infrastructure project providing clean water to over 50,000 residents.",
    image: "https://images.unsplash.com/photo-1581244019412-42e0971d158e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 20,
    title: "Stung Treng WTP",
    category: "Water Treatment Plant",
    location: "Stung Treng",
    status: "Completed",
    summary: "Regional water supply plant serving multiple provinces.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Neak Loeung WTP",
    category: "Water Treatment Plant",
    location: "Prey Veng",
    status: "Completed",
    summary: "Strategic water treatment project on the Mekong River.",
    image: "https://images.unsplash.com/photo-1581242163695-19d0acacd468?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 21,
    title: "ADB-Pine Line Project",
    category: "Water Treatment Plant",
    location: "Rural Cambodia",
    status: "Completed",
    summary: "Extensive piping and distribution network project funded by ADB.",
    image: "https://images.unsplash.com/photo-1541976544383-30b2e60a3278?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },

  // Slop Construction
  {
    id: 22,
    title: "Total Phase 1 Reinforcement",
    category: "Slope Construction",
    location: "Coastal Region",
    status: "Completed",
    summary: "Engineering work for riverbank stabilization and slop protection.",
    image: "https://images.unsplash.com/photo-1590059533350-f8ca212354e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    title: "BVM Slop Construction",
    category: "Slope Construction",
    location: "Mekong River",
    status: "Completed",
    summary: "Large-scale slope protection using advanced geosynthetic materials.",
    image: "https://images.unsplash.com/photo-1590059533350-f8ca212354e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  // Ongoing Projects (Implement)
  {
    id: 101,
    title: "New Ministry Annex B",
    category: "Government Office Building",
    location: "Phnom Penh",
    status: "Ongoing",
    summary: "Large-scale administrative building extension featuring sustainable energy solutions.",
    image: "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "2024"
  },
  {
    id: 103,
    title: "Mekong View Condominium",
    category: "Private Building",
    location: "Chroy Changvar",
    status: "Ongoing",
    summary: "Premium residential development with riverfront views.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "2025"
  },
  {
    id: 104,
    title: "Provincial Water Supply Upgrade",
    category: "Water Treatment Plant",
    location: "Kampong Cham",
    status: "Ongoing",
    summary: "Strategic water infrastructure expansion to rural districts.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "2024"
  }
];
