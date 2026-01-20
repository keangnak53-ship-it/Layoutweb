'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, CheckCircle2, BookOpen, Download, 
  Share2, Printer, ChevronRight 
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { educationData } from '@/data/education';
import styles from './page.module.css';

export default function EducationDetailPage() {
  const { id } = useParams();
  const subject = educationData.find(s => s.id === Number(id));

  if (!subject) {
    return (
      <div className="container py-40 text-center">
        <h2>Technical Subject Not Found</h2>
        <Link href="/education" className="btn btn-primary mt-10">Back to Education</Link>
      </div>
    );
  }

  return (
    <div className={styles.detailPage}>
      <PageHero 
        title={subject.title}
        subtitle={subject.category}
        bgImage={subject.image}
        breadcrumbTitle="Technical Detail"
      />

      <div className={styles.container}>
        <div className={styles.navigation}>
           <Link href="/education" className={styles.backLink}>
              <ArrowLeft size={20} />
              <span>Back to Department Overview</span>
           </Link>
        </div>

        <div className={styles.mainLayout}>
          {/* Main Content Area */}
          <div className={styles.contentArea}>
            {/* 1. Description */}
            <div className={styles.section}>
               <h3 className={styles.sectionTitle}>Technical Overview</h3>
               <div className={styles.contentRich} dangerouslySetInnerHTML={{ __html: subject.content }} />
            </div>

            {/* 2. Key Topics/Standards */}
            {subject.topics && (
              <div className={styles.section}>
                 <h3 className={styles.sectionTitle}>Included Standards</h3>
                 <div className={styles.topicsGrid}>
                    {subject.topics.map((topic, idx) => (
                      <div key={idx} className={styles.topicCard}>
                         <CheckCircle2 size={20} />
                         <span>{topic}</span>
                      </div>
                    ))}
                 </div>
              </div>
            )}

            {/* 3. Learning Objectives */}
            <div className={styles.section}>
               <h3 className={styles.sectionTitle}>Compliance & Quality</h3>
               <p>All work within the <strong>{subject.title}</strong> division must adhere to these strictly enforced KIM MEX quality protocols. We ensure that every detail meets both national standards and our internal excellence benchmarks.</p>
               <ul className={styles.checkList}>
                  <li>Strict adherence to latest building codes and safety regulations.</li>
                  <li>Continuous quality monitoring through site audits.</li>
                  <li>Performance benchmarking against international standards.</li>
                  <li>Mandatory annual certification updates for all engineering staff.</li>
               </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
             <div className={styles.resourceWidget}>
                <h4>Technical Resources</h4>
                <div className={styles.resList}>
                   <div className={styles.resItem}>
                      <div className={styles.resIcon}><Download size={18} /></div>
                      <div className={styles.resInfo}>
                         <span>Standard Operating Procedure</span>
                         <small>PDF • 2.5 MB</small>
                      </div>
                   </div>
                   <div className={styles.resItem}>
                      <div className={styles.resIcon}><Download size={18} /></div>
                      <div className={styles.resInfo}>
                         <span>Technical Specifications</span>
                         <small>PDF • 1.8 MB</small>
                      </div>
                   </div>
                   <div className={styles.resItem}>
                      <div className={styles.resIcon}><Download size={18} /></div>
                      <div className={styles.resInfo}>
                         <span>Quality Checklist</span>
                         <small>XLSX • 0.5 MB</small>
                      </div>
                   </div>
                </div>
                <button className="btn btn-navy w-full mt-6">Request Access</button>
             </div>

             <div className={styles.toolsWidget}>
                <h4>Tools & Options</h4>
                <div className={styles.toolsList}>
                   <button className={styles.toolBtn}><Share2 size={18} /> Share Standard</button>
                   <button className={styles.toolBtn}><Printer size={18} /> Print for Site Use</button>
                </div>
             </div>

             <div className={styles.helpWidget}>
                <h4>Need Help?</h4>
                <p>If you require clarification on any part of this standard, contact our Technical Quality Division.</p>
                <Link href="/contact" className={styles.helpLink}>
                   Contact Support <ChevronRight size={16} />
                </Link>
             </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
