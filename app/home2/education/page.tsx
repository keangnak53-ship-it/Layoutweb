'use client';

import React, { useState } from 'react';
import PageHero from '@/components/ui/PageHero';
import Link from 'next/link';
import { 
  BookOpen, Code, HardHat, PenTool, Calculator, 
  Search, FileText, ArrowRight, Layers, Settings, Users, Database
} from 'lucide-react';
import styles from './page.module.css';

import { educationData, EducationSubject } from '@/data/education';

const categories = [
  "All", 
  "Detail Design", 
  "Civil Work", 
  "Finishing Work", 
  "MEP Operation", 
  "QS", 
  "Finance", 
  "HR & Admin"
];

const categoryIcons: Record<string, any> = {
  "Detail Design": <PenTool size={24} />,
  "Civil Work": <HardHat size={24} />,
  "Finishing Work": <Layers size={24} />,
  "MEP Operation": <Settings size={24} />,
  "QS": <Calculator size={24} />,
  "Finance": <FileText size={24} />,
  "HR & Admin": <Users size={24} />,
  "IT": <Code size={24} />,
  "Warehouse & Stock": <Database size={24} />
};

export default function EducationPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = educationData.filter(item => {
    const catMatch = activeCategory === "All" || item.category === activeCategory;
    const searchMatch = searchQuery === "" || 
                        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    
    return catMatch && searchMatch;
  });

  return (
    <>
      <PageHero 
        title="Technical Education" 
        subtitle="Knowledge & Standards"
        bgImage="/assets/images/education_hero_bg.png"
      />
      
      {/* 1. Intro Section */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.grid2Col}>
            <div className={styles.introText}>
              <span className="section-subtitle">Excellence Through Knowledge</span>
              <h2 className="section-title">KIM MEX Technical Standards</h2>
              <p>
                At KIM MEX, our strength lies in our deep technical expertise and commitment to continuous learning. 
                Our Education portal provides partners, engineers, and staff with access to our proprietary 
                standards and training modules across every technical department.
              </p>
              <div className={styles.statsMini}>
                <div className={styles.statItem}>
                   <h3>12+</h3>
                   <span>Technical Divisions</span>
                </div>
                <div className={styles.statItem}>
                   <h3>50+</h3>
                   <span>Training Modules</span>
                </div>
                <div className={styles.statItem}>
                   <h3>800+</h3>
                   <span>Certified Staff</span>
                </div>
              </div>
            </div>
            <div className={styles.introImage}>
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Training session" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Search & Filters */}
      <section className={styles.educationSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="section-title">Technical Departments</h2>
            <p>Explore our standards and training modules by department.</p>
          </div>

          <div className={styles.searchSection}>
            <div className={styles.searchWrapper}>
              <Search className={styles.searchIcon} size={20} />
              <input 
                type="text" 
                placeholder="Search standards, codes, or technical topics..." 
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.filterBar}>
            <div className={styles.filterGroup}>
              <label>Select Department</label>
              <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          {/* 3. Education Grid */}
          <div className={styles.educationGrid}>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <div key={item.id} className={styles.subjectCard}>
                  <div className={styles.cardImage}>
                    <img src={item.image} alt={item.title} />
                    <div className={styles.categoryIcon}>
                       {categoryIcons[item.category] || <BookOpen size={20} />}
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <span className={styles.cardCategory}>{item.category}</span>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardSummary}>{item.summary}</p>
                    <Link href={`/education/${item.id}`} className={styles.viewLink}>
                      View Detailed Standard <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.noResults}>
                 <h3>No matching subjects found</h3>
                 <p>Try adjusting your search or category filters.</p>
                 <button className="btn btn-outline" onClick={() => {
                   setActiveCategory("All");
                   setSearchQuery("");
                 }}>Clear All Filters</button>
              </div>
            )}
          </div>

          {/* 4. Support CTA */}
          <div className={styles.supportCta}>
             <div className={styles.ctaCard}>
                <div className={styles.ctaIcon}><BookOpen size={48} /></div>
                <div className={styles.ctaContent}>
                   <h3>Technical Support Request</h3>
                   <p>Do you have questions about our technical standards or require specific training for your project team?</p>
                </div>
                <Link href="/contact?subject=Technical Education Support" className="btn btn-primary">
                   Ask Our Experts <ArrowRight size={18} className="ml-2" />
                </Link>
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
