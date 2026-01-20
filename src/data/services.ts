import { 
  Building2, PaintBucket, FileText, Anchor, 
  CheckCircle2, DraftingCompass, Wrench, Zap, 
  Grid, Palette 
} from 'lucide-react';

export interface ServiceDetail {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string; // We'll map this to the component
  whoItIsFor: string;
  scope: string[];
  benefits: string[];
  process: {
    step: string;
    title: string;
    desc: string;
  }[];
  featuredProjectIds: number[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: 'design-and-build',
    title: 'Design & Build',
    whoItIsFor: 'For Private & Government Developers',
    shortDesc: 'A complete turnkey solution where we take responsibility for both the design and construction phases.',
    fullDesc: 'Our Design & Build service provides a seamless, integrated approach to construction. By combining architectural design, engineering, and construction under one roof, we eliminate the traditional friction between designers and contractors. This ensures that the design is not only visionary but also technologically and financially feasible from day one.',
    iconName: 'Building2',
    scope: [
      'Architectural Planning & Programming',
      'Structural & Civil Engineering',
      'MEP (Mechanical, Electrical, Plumbing) Design',
      'Pre-construction Costing & Procurement',
      'On-site Construction Management'
    ],
    benefits: [
      'Single Point of Accountability',
      'Faster Project Delivery (Overlapping Phases)',
      'Guaranteed Maximum Price Early On',
      'Reduced Administrative Burden for Clients'
    ],
    process: [
      { step: '01', title: 'Concept Alignment', desc: 'Defining project goals, budget, and aesthetic vision.' },
      { step: '02', title: 'Preliminary Design', desc: 'Developing initial architectural drafts and structural concepts.' },
      { step: '03', title: 'Detailed Engineering', desc: 'Finalizing technical drawings and obtaining permits.' },
      { step: '04', title: 'Construction Phase', desc: 'Mobilizing resources and executing the physical build.' }
    ],
    featuredProjectIds: [1, 2]
  },
  {
    slug: 'building-renovation',
    title: 'Building Renovation',
    whoItIsFor: 'For Commercial & Residential Upgrades',
    shortDesc: 'Revitalizing existing structures to meet modern standards while preserving integrity.',
    fullDesc: 'KIM MEX specializes in breathing new life into older structures. Whether it is a historical restoration that requires delicate craftsmanship or a modern office fit-out requiring high-tech integration, we manage the complexities of working within existing footprints. We focus on enhancing property value, energy efficiency, and modern aesthetics.',
    iconName: 'PaintBucket',
    scope: [
      'Interior Fit-outs & Remodeling',
      'Facade Restoration & Modernization',
      'Structural Strengthening & Upgrades',
      'Mechanical System Retrofitting',
      'Acoustic & Lighting Improvements'
    ],
    benefits: [
      'Increase Property Market Value',
      'Improved Energy Efficiency',
      'Minimal Disruption to Current Occupants',
      'Modern Amenities in Established Locations'
    ],
    process: [
      { step: '01', title: 'Structural Audit', desc: 'Evaluating the health of the existing building bones.' },
      { step: '02', title: 'Adaptive Design', desc: 'Creating plans that respect old constraints while adding new value.' },
      { step: '03', title: 'System Integration', desc: 'Upgrading MEP systems to modern standards.' },
      { step: '04', title: 'Finishing', desc: 'Applying high-quality textures and materials for the new look.' }
    ],
    featuredProjectIds: [10, 15]
  },
  {
    slug: 'project-management',
    title: 'Project Management',
    whoItIsFor: 'For Large Scale Infrastructure Projects',
    shortDesc: 'Acting as the client’s representative to oversee the entire construction lifecycle.',
    fullDesc: 'We provide professional oversight for complex projects where the client needs an expert eye on every detail. Our project managers ensure that all vendors, subcontractors, and consultants are moving in unison toward the project goals. We take the stress out of construction by managing risks, budgets, and timelines with rigorous transparency.',
    iconName: 'FileText',
    scope: [
      'Project Planning & Scheduling',
      'Cost Estimating & Budget Control',
      'Quality Assurance & Quality Control (QA/QC)',
      'Contract Administration & Procurement',
      'Risk Management & Safety Oversight'
    ],
    benefits: [
      'Substantial Cost Savings through Efficiency',
      'Strict Compliance with Regulations',
      'Transparent Reporting and Communication',
      'Mitigation of Delays and Disputes'
    ],
    process: [
      { step: '01', title: 'Project Initiation', desc: 'Setting up the management framework and KPIs.' },
      { step: '02', title: 'Planning & Design Management', desc: 'Coordination between various technical consultants.' },
      { step: '03', title: 'Execution Monitoring', desc: 'On-site inspections and progress tracking.' },
      { step: '04', title: 'Closing & Commissioning', desc: 'Final testing, documentation, and handover.' }
    ],
    featuredProjectIds: [8, 22]
  },
  {
    slug: 'technical-consultancy',
    title: 'Technical Consultancy',
    whoItIsFor: 'For Feasibility & Technical Planning',
    shortDesc: 'Providing expert advice and feasibility studies for complex engineering challenges.',
    fullDesc: 'Our consultancy arm leverage decades of experience in the Cambodian construction landscape to provide actionable insights. We help developers understand the technical and economic viability of their projects before breaking ground. From soil analysis to safety audits, we provide the technical foundation for success.',
    iconName: 'Anchor',
    scope: [
      'Technical Feasibility Studies',
      'Site Selection & Soil Analysis',
      'Structural Health Monitoring',
      'Building Safety & Fire Audits',
      'Regulatory Compliance Advisory'
    ],
    benefits: [
      'Data-Driven Decision Making',
      'Early Identification of Potential Hazards',
      'Optimization of Construction Budgets',
      'Pathways to Local Authority Approvals'
    ],
    process: [
      { step: '01', title: 'Situation Analysis', desc: 'Understanding the client challenge or potential site.' },
      { step: '02', title: 'Data Collection', desc: 'Conducting site visits, surveys, and technical tests.' },
      { step: '03', title: 'Analysis & Formulation', desc: 'Evaluating data against standards and goals.' },
      { step: '04', title: 'Report & Recommendations', desc: 'Providing clear, actionable advisory documents.' }
    ],
    featuredProjectIds: [1, 21]
  }
];
