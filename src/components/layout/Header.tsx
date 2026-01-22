'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Search, ChevronDown, ChevronRight, Languages, X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import Logo from '@/components/ui/Logo';
import styles from './Header.module.css';
import { useLanguage } from '@/context/LanguageContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mobile dropdown states
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false);

  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  
  // Detect if we are in the home2 clone
  const isHome2 = pathname.startsWith('/home2');
  const basePath = isHome2 ? '/home2' : '';

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Lock body scroll when mobile menu or search is open
  useEffect(() => {
    if (mobileMenuOpen || searchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen, searchOpen]);

  // Close mobile menu on path change
  useEffect(() => {
    // Use microtask to avoid "setState synchronously in effect" warning/error
    Promise.resolve().then(() => {
      if (mobileMenuOpen) setMobileMenuOpen(false);
      if (searchOpen) setSearchOpen(false);
    });
  }, [pathname]); // Only depend on pathname to close when it changes

  return (
    <>
      {/* Search Overlay */}
      <div className={`${styles.searchOverlay} ${searchOpen ? styles.searchOverlayOpen : ''} ${isHome2 ? 'home2-style' : ''}`}>
        <button className={styles.closeSearch} onClick={() => setSearchOpen(false)}>
          <X size={32} />
        </button>
        <div className={styles.searchFormWrapper}>
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <input 
              type="text" 
              placeholder={language === 'EN' ? "Search for projects, news, or technical standards..." : "ស្វែងរកគម្រោង ព័ត៌មាន ឬបទដ្ឋានបច្ចេកទេស..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus={searchOpen}
            />
            <button type="submit" className={styles.searchSubmit}>
              <Search size={28} />
            </button>
          </form>
          <p className={styles.searchHint}>Press ESC to close</p>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuHeader}>
           <div onClick={() => setMobileMenuOpen(false)}>
             <Logo variant="white" />
           </div>
           <button className={styles.closeMobileBtn} onClick={() => setMobileMenuOpen(false)}>
             <X size={28} />
           </button>
        </div>
        <div className={styles.mobileMenuContent}>
           <div className={styles.mobileNavLinkGroup}>
              <div 
                className={styles.mobileNavLink} 
                onClick={() => setMobileHomeOpen(!mobileHomeOpen)}
                style={{justifyContent: 'space-between'}}
              >
                {t('nav.home')}
                <ChevronDown size={20} className={mobileHomeOpen ? styles.rotate180 : ''} />
              </div>
              <div className={`${styles.mobileSubMenu} ${mobileHomeOpen ? styles.mobileSubMenuOpen : ''}`}>
                 <Link href="/" className={styles.mobileSubLink}>Default Home</Link>
                 <Link href="/home2" className={styles.mobileSubLink}>Home Variant 2</Link>
              </div>
           </div>

           <Link href={`${basePath}/about`} className={styles.mobileNavLink}>{t('nav.about')}</Link>
           <Link href={`${basePath}/services`} className={styles.mobileNavLink}>{t('nav.services')}</Link>
           
           <div className={styles.mobileNavLinkGroup}>
              <div 
                className={styles.mobileNavLink} 
                onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                style={{justifyContent: 'space-between'}}
              >
                {t('nav.projects')}
                <ChevronDown size={20} className={mobileProjectsOpen ? styles.rotate180 : ''} />
              </div>
              <div className={`${styles.mobileSubMenu} ${mobileProjectsOpen ? styles.mobileSubMenuOpen : ''}`}>
                 <Link href={`${basePath}/done-projects`} className={styles.mobileSubLink}>{t('nav.done_projects')}</Link>
                 <Link href={`${basePath}/implement-projects`} className={styles.mobileSubLink}>{t('nav.implement_projects')}</Link>
              </div>
           </div>

           <Link href={`${basePath}/news`} className={styles.mobileNavLink}>{t('nav.news')}</Link>
           <Link href={`${basePath}/education`} className={styles.mobileNavLink}>{t('nav.education')}</Link>
           <Link href={`${basePath}/contact`} className={styles.mobileNavLink}>{t('nav.contact')}</Link>
           
           <div className={styles.mobileLangSwitcher}>
              <button 
                 className={`${styles.mobileLangBtn} ${language === 'EN' ? styles.activeMobileLang : ''}`}
                 onClick={() => setLanguage('EN')}
              >
                English
              </button>
              <button 
                 className={`${styles.mobileLangBtn} ${language === 'KH' ? styles.activeMobileLang : ''}`}
                 onClick={() => setLanguage('KH')}
              >
                ខ្មែរ
              </button>
           </div>
        </div>
      </div>

      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''} ${isHome2 ? 'home2-style' : ''}`}>
      <div className={`container ${styles.container}`}>
        <Link href={basePath || "/"}>
           <Logo variant="white" />
        </Link>
        
        <nav className={styles.nav}>
          {/* Home Dropdown */}
          <div className={styles.dropdown}>
             <Link href={basePath || "/"} className={styles.navLink} style={{display: 'flex', alignItems: 'center'}}>
               {t('nav.home')} <ChevronDown size={14} style={{marginLeft: '4px'}} />
             </Link>
             <div className={styles.dropdownMenu}>
               <Link href="/" className={styles.dropdownItem}>{t('nav.home')}</Link>
               <Link href="/home2" className={styles.dropdownItem}>{t('nav.home2')}</Link>
             </div>
          </div>

          <Link href={`${basePath}/about`} className={styles.navLink}>{t('nav.about')}</Link>
          <Link href={`${basePath}/services`} className={styles.navLink}>{t('nav.services')}</Link>
          
          {/* Projects Dropdown */}
          <div className={styles.dropdown}>
             <button className={styles.navLink} style={{background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer'}}>
               {t('nav.projects')} <ChevronDown size={14} style={{marginLeft: '4px'}} />
             </button>
             <div className={styles.dropdownMenu}>
               <Link href={`${basePath}/done-projects`} className={styles.dropdownItem}>{t('nav.done_projects')}</Link>
               <Link href={`${basePath}/implement-projects`} className={styles.dropdownItem}>{t('nav.implement_projects')}</Link>
             </div>
          </div>

          <Link href={`${basePath}/news`} className={styles.navLink}>{t('nav.news')}</Link>
          <Link href={`${basePath}/education`} className={styles.navLink}>{t('nav.education')}</Link>
          <Link href={`${basePath}/contact`} className={styles.navLink}>{t('nav.contact')}</Link>
        </nav>
        
        <div className={styles.rightSection}>
          <div className={styles.langSwitcher}>
            <button className={styles.langBtn}>
              <Languages size={18} />
              <span>{language}</span>
              <ChevronDown size={14} />
            </button>
            <div className={styles.langMenu}>
              <button 
                className={`${styles.langItem} ${language === 'EN' ? styles.activeLang : ''}`}
                onClick={() => setLanguage('EN')}
              >
                English (EN)
              </button>
              <button 
                className={`${styles.langItem} ${language === 'KH' ? styles.activeLang : ''}`}
                onClick={() => setLanguage('KH')}
              >
                ភាសាខ្មែរ (KH)
              </button>
            </div>
          </div>

          <button 
            className={styles.searchBtn}
            onClick={() => setSearchOpen(true)}
            title="Open Search"
          >
             <Search size={20} />
          </button>



          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
