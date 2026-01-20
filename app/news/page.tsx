'use client';

import React, { useState } from 'react';
import PageHero from '@/components/ui/PageHero';
import Link from 'next/link';
import { ArrowRight, Calendar, Search } from 'lucide-react';
import styles from './page.module.css';

import { newsItems, NewsItem } from '@/data/news';

const categories = ["All", "Company News", "Projects", "CSR", "Industry"];
const years = ["All Years", "2025", "2024", "2023"];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeYear, setActiveYear] = useState("All Years");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = newsItems.filter(item => {
    const categoryMatch = activeCategory === "All" || item.category === activeCategory;
    const yearMatch = activeYear === "All Years" || item.date.includes(activeYear);
    const searchMatch = searchQuery === "" || 
                        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && yearMatch && searchMatch;
  });

  // Featured is the most recent featured item
  const featuredNews = newsItems.find(item => item.isFeatured);

  return (
    <>
      <PageHero 
        title="News & Updates" 
        subtitle="Stay Informed with KIM MEX"
        bgImage="/assets/images/news_hero_bg.png"
      />
      
      <div className={styles.container}>
        {/* Search Bar - Consistent with Projects page */}
        <div className={styles.searchSection}>
           <div className={styles.searchWrapper}>
              <Search className={styles.searchIcon} size={20} />
              <input 
                type="text" 
                placeholder="Search news, updates, or articles..." 
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
           </div>
        </div>

        {/* Filters - Dropdown structure as requested for other pages */}
        <div className={styles.filterSection}>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Company Event Type</label>
            <div className={styles.selectWrapper}>
              <select 
                className={styles.filterSelect}
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Year</label>
            <div className={styles.selectWrapper}>
              <select 
                className={styles.filterSelect}
                value={activeYear}
                onChange={(e) => setActiveYear(e.target.value)}
              >
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Post (Only show if no search/filter active) */}
        {featuredNews && activeCategory === "All" && activeYear === "All Years" && searchQuery === "" && (
          <div className={styles.featuredSection}>
             <div className={styles.featuredCard}>
                <div className={styles.featuredImage}>
                   <img src={featuredNews.image} alt={featuredNews.title} />
                </div>
                <div className={styles.featuredContent}>
                   <span className={styles.featuredBadge}>Latest Update</span>
                   <h2 className={styles.featuredTitle}>{featuredNews.title}</h2>
                   <p className={styles.featuredExcerpt}>{featuredNews.excerpt}</p>
                   <div className={styles.featuredMeta}>
                      <Calendar size={16} />
                      <span>{featuredNews.date}</span>
                      <span className={styles.metaDivider}>|</span>
                      <span>{featuredNews.category}</span>
                   </div>
                   <Link href={`/news/${featuredNews.id}`} className="btn btn-primary">
                      Read Full Article
                   </Link>
                </div>
             </div>
          </div>
        )}

        {/* Grid */}
        <div className={styles.newsGrid}>
          {filteredNews.map((item) => (
            <div key={item.id} className={styles.newsCard}>
              <div className={styles.imageContainer}>
                <img src={item.image} alt={item.title} />
                <span className={styles.categoryTag}>{item.category}</span>
              </div>
              <div className={styles.content}>
                <div className={styles.dateRow}>
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.excerpt}>{item.excerpt}</p>
                <Link href={`/news/${item.id}`} className={styles.link}>
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className={styles.noResults}>
            <h3>No articles found</h3>
            <p>Try adjusting your search or category filters.</p>
            <button 
              className="btn btn-primary mt-6"
              onClick={() => {
                setActiveCategory("All");
                setActiveYear("All Years");
                setSearchQuery("");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {filteredNews.length > 0 && (
          <div className={styles.paginationSection}>
             <button className="btn btn-navy">Load More Updates</button>
          </div>
        )}
      </div>
    </>
  );
}
