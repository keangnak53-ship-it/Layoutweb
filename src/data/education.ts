
export interface EducationSubject {
  id: number;
  title: string;
  category: string;
  summary: string;
  content: string;
  image: string;
  topics?: string[];
}

export const educationData: EducationSubject[] = [
  {
    id: 1,
    title: "Detail Design - Architecture",
    category: "Detail Design",
    summary: "Professional standards and training for architectural detail design, focusing on aesthetic and functional excellence.",
    content: "<p>Our architectural training covers the creation of precise technical drawings that translate conceptual designs into buildable structures. We emphasize local building codes, sustainable materials, and modern workspace ergonomics.</p>",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    topics: ["Spatial Planning", "Façade Systems", "Material Specification", "Rendering Techniques"]
  },
  {
    id: 2,
    title: "Detail Design - Structural",
    category: "Detail Design",
    summary: "Advanced structural engineering standards for safety-critical components and seismic-resilient designs.",
    content: "<p>Structural education at KIM MEX focuses on reinforced concrete and steel structure detailing. We train our engineers on the latest software tools for stress analysis and load distribution to ensure lifelong stability of our structures.</p>",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    topics: ["Reinforcement Detailing", "Foundation Design", "Steel Connection", "Seismic Loads"]
  },
  {
    id: 3,
    title: "Civil Work Execution",
    category: "Civil Work",
    summary: "Foundational techniques and quality management for large-scale civil engineering and infrastructure projects.",
    content: "<p>This module covers the practical execution of civil works, from earthworks and excavations to drainage systems and road surfaces. We highlight ground stabilization and environmental protection during site prep.</p>",
    image: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    topics: ["Earthwork Management", "Concrete Pouring", "Site Logistics", "Drainage Infrastructure"]
  },
  {
    id: 4,
    title: "Finishing & Interior Standards",
    category: "Finishing Work",
    summary: "Detailed training on interior finishes, from tiling and painting to complex ceiling systems.",
    content: "<p>The Finishing Work module focuses on the 'last mile' of construction quality. We teach our artisans the highest standards for leveling, joint sealing, and the application of premium finishes across various surfaces.</p>",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    topics: ["Surface Preparation", "Premium Tiling", "Custom Carpentry", "Lighting Integration"]
  },
  {
    id: 5,
    title: "MEP System Operation & Maintenance",
    category: "MEP Operation",
    summary: "Technical training for Mechanical, Electrical, and Plumbing systems ensuring long-term efficiency.",
    content: "<p>We provide in-depth training on MEP commissioning and daily operations. This includes smart building management systems (BMS), energy monitoring, and preventative maintenance schedules for high-rise buildings.</p>",
    image: "https://images.unsplash.com/photo-1581578731522-63200b84fac3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    topics: ["Electrical Grid Sync", "Plumbing Pressure Tests", "Fire Protection Systems", "Energy Audit"]
  },
  {
    id: 6,
    title: "QS & Cost Management",
    category: "QS",
    summary: "Quantity Surveying standards for precise estimation and budget control throughout the project lifecycle.",
    content: "<p>Our QS training ensures that projects remain financially viable. We cover bill of quantities (BOQ) preparation, progress payment verification, and contract negotiation and administration.</p>",
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    topics: ["BOQ Preparation", "Cost Estimation", "Variation Order Management", "Procurement Strategy"]
  },
  {
    id: 7,
    title: "Finance & Accounting",
    category: "Finance",
    summary: "Corporate finance and accounting standards for the construction industry.",
    content: "<p>This module provides training on corporate financial management, including project-based accounting, taxation compliance, and financial reporting standards specific to Cambodian regulations.</p>",
    image: "https://images.unsplash.com/photo-1554224155-6726b3f898d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    topics: ["Project Budgeting", "Cash Flow Analysis", "Tax Compliance", "Financial Auditing"]
  },
  {
    id: 8,
    title: "Human Resources & Admin",
    category: "HR & Admin",
    summary: "Standard procedures for personnel management, training coordination, and office administration.",
    content: "<p>KIM MEX administrative standards ensure a smooth workflow between site teams and headquarters. We focus on transparent communication and efficient resource planning.</p>",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    topics: ["Talent Management", "Admin Protocols", "Internal Communication", "Staff Welfare"]
  },
  {
    id: 9,
    title: "Warehouse & Stock Management",
    category: "Warehouse & Stock",
    summary: "Inventory control standards to ensure material availability and minimize project waste.",
    content: "<p>Our warehouse education module focuses on Just-In-Time (JIT) material delivery and rigorous inventory auditing. We train our stock managers on digital tracking systems and material preservation techniques.</p>",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    topics: ["Inventory Auditing", "Material Handling", "Digital Tracking", "Waste Mitigation"]
  },
  {
    id: 10,
    title: "Detail Design - ELV & MEP",
    category: "Detail Design",
    summary: "Integration of Extra Low Voltage (ELV) and Mechanical, Electrical, Plumbing (MEP) into architectural plans.",
    content: "<p>This technical standard focuses on the coordination between structural elements and complex utility systems. We ensure that cabling, piping, and ductwork are perfectly integrated without structural interference.</p>",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    topics: ["Cabling Documentation", "BIM Coordination", "Utility Zoning", "Interference Checks"]
  }
];
