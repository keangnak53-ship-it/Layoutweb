'use client';

import React from 'react';
import PageHero from '@/components/ui/PageHero';
import { BookOpen, GraduationCap, Microscope, Check, ArrowRight, FileText } from 'lucide-react';
import styles from './page.module.css';

export default function KnowledgeHubPage() {
  return (
    <>
      <PageHero 
        title="Knowledge Hub" 
        subtitle="Empowering Students"
        bgImage="https://images.unsplash.com/photo-1523050853064-eb819e937d7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      
      <section className={styles.section}>
        <div className="container">
          <div className={styles.introBox}>
            <span className="section-subtitle">Academic Partnership</span>
            <h2 className="section-title">Sharing Engineering Excellence</h2>
            <p className="text-gray-500 max-w-3xl mx-auto">
              KIM MEX is committed to supporting the next generation of Cambodian engineers and researchers. 
              Our Knowledge Hub provides academic resources, case studies, and opportunities for 
              field research based on 25 years of industry experience.
            </p>
          </div>

          <div className={styles.resourceGrid}>
            <div className={styles.resourceCard}>
              <div className={styles.cardIcon}><FileText size={28} /></div>
              <h3>Case Studies</h3>
              <p>Deep dives into engineering challenges solved during major projects like the Ministry of Commerce.</p>
              <button className="btn btn-outline" style={{padding: '8px 15px', fontSize: '0.8rem', color: 'var(--primary-navi)', borderColor: 'var(--primary-navi)'}}>View Library</button>
            </div>

            <div className={styles.resourceCard}>
              <div className={styles.cardIcon}><Microscope size={28} /></div>
              <h3>Research Data</h3>
              <p>Technical datasets and structural reports available for approved thesis research projects.</p>
              <button className="btn btn-outline" style={{padding: '8px 15px', fontSize: '0.8rem', color: 'var(--primary-navi)', borderColor: 'var(--primary-navi)'}}>Request Access</button>
            </div>

            <div className={styles.resourceCard}>
              <div className={styles.cardIcon}><BookOpen size={28} /></div>
              <h3>SOP Manuals</h3>
              <p>Standard Operating Procedures used by our project management teams to ensure quality and safety.</p>
              <button className="btn btn-outline" style={{padding: '8px 15px', fontSize: '0.8rem', color: 'var(--primary-navi)', borderColor: 'var(--primary-navi)'}}>Download SOPs</button>
            </div>
          </div>

          {/* Internship & Research Section */}
          <div className={styles.programSection}>
             <div className="container" style={{padding: '0 40px'}}>
               <div className={styles.programGrid}>
                  <div className={styles.programContent}>
                    <span className="section-subtitle" style={{color: 'rgba(255,255,255,0.7)'}}>Field Experience</span>
                    <h2>Internship & Research Program</h2>
                    <p>
                      We welcome students from ITC, RUPP, and other major technical universities to apply for our 
                      monitored internship program or to conduct their final thesis research on-site.
                    </p>
                    
                    <div className={styles.statsRow}>
                       <div className={styles.statItem}>
                          <h4>50+</h4>
                          <p>Annual Interns</p>
                       </div>
                       <div className={styles.statItem}>
                          <h4>12</h4>
                          <p>University Partners</p>
                       </div>
                    </div>
                  </div>

                  <div className={styles.appBox}>
                     <h3>How to Apply</h3>
                     <ul className={styles.stepList}>
                        <li>
                          <span className={styles.stepNum}>1</span>
                          <span>Complete the online research inquiry form.</span>
                        </li>
                        <li>
                          <span className={styles.stepNum}>2</span>
                          <span>Submit your research proposal or university requirements.</span>
                        </li>
                        <li>
                          <span className={styles.stepNum}>3</span>
                          <span>Attend a briefing with our Department Head.</span>
                        </li>
                     </ul>
                     <button className="btn btn-primary w-full shadow-lg">Submit Research Proposal</button>
                  </div>
               </div>
             </div>
          </div>

        </div>
      </section>
    </>
  );
}
