'use client';

import React, { useState } from 'react';
import PageHero from '@/components/ui/PageHero';
import { Target, Eye, Award, CheckCircle2, ShieldCheck, Quote, X } from 'lucide-react';
import styles from './page.module.css';

// Department data
const departmentData: Record<string, {
  name: string;
  description: string;
  responsibilities: string[];
  teamSize: string;
  contact: string;
}> = {
  ceo: {
    name: 'CEO & Management Team',
    description: 'The executive leadership team responsible for strategic direction, overall company performance, and major business decisions.',
    responsibilities: [
      'Strategic planning and business development',
      'Financial oversight and investor relations',
      'Corporate governance and compliance',
      'Major project approvals and partnerships'
    ],
    teamSize: '5 Executive Members',
    contact: 'ceo@kimmex.com.kh'
  },
  finance: {
    name: 'Finance Department',
    description: 'Manages all financial operations, budgeting, accounting, and financial reporting for the company.',
    responsibilities: [
      'Financial planning and analysis',
      'Budget management and cost control',
      'Accounting and bookkeeping',
      'Tax compliance and auditing'
    ],
    teamSize: '12 Team Members',
    contact: 'finance@kimmex.com.kh'
  },
  hr: {
    name: 'HR & Admin',
    description: 'Handles human resources, recruitment, employee relations, and administrative operations.',
    responsibilities: [
      'Recruitment and talent acquisition',
      'Employee training and development',
      'Payroll and benefits administration',
      'Office management and facilities'
    ],
    teamSize: '8 Team Members',
    contact: 'hr@kimmex.com.kh'
  },
  purchase: {
    name: 'Purchase Department',
    description: 'Responsible for procurement of materials, equipment, and services required for projects.',
    responsibilities: [
      'Vendor selection and management',
      'Purchase order processing',
      'Price negotiation and contracts',
      'Supplier quality assurance'
    ],
    teamSize: '10 Team Members',
    contact: 'purchase@kimmex.com.kh'
  },
  qs: {
    name: 'QS & Cost Control',
    description: 'Quantity surveying and cost management to ensure projects stay within budget.',
    responsibilities: [
      'Cost estimation and budgeting',
      'Bill of quantities preparation',
      'Contract administration',
      'Cost monitoring and reporting'
    ],
    teamSize: '15 Team Members',
    contact: 'qs@kimmex.com.kh'
  },
  warehouse: {
    name: 'Warehouse & Logistics',
    description: 'Manages inventory, storage, and distribution of materials and equipment.',
    responsibilities: [
      'Inventory management',
      'Material receiving and dispatch',
      'Logistics coordination',
      'Equipment maintenance'
    ],
    teamSize: '20 Team Members',
    contact: 'warehouse@kimmex.com.kh'
  },
  stock: {
    name: 'Stock Control',
    description: 'Monitors and controls stock levels to ensure optimal inventory management.',
    responsibilities: [
      'Stock level monitoring',
      'Inventory auditing',
      'Reorder point management',
      'Stock reporting and analysis'
    ],
    teamSize: '8 Team Members',
    contact: 'stock@kimmex.com.kh'
  },
  design: {
    name: 'Detailed Design',
    description: 'Creates detailed architectural and engineering designs for construction projects.',
    responsibilities: [
      'Architectural design and drafting',
      'Structural engineering',
      '3D modeling and visualization',
      'Design documentation'
    ],
    teamSize: '18 Team Members',
    contact: 'design@kimmex.com.kh'
  },
  site: {
    name: 'Site Operation',
    description: 'Manages on-site construction activities, safety, and project execution.',
    responsibilities: [
      'Site supervision and management',
      'Safety compliance and monitoring',
      'Quality control inspections',
      'Progress reporting'
    ],
    teamSize: '50+ Team Members',
    contact: 'site@kimmex.com.kh'
  }
};

const milestones = [
  {
    year: '2000',
    title: 'Foundation',
    desc: 'KIM MEX established in Phnom Penh with a small team of engineers.',
    position: 'top'
  },
  {
    year: '2010',
    title: 'Expansion',
    desc: 'Awarded first major government infrastructure project.',
    position: 'bottom'
  },
  {
    year: '2018',
    title: 'ISO Certified',
    desc: 'Achieved ISO 9001 certification for quality management.',
    position: 'top'
  },
  {
    year: '2025',
    title: 'National Leader',
    desc: 'Recognized as a top-tier construction firm with 150+ projects.',
    position: 'bottom'
  }
];

