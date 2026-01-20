'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import Logo from '@/components/ui/Logo'; 
import styles from './Footer.module.css';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const isHome2 = pathname.startsWith('/home2');
  const basePath = isHome2 ? '/home2' : '';

  return (
    <footer className={`${styles.footer} ${isHome2 ? 'home2-style' : ''}`}>
      <div className="container">
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <div style={{marginBottom: '20px'}}>
              <Logo variant="white" />
            </div>
            
            <p>
              Leading construction and engineering firm in Cambodia. We deliver quality, safety, and innovation in every project.
            </p>
            <div className={styles.socialRow}>
              <a href="#" className={styles.socialIcon}><Facebook size={20} /></a>
              <a href="#" className={styles.socialIcon}><Instagram size={20} /></a>
              <a href="#" className={styles.socialIcon}><Linkedin size={20} /></a>
              <a href="#" className={styles.socialIcon}><Youtube size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className={styles.footerTitle}>{t('footer.quick_links')}</h4>
            <div className={styles.linkList}>
              <Link href={`${basePath}/about`}>{t('nav.about')}</Link>
              <Link href={`${basePath}/done-projects`}>{t('nav.done_projects')}</Link>
              <Link href={`${basePath}/news`}>{t('nav.news')}</Link>
              <Link href={`${basePath}/education`}>{t('nav.education')}</Link>
              <Link href={`${basePath}/contact`}>{t('nav.contact')}</Link>
            </div>
          </div>
          
          <div>
            <h4 className={styles.footerTitle}>{t('footer.services')}</h4>
            <div className={styles.linkList}>
              <Link href={`${basePath}/services`}>Construction</Link>
              <Link href={`${basePath}/services`}>Renovation</Link>
              <Link href={`${basePath}/services`}>Consulting</Link>
              <Link href={`${basePath}/services`}>Trading</Link>
            </div>
          </div>
          
          <div>
            <h4 className={styles.footerTitle}>Contact Us</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactRow}>
                <MapPin size={18} className={styles.contactIcon} />
                <span>#123 Street Name, Sangkat, Khan, Phnom Penh, Cambodia</span>
              </div>
              <div className={styles.contactRow}>
                <Phone size={18} className={styles.contactIcon} />
                <span>+855 12 345 678</span>
              </div>
              <div className={styles.contactRow}>
                <Mail size={18} className={styles.contactIcon} />
                <span>info@kimmex.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>&copy; {new Date().getFullYear()} Kimmex Construction & Investment Co., Ltd. All Rights Reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
