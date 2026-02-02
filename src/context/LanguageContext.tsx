'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'EN' | 'KH';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  EN: {
    'nav.home': 'Home',
    'nav.home2': 'Home2',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.done_projects': 'Done Projects',
    'nav.implement_projects': 'Implement Projects',
    'nav.news': 'News',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'hero.welcome': 'Welcome to KIM MEX',
    'hero.tagline': 'Building the Future of Cambodia with Excellence',
    'footer.quick_links': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact Us',
    'contact.info': 'Contact Information',
    'contact.address': 'Business Address',
    'contact.phone': 'Phone Numbers',
    'contact.email': 'Email Addresses',
    'contact.hours': 'Working Hours',
    'contact.send_inquiry': 'Send an Inquiry',
    'contact.request_consult': 'Request a Consultation'
  },
  KH: {
    'nav.home': 'ទំព័រដើម',
    'nav.home2': 'ទំព័រដើម ២',
    'nav.about': 'អំពីយើង',
    'nav.services': 'សេវាកម្ម',
    'nav.projects': 'គម្រោង',
    'nav.done_projects': 'គម្រោងដែលបានបញ្ចប់',
    'nav.implement_projects': 'គម្រោងកំពុងអនុវត្ត',
    'nav.news': 'ព័ត៌មាន',
    'nav.education': 'ការអប់រំ/បច្ចេកទេស',
    'nav.contact': 'ទាក់ទងមកយើង',
    'hero.welcome': 'សូមស្វាគមន៍មកកាន់ គីម ម៉ិច (KIM MEX)',
    'hero.tagline': 'កសាងអនាគតកម្ពុជាប្រកបដោយឧត្តមភាព',
    'footer.quick_links': 'តំណភ្ជាប់រហ័ស',
    'footer.services': 'សេវាកម្មរបស់យើង',
    'footer.contact': 'ទាក់ទងមកយើង',
    'contact.info': 'ព័ត៌មានទំនាក់ទំនង',
    'contact.address': 'អាសយដ្ឋានអាជីវកម្ម',
    'contact.phone': 'លេខទូរស័ព្ទ',
    'contact.email': 'អាសយដ្ឋានអ៊ីមែល',
    'contact.hours': 'ម៉ោងធ្វើការ',
    'contact.send_inquiry': 'ផ្ញើសំណួរ',
    'contact.request_consult': 'ស្នើសុំការពិគ្រោះយោបល់'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');

  useEffect(() => {
    // Only access localStorage on client-side after mounting
    const savedLang = localStorage.getItem('app_lang') as Language;
    if (savedLang && (savedLang === 'EN' || savedLang === 'KH')) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    // Update body class for font switching
    if (language === 'KH') {
      document.body.classList.add('khmer-font');
    } else {
      document.body.classList.remove('khmer-font');
    }
  }, [language]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('app_lang', lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
