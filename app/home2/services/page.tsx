'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, HardHat, FileText, Anchor, 
  CheckCircle2, ArrowRight, LayoutDashboard, 
  PaintBucket, Landmark, 
  GraduationCap, Briefcase, DraftingCompass,
  ArrowUpRight, Zap, Palette, Grid, Wrench
} from 'lucide-react';
import styles from './page.module.css';
import HeroCarousel from '@/components/ui/HeroCarousel';

const serviceSlides = [
  {
    id: 1,
    image: '/images/services-hero.png',
    title: 'Comprehensive',
    subtitle: 'Engineering',
    desc: 'From architectural design to full-scale construction, we deliver excellence across every phase of development.',
    primaryBtn: 'Our Process',
    primaryLink: '#process',
    secondaryBtn: 'Get Support',
    secondaryLink: '/contact'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Consultancy',
    subtitle: '& Management',
    desc: 'Expert technical advice and rigorous project management to ensure your vision becomes a high-quality reality.',
    primaryBtn: 'View Sectors',
    primaryLink: '#sectors',
    secondaryBtn: 'Consult Us',
    secondaryLink: '/contact'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1581093196277-9f608beda3d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Specialized',
    subtitle: 'Technical Works',
    desc: 'MEP installation, structural analysis, and renovation services tailored for Cambodia\'s unique landscape.',
    primaryBtn: 'Explore Work',
    primaryLink: '/done-projects',
    secondaryBtn: 'Contact Team',
    secondaryLink: '/contact'
  }
];

