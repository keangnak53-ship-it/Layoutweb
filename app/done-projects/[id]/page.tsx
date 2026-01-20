
'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  MapPin, Calendar, Building2, Briefcase, 
  Ruler, Banknote, CheckCircle2, AlertCircle,
  ArrowLeft, ArrowRight
} from 'lucide-react';
import { projects } from '@/data/projects';
import styles from './page.module.css';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="container py-40 text-center">
        <h2>Project Not Found</h2>
        <Link href="/done-projects" className="btn btn-primary mt-10">Back to Projects</Link>
      </div>
    );
  }

  // Find related projects (same category, different ID)
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className={styles.detailPage}>
      {/* 1. Project Hero */}
      <section 
        className={styles.hero} 
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.projectSubtitle}>{project.category} — {project.location}</span>
          <h1 className={styles.projectTitle}>{project.title}</h1>
          <div className="mt-6">
            <Link href="/done-projects" className="text-white flex items-center justify-center gap-2 opacity-80 hover:opacity-100 transition">
              <ArrowLeft size={18} /> Back to Showcase
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Key Facts Bar */}
      <section className={styles.factsSection}>
        <div className="container">
          <div className={styles.factsGrid}>
            {project.client && (
              <div className={styles.factItem}>
                <span className={styles.factLabel}>Client</span>
                <span className={styles.factValue}>{project.client}</span>
              </div>
            )}
            <div className={styles.factItem}>
              <span className={styles.factLabel}>Location</span>
              <span className={styles.factValue}>{project.location}</span>
            </div>
            {project.sector && (
              <div className={styles.factItem}>
                <span className={styles.factLabel}>Sector</span>
                <span className={styles.factValue}>{project.sector}</span>
              </div>
            )}
            {project.builtArea && (
              <div className={styles.factItem}>
                <span className={styles.factLabel}>Built Area</span>
                <span className={styles.factValue}>{project.builtArea}</span>
              </div>
            )}
            {project.contractValue && (
              <div className={styles.factItem}>
                <span className={styles.factLabel}>Contract Value</span>
                <span className={styles.factValue}>{project.contractValue}</span>
              </div>
            )}
            <div className={styles.factItem}>
              <span className={styles.factLabel}>Status & Year</span>
              <span className={styles.factValue}>{project.status} • {project.year || 'N/A'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Project Description & Narrative */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.narrativeGrid}>
            <div>
              <h2 className={styles.sectionTitle}>Project Overview</h2>
              <div className={styles.narrativeText}>
                {project.description ? (
                  <>
                    <div className={styles.narrativeBlock}>
                      <h4>Background</h4>
                      <p>{project.description.background}</p>
                    </div>
                    <div className={styles.narrativeBlock}>
                      <h4>Objectives</h4>
                      <p>{project.description.objectives}</p>
                    </div>
                    <div className={styles.narrativeBlock}>
                      <h4>Design Concept & Functions</h4>
                      <p>{project.description.designConcept}</p>
                    </div>
                  </>
                ) : (
                  <p>{project.summary}</p>
                )}
              </div>
            </div>

            <div className="flex flex-column gap-10">
              {/* Scope & Services */}
              <div>
                <h4 className="text-xl font-bold mb-4 text-[#2E3192]">Scope & Services</h4>
                <ul className={styles.scopeList}>
                  {(project.scopeServices || ['Construction', 'Engineering', 'Finishing']).map((item, idx) => (
                    <li key={idx} className={styles.scopeItem}>
                      <CheckCircle2 size={18} className={styles.scopeIcon} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              {project.challengesSolutions && project.challengesSolutions.length > 0 && (
                <div>
                  <h4 className="text-xl font-bold mb-4 text-[#2E3192]">Challenges & Solutions</h4>
                  {project.challengesSolutions.map((item, idx) => (
                    <div key={idx} className={styles.challengeItem}>
                      <h5>Challenge: {item.challenge}</h5>
                      <p><strong>Solution:</strong> {item.solution}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className={`${styles.section} bg-offwhite`} style={{backgroundColor: 'var(--bg-offwhite)'}}>
          <div className="container">
            <h2 className={styles.sectionTitle} style={{marginBottom: '40px'}}>Project Gallery</h2>
            <div className={styles.galleryGrid}>
              {project.gallery.map((img, idx) => (
                <div key={idx} className={styles.galleryItem}>
                  <img src={img} alt={`${project.title} - ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Related Projects */}
      <section className={styles.section}>
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <h2 className={styles.sectionTitle} style={{marginBottom: 0}}>Related Projects</h2>
            <Link href="/done-projects" className="text-[#ED1C24] font-bold flex items-center gap-2">
              View All <ArrowRight size={18} />
            </Link>
          </div>
          <div className={styles.relatedGrid}>
            {relatedProjects.map((rp) => (
              <ProjectCard key={rp.id} project={rp} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Simple internal ProjectCard for related items
function ProjectCard({ project }: { project: any }) {
  return (
    <div className={styles.relatedCard}>
      <div className={styles.relatedImage}>
        <img src={project.image} alt={project.title} />
        <div className={styles.relatedOverlay}>
           <Link href={`/done-projects/${project.id}`} className="btn btn-primary">
             View Details
           </Link>
        </div>
      </div>
      <div className={styles.relatedContent}>
        <span className={styles.relatedCategory}>{project.category}</span>
        <h4 className={styles.relatedTitle}>{project.title}</h4>
        <Link href={`/done-projects/${project.id}`} className={styles.relatedLink}>
          View Case Study <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
