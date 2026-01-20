'use client';

import React from 'react';
import PageHero from '@/components/ui/PageHero';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube, Send, ShieldCheck, FileText } from 'lucide-react';
import styles from './page.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. Our team will contact you shortly.");
  };

  return (
    <>
      <PageHero 
        title={t('nav.contact')} 
        subtitle="Get In Touch With KIM MEX"
        bgImage="/assets/images/contact_hero_bg.png"
      />
      
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            
            {/* Left Side: Info */}
            <div className={styles.infoSidebar}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>{t('contact.info')}</h3>
                
                <div className={styles.contactInfoItem}>
                  <div className={styles.iconCircle}><MapPin size={22} /></div>
                  <div className={styles.itemContent}>
                    <h5>{t('contact.address')}</h5>
                    <p>#123 NR 5, Sangkat Svay Pak, Khan Russey Keo, Phnom Penh, Cambodia</p>
                  </div>
                </div>

                <div className={styles.contactInfoItem}>
                  <div className={styles.iconCircle}><Phone size={22} /></div>
                  <div className={styles.itemContent}>
                    <h5>{t('contact.phone')}</h5>
                    <p>+855 (0) 23 888 999</p>
                    <p>+855 (0) 12 345 678</p>
                  </div>
                </div>

                <div className={styles.contactInfoItem}>
                  <div className={styles.iconCircle}><Mail size={22} /></div>
                  <div className={styles.itemContent}>
                    <h5>{t('contact.email')}</h5>
                    <p>info@kimmex.com.kh</p>
                    <p>projects@kimmex.com.kh</p>
                  </div>
                </div>

                <div className={styles.contactInfoItem}>
                  <div className={styles.iconCircle}><Clock size={22} /></div>
                  <div className={styles.itemContent}>
                    <h5>{t('contact.hours')}</h5>
                    <p>Mon - Fri: 08:00 AM - 05:00 PM</p>
                    <p>Sat: 08:00 AM - 12:00 PM</p>
                  </div>
                </div>

                <div style={{marginTop: '30px', paddingBottom: '20px', borderBottom: '1px solid #eee'}}>
                  <h5 style={{color: 'var(--primary-navi)', marginBottom: '15px', fontWeight: 800}}>KIM MEX SOCIAL</h5>
                  <div className={styles.socialLinks}>
                    <a href="#" className={styles.socialIcon} title="Facebook"><Facebook size={20} /></a>
                    <a href="#" className={styles.socialIcon} title="Instagram"><Instagram size={20} /></a>
                    <a href="#" className={styles.socialIcon} title="LinkedIn"><Linkedin size={20} /></a>
                    <a href="#" className={styles.socialIcon} title="YouTube"><Youtube size={20} /></a>
                  </div>
                </div>

                <div className={styles.legalSection}>
                   <Link href="/privacy" className={styles.legalLink}>
                      <ShieldCheck size={16} /> Privacy Policy
                   </Link>
                   <Link href="/terms" className={styles.legalLink}>
                      <FileText size={16} /> Term of Use
                   </Link>
                </div>
              </div>

              {/* Education section */}
              <div className={styles.infoCard} style={{background: 'var(--primary-navi)', color: '#fff'}}>
                <h4 style={{color: '#fff', marginBottom: '15px'}}>Standard & Standards</h4>
                <p style={{fontSize: '0.9rem', marginBottom: '20px', opacity: 0.9}}>
                  Interested in our technical excellence? Explore our technical education and department standards.
                </p>
                <a href="/education" className="btn btn-outline" style={{width: '100%', borderColor: 'rgba(255,255,255,0.3)'}}>View Technical Education</a>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className={styles.formContainer}>
               <span className="section-subtitle">{t('contact.send_inquiry')}</span>
               <h2 className="section-title" style={{fontSize: '2rem'}}>{t('contact.request_consult')}</h2>
               <p className="text-gray-500 mb-8">
                 Whether you have a specific project in mind or just a general inquiry, our technical team is ready to assist you.
               </p>

               <form onSubmit={handleSubmit}>
                 <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Full Name</label>
                      <input type="text" className={styles.input} placeholder="Enter your name" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Phone Number</label>
                      <input type="tel" className={styles.input} placeholder="+855 00 000 000" required />
                    </div>
                 </div>

                 <div className={styles.formGroup}>
                   <label className={styles.label}>Email Address</label>
                   <input type="email" className={styles.input} placeholder="name@company.com" required />
                 </div>

                 <div className={styles.formGroup}>
                   <label className={styles.label}>Project Type</label>
                   <select className={styles.select}>
                      <option>Design & Build</option>
                      <option>Building Renovation</option>
                      <option>Project Management</option>
                      <option>Technical Consultancy</option>
                      <option>Other</option>
                   </select>
                 </div>

                 <div className={styles.formGroup}>
                   <label className={styles.label}>Your Message</label>
                   <textarea rows={6} className={styles.textarea} placeholder="Briefly describe your requirements or inquiry..."></textarea>
                 </div>

                 <button type="submit" className="btn btn-primary w-full flex items-center justify-center gap-2">
                   Send Inquiry <Send size={18} />
                 </button>
               </form>
            </div>

          </div>

          {/* Map Section */}
          <div className={styles.mapSection}>
             {/* Note: In a real app, replace with iframe or Google Maps component */}
             <div className={styles.mapPlaceholder}>
                <MapPin size={48} style={{marginBottom: '15px', opacity: 0.3}} />
                <p className="font-bold">Interactive Map Location</p>
                <p className="text-sm opacity-60">#123 NR 5, Russey Keo, Phnom Penh</p>
                <a href="https://maps.google.com" target="_blank" className="btn btn-navy mt-6" style={{fontSize: '0.8rem'}}>Open in Google Maps</a>
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