export default function ServicesPage() {
  return (
    <>
      <HeroCarousel slides={serviceSlides} />
      
      {/* 2. Process Section (How We Work / Methodology) */}
      <section className={styles.processCard} id="process">
        <div className="container">
          <div className="text-center">
            <span className="section-subtitle">How We Work</span>
            <h2 className="section-title">Execution Methodology</h2>
            <p className={styles.introText}>
              Our transparent and structured process ensures costs are controlled, 
              timelines are met, and quality is never compromised.
            </p>
          </div>

          <div className={styles.processSteps}>
             <div className={styles.stepItem}>
               <div className={styles.stepIcon}>1</div>
               <h4>Initial consultation</h4>
               <p>Understanding requirements & site assessment.</p>
             </div>
             <div className={styles.stepItem}>
               <div className={styles.stepIcon}>2</div>
               <h4>Concept & design</h4>
               <p>Architectural drafts, 3D modeling & engineering.</p>
             </div>
             <div className={styles.stepItem}>
               <div className={styles.stepIcon}>3</div>
               <h4>Budgeting & planning</h4>
               <p>Detailed cost estimation & project scheduling.</p>
             </div>
             <div className={styles.stepItem}>
               <div className={styles.stepIcon}>4</div>
               <h4>Construction & supervision</h4>
               <p>Execution with strict safety & quality supervision.</p>
             </div>
             <div className={styles.stepItem}>
               <div className={styles.stepIcon}>5</div>
               <h4>Handover & maintenance</h4>
               <p>Final inspection, testing & maintenance support.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Main Services (Detailed) */}
      <section className={styles.section}>
        <div className="container">
          <div className="text-center mb-20">
             <span className="section-subtitle">Core Capabilities</span>
             <h2 className="section-title">Service Categories</h2>
          </div>

          <div className={styles.servicesList}>
            
            {/* Service 1: Design & Build */}
            <div className={styles.serviceRow}>
              <div className={styles.serviceInfo}>
                 <div className={styles.serviceIcon}><Building2 size={32} /></div>
                 <span className={styles.whoItIsFor}>For Private & Government Developers</span>
                 <h3 className={styles.serviceTitle}>Design & Build</h3>
                 <p className={styles.serviceMainDesc}>
                    A complete turnkey solution where we take responsibility for both the design and construction phases. 
                    This streamlined approach minimizes risks for the client and ensures unified accountability.
                 </p>
                 
                 <div className={styles.specsGrid}>
                    <div>
                       <h5 className={styles.specTitle}>Scope of Work</h5>
                       <ul className={styles.specList}>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> Architectural Planning</li>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> Structural Engineering</li>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> Execution Performance</li>
                       </ul>
                    </div>
                    <div>
                       <h5 className={styles.specTitle}>Key Benefits</h5>
                       <ul className={styles.specList}>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> Single Point Contact</li>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> Cost Control</li>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> On-time Delivery</li>
                       </ul>
                    </div>
                 </div>
                 <div className="flex gap-4">
                     <Link href="/services/design-and-build" className="btn btn-primary">Detailed Overview</Link>
                     <Link href="/contact" className="btn btn-outline" style={{borderColor: 'var(--primary-red)', color: 'var(--primary-red)'}}>Request Proposal</Link>
                  </div>
              </div>
              <div className={styles.featuredProjects}>
                 <h4 className={styles.galleryTitle}>Featured Projects</h4>
                 <div className={styles.projectGrid}>
                    <div className={styles.projectThumb}>
                       <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Proj" />
                       <div className={styles.projectOverlay}>
                          <p className={styles.projectName}>Ministry Office complex</p>
                          <Link href="/done-projects" className="text-white mt-2 block"><ArrowUpRight size={20} /></Link>
                       </div>
                    </div>
                    <div className={styles.projectThumb}>
                       <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Proj" />
                       <div className={styles.projectOverlay}>
                          <p className={styles.projectName}>Commercial Tower A</p>
                          <Link href="/done-projects" className="text-white mt-2 block"><ArrowUpRight size={20} /></Link>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Service 2: Building Renovation */}
            <div className={styles.serviceRow}>
              <div className={styles.serviceInfo}>
                 <div className={styles.serviceIcon}><PaintBucket size={32} /></div>
                 <span className={styles.whoItIsFor}>For Commercial & Residential Upgrades</span>
                 <h3 className={styles.serviceTitle}>Building Renovation</h3>
                 <p className={styles.serviceMainDesc}>
                    Revitalizing existing structures to meet modern standards. Whether it&apos;s a historic restoration 
                    or a modern office fit-out, we breathe new life into spaces while preserving integrity.
                 </p>
                 
                 <div className={styles.specsGrid}>
                    <div>
                       <h5 className={styles.specTitle}>Scope of Work</h5>
                       <ul className={styles.specList}>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> Interior Fit-outs</li>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> Facade Improvements</li>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> System Upgrades</li>
                       </ul>
                    </div>
                    <div>
                       <h5 className={styles.specTitle}>Key Benefits</h5>
                       <ul className={styles.specList}>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> Quality Compliance</li>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> Property Value Inc.</li>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> Fast Turnaround</li>
                       </ul>
                    </div>
                 </div>
                 <div className="flex gap-4">
                     <Link href="/services/building-renovation" className="btn btn-primary">Detailed Overview</Link>
                     <Link href="/contact" className="btn btn-outline" style={{borderColor: 'var(--primary-red)', color: 'var(--primary-red)'}}>Start Discussion</Link>
                  </div>
              </div>
              <div className={styles.featuredProjects}>
                 <h4 className={styles.galleryTitle}>Featured Projects</h4>
                 <div className={styles.projectGrid}>
                    <div className={styles.projectThumb}>
                       <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Proj" />
                       <div className={styles.projectOverlay}>
                          <p className={styles.projectName}>BVM Headquarters</p>
                          <Link href="/done-projects" className="text-white mt-2 block"><ArrowUpRight size={20} /></Link>
                       </div>
                    </div>
                    <div className={styles.projectThumb}>
                       <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Proj" />
                       <div className={styles.projectOverlay}>
                          <p className={styles.projectName}>Tech Hub Renovation</p>
                          <Link href="/done-projects" className="text-white mt-2 block"><ArrowUpRight size={20} /></Link>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Service 3: Project Management */}
            <div className={styles.serviceRow}>
              <div className={styles.serviceInfo}>
                 <div className={styles.serviceIcon}><FileText size={32} /></div>
                 <span className={styles.whoItIsFor}>For Large Scale Infrastructure Projects</span>
                 <h3 className={styles.serviceTitle}>Project Management</h3>
                 <p className={styles.serviceMainDesc}>
                    Acting as the client’s representative to oversee the entire construction lifecycle. 
                    We ensure your project is completed on time, within budget, and to the specified quality.
                 </p>
                 
                 <div className={styles.specsGrid}>
                    <div>
                       <h5 className={styles.specTitle}>Scope of Work</h5>
                       <ul className={styles.specList}>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> Budget Control</li>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> Vendor Supervision</li>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> Quality Audits</li>
                       </ul>
                    </div>
                    <div>
                       <h5 className={styles.specTitle}>Key Benefits</h5>
                       <ul className={styles.specList}>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> Risk Mitigation</li>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> Compliance</li>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> On-time delivery</li>
                       </ul>
                    </div>
                 </div>
                 <div className="flex gap-4">
                     <Link href="/services/project-management" className="btn btn-primary">Detailed Overview</Link>
                     <Link href="/contact" className="btn btn-outline" style={{borderColor: 'var(--primary-red)', color: 'var(--primary-red)'}}>Partner With Us</Link>
                  </div>
              </div>
              <div className={styles.featuredProjects}>
                 <h4 className={styles.galleryTitle}>Featured Projects</h4>
                 <div className={styles.projectGrid}>
                    <div className={styles.projectThumb}>
                       <img src="https://images.unsplash.com/photo-1541976544383-30b2e60a3278?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Proj" />
                       <div className={styles.projectOverlay}>
                          <p className={styles.projectName}>Water Treatment Plant</p>
                          <Link href="/done-projects" className="text-white mt-2 block"><ArrowUpRight size={20} /></Link>
                       </div>
                    </div>
                    <div className={styles.projectThumb}>
                       <img src="https://images.unsplash.com/photo-1590674899505-1c5c41951f89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Proj" />
                       <div className={styles.projectOverlay}>
                          <p className={styles.projectName}>Public Highway Project</p>
                          <Link href="/done-projects" className="text-white mt-2 block"><ArrowUpRight size={20} /></Link>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Service 4: Consultants */}
            <div className={styles.serviceRow}>
              <div className={styles.serviceInfo}>
                 <div className={styles.serviceIcon}><Anchor size={32} /></div>
                 <span className={styles.whoItIsFor}>For Feasibility & Technical Planning</span>
                 <h3 className={styles.serviceTitle}>Technical Consultancy</h3>
                 <p className={styles.serviceMainDesc}>
                    Providing expert advice and feasibility studies for complex engineering challenges. 
                    Our consultants help optimize designs and ensure regulatory compliance.
                 </p>
                 
                 <div className={styles.specsGrid}>
                    <div>
                       <h5 className={styles.specTitle}>Scope of Work</h5>
                       <ul className={styles.specList}>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> Technical Feasibility</li>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> Soil Analysis</li>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> Safety Auditing</li>
                       </ul>
                    </div>
                    <div>
                       <h5 className={styles.specTitle}>Key Benefits</h5>
                       <ul className={styles.specList}>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> Optimal Compliance</li>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> Cost Savings</li>
                         <li className={styles.specItem}><CheckCircle2 size={16} className={styles.check} /> Risk Assessment</li>
                       </ul>
                    </div>
                 </div>
                 <div className="flex gap-4">
                     <Link href="/services/technical-consultancy" className="btn btn-primary">Detailed Overview</Link>
                     <Link href="/contact" className="btn btn-outline" style={{borderColor: 'var(--primary-red)', color: 'var(--primary-red)'}}>Ask Our Experts</Link>
                  </div>
              </div>
              <div className={styles.featuredProjects}>
                 <h4 className={styles.galleryTitle}>Featured Projects</h4>
                 <div className={styles.projectGrid}>
                    <div className={styles.projectThumb}>
                       <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Proj" />
                       <div className={styles.projectOverlay}>
                          <p className={styles.projectName}>Skyline Feasibility</p>
                          <Link href="/done-projects" className="text-white mt-2 block"><ArrowUpRight size={20} /></Link>
                       </div>
                    </div>
                    <div className={styles.projectThumb}>
                       <img src="https://images.unsplash.com/photo-1464930667322-14560739e4b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Proj" />
                       <div className={styles.projectOverlay}>
                          <p className={styles.projectName}>Urban Planning Group</p>
                          <Link href="/done-projects" className="text-white mt-2 block"><ArrowUpRight size={20} /></Link>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Specialized Works List (Refined Labels) */}
      <section className={styles.additionalServices}>
         <div className="container">
            <span className="section-subtitle">Technical Excellence</span>
            <h2 className="section-title" style={{color: '#fff'}}>Specialized Works</h2>
            <p className={styles.introText} style={{color: 'rgba(255,255,255,0.7)'}}>
              Precision execution for specialized construction requirements.
            </p>
            <div className={styles.addServicesGrid}>
               <div className={styles.addServiceItem}>
                  <DraftingCompass size={40} className={styles.addServiceIcon} />
                  <span className={styles.addServiceTitle}>Detail Design</span>
               </div>
               <div className={styles.addServiceItem}>
                  <Wrench size={40} className={styles.addServiceIcon} />
                  <span className={styles.addServiceTitle}>Civil work</span>
               </div>
               <div className={styles.addServiceItem}>
                  <Zap size={40} className={styles.addServiceIcon} />
                  <span className={styles.addServiceTitle}>MEP Work</span>
               </div>
               <div className={styles.addServiceItem}>
                  <Grid size={40} className={styles.addServiceIcon} />
                  <span className={styles.addServiceTitle}>Steel Structure</span>
               </div>
               <div className={styles.addServiceItem}>
                  <PaintBucket size={40} className={styles.addServiceIcon} />
                  <span className={styles.addServiceTitle}>Finishing Work</span>
               </div>
               <div className={styles.addServiceItem}>
                  <Palette size={40} className={styles.addServiceIcon} />
                  <span className={styles.addServiceTitle}>Decoration</span>
               </div>
            </div>
         </div>
      </section>

      {/* 5. Sectors We Serve */}
      <section className={styles.section} id="sectors">
         <div className="container">
            <div className="text-center mb-16">
               <span className="section-subtitle">Industries</span>
               <h2 className="section-title">Sectors We Serve</h2>
            </div>
            
            <div className={styles.sectorsGrid}>
               <div className={styles.sectorCard}>
                  <Landmark size={44} className={styles.sectorIcon} />
                  <h4 className={styles.sectorTitle}>Government offices</h4>
                  <p className={styles.sectorDesc}>Ministries, administrative centers, and public HQ.</p>
               </div>
               <div className={styles.sectorCard}>
                  <GraduationCap size={44} className={styles.sectorIcon} />
                  <h4 className={styles.sectorTitle}>Education</h4>
                  <p className={styles.sectorDesc}>School complexes, university campuses, and labs.</p>
               </div>
               <div className={styles.sectorCard}>
                  <Briefcase size={44} className={styles.sectorIcon} />
                  <h4 className={styles.sectorTitle}>Commercial</h4>
                  <p className={styles.sectorDesc}>Retail centers, office blocks, and showrooms.</p>
               </div>
               <div className={styles.sectorCard}>
                  <LayoutDashboard size={44} className={styles.sectorIcon} />
                  <h4 className={styles.sectorTitle}>Infrastructure</h4>
                  <p className={styles.sectorDesc}>Water pipes, roads, and environmental projects.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Stats Section */}
      <section className={styles.statsSection}>
         <div className="container">
            <div className={styles.statsGrid}>
               <div className={styles.statItem}>
                  <h3>25+</h3>
                  <p>Projects Delivered</p>
               </div>
               <div className={styles.statItem}>
                  <h3>10+</h3>
                  <p>Years Experience</p>
               </div>
               <div className={styles.statItem}>
                  <h3>100+</h3>
                  <p>Skilled Workers</p>
               </div>
               <div className={styles.statItem}>
                  <h3>100%</h3>
                  <p>Client Satisfaction</p>
               </div>
            </div>
         </div>
      </section>

      {/* 7. CTA Section */}
      <section className={styles.ctaSection}>
         <div className="container">
            <div className={styles.ctaContent}>
               <h2>Ready to Start Your Project?</h2>
               <p>
                  Partner with Cambodia&apos;s leading engineering and construction firm for your next development.
               </p>
               <div className={styles.ctaBtns}>
                  <Link href="/contact" className="btn btn-primary">Get a Free Quote</Link>
                  <Link href="/done-projects" className="btn btn-outline">Browse Portfolio</Link>
               </div>
            </div>
         </div>
      </section>
    </>
  );
}
