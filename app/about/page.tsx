'use client';

import React, { useState } from 'react';
import PageHero from '@/components/ui/PageHero';
import { Target, Eye, Award, CheckCircle2, ShieldCheck, Quote, X } from 'lucide-react';
import styles from './page.module.css';

// Team data from user
const teamData: Record<string, {
  name: string;
  role: string;
  image: string;
  description?: string;
  email?: string;
}> = {
  ceo: {
    name: 'Okhna. TOUCH KIM',
    role: 'CHIEF EXECUTIVE OFFICER',
    image: '/assets/images/Picture/touch_kim.png',
    description: 'The visionary leader of KIM MEX Construction, driving the company towards excellence and innovation in the construction industry.',
    email: 'ceo@kimmex.com.kh'
  },
  deputy_gm: {
    name: 'MR. PAUCH BUNPHEAKDEY',
    role: 'DEPUTY GENERAL MANAGER',
    image: '/assets/images/Picture/pauch_bunpheakdey.jpeg',
    email: 'deputy.gm@kimmex.com.kh'
  },
  finance: {
    name: 'MR. LENG VANNARITH',
    role: 'FINANCE DIRECTOR',
    image: '/assets/images/Picture/leng_vannarith.jpeg',
    email: 'finance@kimmex.com.kh'
  },
  senior_pm: {
    name: 'MR. OUNG CHAKNORA',
    role: 'SENIOR PROJECT MANAGER',
    image: '/assets/images/Picture/oung_chaknora.jpeg',
    email: 'senior.pm@kimmex.com.kh'
  },
  pm: {
    name: 'MR. SUM ROTANA',
    role: 'PROJECT MANAGER',
    image: '/assets/images/Picture/sum_rotana.jpeg',
    email: 'pm.rotana@kimmex.com.kh'
  },
  mep_pm: {
    name: 'MR. KRAI KEAK',
    role: 'MEP OPERATION PROJECT MANAGER',
    image: '/assets/images/Picture/krai_keak.jpeg',
    email: 'mep.Keak@kimmex.com.kh'
  },
  deputy_arch: {
    name: 'MR. CHHUNDY RYTA',
    role: 'DEPUTY ARCHITECT MANAGER',
    image: '/assets/images/Picture/chhundy_ryta.jpeg',
    email: 'arch.ryta@kimmex.com.kh'
  },
  mep_design: {
    name: 'MR. TOUCH PUTHEANY',
    role: 'MEP DESIGN MANAGER',
    image: '/assets/images/Picture/touch_putheany.jpeg',
    email: 'mep.design@kimmex.com.kh'
  },
  deputy_qs: {
    name: 'MR. RY KEN',
    role: 'DEPUTY QS MANAGER',
    image: '/assets/images/Picture/ry_ken.jpeg',
    email: 'qs.ken@kimmex.com.kh'
  },
  warehouse: {
    name: 'MR. HONG BUNNA',
    role: 'WAREHOUSE MANAGER',
    image: '/assets/images/Picture/hong_bunna.jpeg',
    email: 'warehouse@kimmex.com.kh'
  }
};

