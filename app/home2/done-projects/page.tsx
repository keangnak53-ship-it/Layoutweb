'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import { MapPin, ArrowRight } from 'lucide-react';
import styles from './page.module.css';

import { projects } from '@/data/projects';

const categories = ["All", "Government Office Building", "Public Service Building", "Private Building", "Water Treatment Plant", "Slope Construction"];
const locations = ["All", "Phnom Penh", "Siem Reap", "Sihanoukville", "Kandal", "Prey Veng", "Other"];

export default function DoneProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLocation, setActiveLocation] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(p => {
    // Only show Completed projects on the "Done" page
    if (p.status !== "Completed") return false;

    const categoryMatch = activeCategory === "All" || p.category === activeCategory;
    const locationMatch = activeLocation === "All" || 
                         (activeLocation === "Other" ? !["Phnom Penh", "Siem Reap", "Sihanoukville", "Kandal", "Prey Veng"].includes(p.location) : p.location === activeLocation);
    const searchMatch = searchQuery === "" || 
                        p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        p.summary.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && locationMatch && searchMatch;
  });

  return (
    <>
      <PageHero 
        title="Done Projects" 
        subtitle="Completed Works Showcase"
        bgImage="/assets/images/projects_hero_bg.png"
      />
      
      <div className={styles.container}>
        {/* Search Bar */}
        <div className={styles.searchSection}>
           <input 
             type="text" 
             placeholder="Search projects by name or description..." 
             className={styles.searchInput}
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
           />
        </div>

        {/* Filters */}
        <div className={styles.filterSection}>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Category</label>
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
            <label className={styles.filterLabel}>Location</label>
            <div className={styles.selectWrapper}>
              <select 
                className={styles.filterSelect}
                value={activeLocation}
                onChange={(e) => setActiveLocation(e.target.value)}
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        {filteredProjects.length > 0 ? (
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.imageContainer}>
                  <img src={project.image} alt={project.title} />
                </div>
                <div className={styles.content}>
                  <span className={styles.category}>{project.category}</span>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.summary}>{project.summary}</p>
                  <div className={styles.location}>
                    <MapPin size={16} />
                    {project.location}
                  </div>
                  <Link href={`/done-projects/${project.id}`} className={styles.link}>
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            <h3>No projects found</h3>
            <p>Try adjusting your search or filters to find what you are looking for.</p>
            <button 
              className="btn btn-primary mt-6"
              onClick={() => {
                setActiveCategory("All");
                setActiveLocation("All");
                setSearchQuery("");
              }}
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </>
  );
}