export default function AboutPage() {
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  
  const openDeptModal = (deptKey: string) => {
    setSelectedDept(deptKey);
  };
  
  const closeDeptModal = () => {
    setSelectedDept(null);
  };
  
  return (
    <>
      <PageHero 
        title="About Us" 
        subtitle="Who We Are"
        bgImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      
      {/* 2. Goal / Vision / Mission */}
      <section className={styles.visionSection}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-subtitle">Our Purpose</span>
            <h2 className="section-title">Driving Excellence</h2>
          </div>
          <div className={styles.visionGrid}>
            <div className={styles.visionCard}>
              <div className={styles.visionIcon}><Award size={32} /></div>
              <h3>Our Goal</h3>
              <p>To become the most reliable and trusted construction partner in the region, delivering value beyond expectations.</p>
            </div>
            <div className={styles.visionCard}>
              <div className={styles.visionIcon}><Eye size={32} /></div>
              <h3>Our Vision</h3>
              <p>To lead the construction industry with innovation, sustainable practices, and uncompromised quality standards.</p>
            </div>
            <div className={styles.visionCard}>
              <div className={styles.visionIcon}><Target size={32} /></div>
              <h3>Our Mission</h3>
              <p>To execute projects with precision, safety, and integrity, ensuring the highest level of client satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Company Overview / Story */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <span className="section-subtitle">Our Story</span>
              <h2 className={styles.introTitle}>Building A Better Cambodia Since 2000</h2>
              <p className={styles.introText}>
                KIM MEX Construction began with a simple vision: to provide high-quality engineering and construction services that meet international standards. Over two decades later, we have grown into one of Cambodia's most trusted firms, delivering complex infrastructure, commercial, and residential projects.
              </p>
              <p className={styles.introText}>
                From humble beginnings, we have expanded our capabilities to include large-scale government infrastructure, premium high-rise developments, and industrial facilities. Our journey is defined by resilient growth and a relentless pursuit of excellence.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1531973576160-7125cdcd63e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="About Kim Mex" 
                style={{ borderRadius: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. CEO Message */}
      <section className={styles.ceoSection}>
        <div className="container">
          <div className={styles.ceoGrid}>
            <div className={styles.ceoImageWrapper}>
               <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="CEO" />
            </div>
            <div className={styles.ceoContent}>
               <Quote size={40} className="text-[#ED1C24] mb-4" />
               <h2 className="mb-6 text-[#2E3192]">Message From CEO</h2>
               <p className={styles.ceoQuote}>
                 "At KIM MEX, we believe that construction is not just about concrete and steel, but about building current and future dreams. Our commitment to integrity and quality has been the cornerstone of our success for over 20 years. We look forward to continuing to build the foundations of Cambodia's growth."
               </p>
               <div>
                 <h4 className="text-xl font-bold text-[#2E3192]">Mr. Kim Mex</h4>
                 <span className="text-[#ED1C24] font-semibold uppercase tracking-wider text-sm">CEO & Founder</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Milestones - New Infographic Style */}
      <section className={styles.milestonesSection}>
        <div className="container">
          <div className="text-center">
            <span className="section-subtitle">Process & History</span>
            <h2 className="section-title">INFOGRAPHIC</h2>
          </div>
          
          <div className={styles.timelineContainer}>
            {/* The Central Line */}
            <div className={styles.timelineLine}></div>
            
            <div className={styles.timelineGrid}>
               {milestones.map((item, index) => (
                 <div key={index} className={`${styles.timelineItem} ${item.position === 'top' ? styles.timelineItemTop : styles.timelineItemBottom}`}>
                   <div className={styles.milestoneCard}>
                      <span className={styles.yearText}>{item.year}</span>
                      <h4 className={styles.milestoneTitle}>{item.title}</h4>
                      <p className={styles.milestoneDesc}>{item.desc}</p>
                   </div>
                   <div className={styles.timelineDot}></div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Leadership / Organization Chart */}
      <section className={styles.orgSection}>
        <div className="container">
          <span className="section-subtitle">Our Structure</span>
          <h2 className="section-title">Organization Chart</h2>
          <p className="max-w-xl mx-auto text-gray-500 mb-10">
            A structured hierarchy ensuring practical efficiency across all departments.
          </p>

          <div className={styles.orgChartWrapper}>
             {/* CEO Level */}
             <div className={styles.orgLevel}>
                <div className={`${styles.orgNode} ${styles.orgTopNode}`}>
                   <div className={styles.orgImageWrapper}>
                     <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="CEO" />
                   </div>
                   <div className={styles.orgNodeTitle}>CEO & Management Team</div>
                </div>
             </div>
             
             {/* Vertical Line from CEO */}
             <div className={styles.verticalLine}></div>
             
             {/* Second Level - Main Departments */}
             <div className={styles.orgLevel}>
                <div className={styles.horizontalLineContainer}>
                   <div className={styles.horizontalLine}></div>
                </div>
                <div className={styles.orgRow}>
                   <div className={styles.orgNode}>
                      <div className={styles.verticalConnector}></div>
                      <div className={styles.orgImageWrapper}>
                        <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Finance" />
                      </div>
                      <div className={styles.orgNodeTitle}>Finance Dept</div>
                   </div>
                   <div className={styles.orgNode}>
                      <div className={styles.verticalConnector}></div>
                      <div className={styles.orgImageWrapper}>
                        <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="HR" />
                      </div>
                      <div className={styles.orgNodeTitle}>HR & Admin</div>
                   </div>
                   <div className={styles.orgNode}>
                      <div className={styles.verticalConnector}></div>
                      <div className={styles.orgImageWrapper}>
                        <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Purchase" />
                      </div>
                      <div className={styles.orgNodeTitle}>Purchase Dept</div>
                   </div>
                </div>
             </div>
             
             {/* Third Level - Operational Departments */}
             <div className={styles.orgLevel}>
                <div className={styles.horizontalLineContainer}>
                   <div className={styles.horizontalLine}></div>
                </div>
                <div className={styles.orgRow}>
                   <div className={styles.orgNode}>
                      <div className={styles.verticalConnector}></div>
                      <div className={styles.orgImageWrapper}>
                        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="QS" />
                      </div>
                      <div className={styles.orgNodeTitle}>QS & Cost Control</div>
                   </div>
                   <div className={styles.orgNode}>
                      <div className={styles.verticalConnector}></div>
                      <div className={styles.orgImageWrapper}>
                        <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Warehouse" />
                      </div>
                      <div className={styles.orgNodeTitle}>Warehouse & Logistics</div>
                   </div>
                   <div className={styles.orgNode}>
                      <div className={styles.verticalConnector}></div>
                      <div className={styles.orgImageWrapper}>
                        <img src="https://images.unsplash.com/photo-1586528116493-a029325540fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Stock" />
                      </div>
                      <div className={styles.orgNodeTitle}>Stock Control</div>
                   </div>
                </div>
             </div>
             
             {/* Fourth Level - Technical Departments */}
             <div className={styles.orgLevel}>
                <div className={styles.horizontalLineContainer}>
                   <div className={styles.horizontalLine}></div>
                </div>
                <div className={styles.orgRow}>
                   <div className={styles.orgNode}>
                      <div className={styles.verticalConnector}></div>
                      <div className={styles.orgImageWrapper}>
                        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Design" />
                      </div>
                      <div className={styles.orgNodeTitle}>Detailed Design</div>
                   </div>
                   <div className={styles.orgNode}>
                      <div className={styles.verticalConnector}></div>
                      <div className={styles.orgImageWrapper}>
                        <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Site" />
                      </div>
                      <div className={styles.orgNodeTitle}>Site Operation</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. Quality & Safety */}
      <section className={styles.qualitySection}>
        <div className="container">
          <div className={styles.qualityGrid}>
             <div>
               <span className="section-subtitle">Our Standards</span>
               <h2 className={styles.introTitle}>Quality & Safety Commitment</h2>
               <p className={styles.introText}>
                 We adhere to the highest international standards of safety and quality control. 
                 Every project undergoes rigorous inspection to ensure durability and compliance.
               </p>
               
               <ul className={styles.qualityList}>
                 <li>
                   <ShieldCheck size={24} className={styles.checkIcon} />
                   <div>
                     <h4 className="font-bold text-[#2E3192]">ISO 9001 Certified</h4>
                     <p className="text-sm text-gray-500">Global standard for quality management systems.</p>
                   </div>
                 </li>
                 <li>
                   <CheckCircle2 size={24} className={styles.checkIcon} />
                   <div>
                     <h4 className="font-bold text-[#2E3192]">Zero Accident Policy</h4>
                     <p className="text-sm text-gray-500">Strict safety protocols on every construction site.</p>
                   </div>
                 </li>
               </ul>
             </div>
             
             <div>
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Safety Hat" 
                  style={{borderRadius: '8px', width: '100%'}} 
                />
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