/* ... milestones array remains ... */
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
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  
  const openMemberModal = (key: string) => {
    setSelectedMember(key);
  };
  
  const closeMemberModal = () => {
    setSelectedMember(null);
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
                KIM MEX Construction began with a simple vision: to provide high-quality engineering and construction services that meet international standards. Over two decades later, we have grown into one of Cambodia&apos;s most trusted firms, delivering complex infrastructure, commercial, and residential projects.
              </p>
              <p className={styles.introText}>
                From humble beginnings, we have expanded our capabilities to include large-scale government infrastructure, premium high-rise developments, and industrial facilities. Our journey is defined by resilient growth and a relentless pursuit of excellence.
              </p>
            </div>
            <div>
              <img 
                src="/images/Thumbnail.jpg" 
                alt="About Kim Mex" 
                style={{ width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
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
               <img src="/assets/images/Picture/touch_kim.png" alt="CEO" style={{objectFit: 'cover', objectPosition: 'top'}} />
            </div>
            <div className={styles.ceoContent}>
               <Quote size={40} className="text-[#ED1C24] mb-4" />
               <h2 className="mb-6 text-[#2E3192]">Message From CEO</h2>
               <p className={styles.ceoQuote}>
                 "At KIM MEX, we believe that construction is not just about concrete and steel, but about building current and future dreams. Our commitment to integrity and quality has been the cornerstone of our success for over 20 years. We look forward to continuing to build the foundations of Cambodia&apos;s growth."
               </p>
               <div>
                 <h4 className="text-xl font-bold text-[#2E3192]">Okhna. TOUCH KIM</h4>
                 <span className="text-[#ED1C24] font-semibold uppercase tracking-wider text-sm">CHIEF EXECUTIVE OFFICER</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Milestones */}
      <section className={styles.milestonesSection}>
        <div className="container">
          <div className="text-center">
            <span className="section-subtitle">Process & History</span>
            <h2 className="section-title">INFOGRAPHIC</h2>
          </div>
          
          <div className={styles.timelineContainer}>
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
                <div className={`${styles.orgNode} ${styles.orgTopNode}`} onClick={() => openMemberModal('ceo')}>
                   <div className={styles.orgImageWrapper}>
                     <img src="/assets/images/Picture/touch_kim.png" alt="CEO" />
                   </div>
                   <div className={styles.orgNodeTitle}>Okhna. TOUCH KIM</div>
                   <div className={styles.orgNodeRole}>CHIEF EXECUTIVE OFFICER</div>
                </div>
             </div>
             
             {/* Vertical Line from CEO */}
             <div className={styles.verticalLine}></div>
             
             {/* Second Level - 5 Managers */}
             <div className={styles.orgLevel}>
                <div className={styles.horizontalLineContainer}>
                   <div className={styles.horizontalLine} style={{width: '80%'}}></div>
                </div>
                <div className={styles.orgRow}>
                   {['deputy_gm', 'finance', 'senior_pm', 'pm', 'mep_pm'].map((key) => (
                     <div key={key} className={styles.orgNode} onClick={() => openMemberModal(key)}>
                        <div className={styles.verticalConnector}></div>
                        <div className={styles.orgImageWrapper}>
                          <img src={teamData[key].image} alt={teamData[key].name} />
                        </div>
                        <div className={styles.orgNodeTitle}>{teamData[key].name}</div>
                        <div className={styles.orgNodeRole}>{teamData[key].role}</div>
                     </div>
                   ))}
                </div>
             </div>
             
             {/* Third Level - 4 Managers */}
             <div className={styles.orgLevel}>
                <div className={styles.horizontalLineContainer}>
                   <div className={styles.horizontalLine} style={{width: '60%'}}></div>
                </div>
                <div className={styles.orgRow}>
                   {['deputy_arch', 'mep_design', 'deputy_qs', 'warehouse'].map((key) => (
                     <div key={key} className={styles.orgNode} onClick={() => openMemberModal(key)}>
                        <div className={styles.verticalConnector}></div>
                        <div className={styles.orgImageWrapper}>
                          <img src={teamData[key].image} alt={teamData[key].name} />
                        </div>
                        <div className={styles.orgNodeTitle}>{teamData[key].name}</div>
                        <div className={styles.orgNodeRole}>{teamData[key].role}</div>
                     </div>
                   ))}
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
      {/* Member Detail Modal */}
      {selectedMember && teamData[selectedMember] && (
        <div className={styles.modalOverlay} onClick={closeMemberModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeModal} onClick={closeMemberModal}>
              <X size={24} />
            </button>
            <div className="flex flex-col items-center mb-6">
               <div style={{width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', marginBottom: '15px'}}>
                  <img src={teamData[selectedMember].image} alt={teamData[selectedMember].name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
               </div>
               <h3 className={styles.modalTitle} style={{textAlign: 'center', fontSize: '1.5rem', marginBottom: '5px'}}>{teamData[selectedMember].name}</h3>
               <p className="text-[#ED1C24] font-bold text-sm tracking-wider">{teamData[selectedMember].role}</p>
            </div>
            
            {teamData[selectedMember].description && (
               <p className={styles.modalDesc} style={{textAlign: 'center'}}>{teamData[selectedMember].description}</p>
            )}
            
            <div className={styles.modalFooter} style={{textAlign: 'center', borderTop: 'none', paddingTop: 0}}>
              {teamData[selectedMember].email && (
                <div className="mt-2">
                  <strong>Email:</strong> <a href={`mailto:${teamData[selectedMember].email}`} className="text-[#ED1C24] hover:underline">{teamData[selectedMember].email}</a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
