'use client';

import React from 'react';
import PageHero from '@/components/ui/PageHero';
import { FileText, Download, Bell, ExternalLink } from 'lucide-react';
import styles from './page.module.css';

export default function DocumentsPage() {
  const announcements = [
    {
      id: 1,
      day: "12",
      month: "DEC",
      title: "Holiday Notice: National Day",
      desc: "Our offices will be closed on December 29th for the Peace Day celebration. Site operations will remain scheduled as per project timelines."
    },
    {
      id: 2,
      day: "05",
      month: "NOV",
      title: "New Procurement Guidelines 2025",
      desc: "Updated guidelines for suppliers and vendors are now available for download in the document library. Please review for all 2025-2026 bids."
    },
    {
      id: 3,
      day: "20",
      month: "OCT",
      title: "HSE Training for All Site Supervisors",
      desc: "Mandatory safety training session scheduled for all staff at the Phnom Penh headquarters auditorium starting 8:30 AM."
    }
  ];

  const library = [
    {
      category: "Corporate",
      files: [
        { name: "Company Profile 2025 (EN)", size: "4.2 MB", format: "PDF" },
        { name: "Annual Report 2024", size: "8.5 MB", format: "PDF" },
        { name: "Standard Operating Procedures", size: "1.5 MB", format: "PDF" }
      ]
    },
    {
      category: "Certificates",
      files: [
        { name: "ISO 9001:2015 Certification", size: "0.8 MB", format: "PDF" },
        { name: "Construction Grade A License", size: "1.2 MB", format: "PDF" },
        { name: "OHSAS 18001 Safety Cert", size: "0.9 MB", format: "PDF" }
      ]
    }
  ];

  return (
    <>
      <PageHero 
        title="Documents & Notifications" 
        subtitle="Official Resources"
        bgImage="https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      
      <section className={styles.section}>
        <div className="container">
          <div className={styles.introBox}>
            <span className="section-subtitle">Information Center</span>
            <h2 className="section-title">Public Announcements</h2>
            <p className="text-gray-500 max-w-2xl mt-4">
              Access the latest official notices from KIM MEX Construction & Investment Co., Ltd. 
              Our record storage ensures transparency for our partners, clients, and the public.
            </p>
          </div>

          <div className={styles.grid}>
            {/* Announcements */}
            <div className={styles.announcementsSection}>
               <h3>Recent Notifications</h3>
               <div className={styles.announcementList}>
                 {announcements.map(item => (
                   <div key={item.id} className={styles.announcementCard}>
                     <div className={styles.dateBox}>
                       <span className={styles.day}>{item.day}</span>
                       <span className={styles.month}>{item.month}</span>
                     </div>
                     <div className={styles.announcementContent}>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            {/* Document Library */}
            <div className={styles.sidebar}>
               <h3 className={styles.sidebarTitle}>Resource Library</h3>
               
               {library.map((cat, idx) => (
                 <div key={idx} className={styles.docCategory}>
                    <div className={styles.catHeader}>{cat.category}</div>
                    <div className={styles.docList}>
                      {cat.files.map((file, fidx) => (
                        <div key={fidx} className={styles.docItem}>
                          <div className={styles.docInfo}>
                             <h5>{file.name}</h5>
                             <span>{file.format} • {file.size}</span>
                          </div>
                          <Download className={styles.downloadIcon} size={20} />
                        </div>
                      ))}
                    </div>
                 </div>
               ))}

               <div className={styles.announcementCard} style={{background: 'var(--primary-navi)', color: '#fff', flexDirection: 'column', textAlign: 'center'}}>
                  <Bell size={32} style={{margin: '0 auto 15px'}} />
                  <h4 style={{color: '#fff'}}>Stay Notified</h4>
                  <p style={{fontSize: '0.8rem', opacity: 0.8, marginBottom: '15px'}}>Subscribe to our newsletter for official company updates.</p>
                  <button className="btn btn-outline w-full" style={{fontSize: '0.75rem'}}>Subscribe Now</button>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
