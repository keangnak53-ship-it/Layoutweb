
import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  CheckCircle2, Building2, PaintBucket, 
  FileText, Anchor, ArrowRight, Phone 
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { servicesData, ServiceDetail } from '@/data/services';
import { projects, Project } from '@/data/projects';
import styles from './page.module.css';

// Type for the icon mapping
const IconMap: { [key: string]: React.ElementType } = {
  Building2: Building2,
  PaintBucket: PaintBucket,
  FileText: FileText,
  Anchor: Anchor
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s: ServiceDetail) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const featuredProjects = projects.filter((p: Project) => 
    service.featuredProjectIds.includes(p.id)
  );

  return (
    <>
      <PageHero 
        title={service.title} 
        subtitle="Our Services" 
        bgImage="https://images.unsplash.com/photo-1541976544383-30b2e60a3278?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <section className={styles.detailSection}>
        <div className="container">
          <div className={styles.layout}>
            {/* Main Content */}
            <div className={styles.mainContent}>
               <p className={styles.introText}>{service.shortDesc}</p>
               <div className={styles.fullDescription}>
                  <p>{service.fullDesc}</p>
               </div>

               <h3 className={styles.sectionTitle}>Scope & Benefits</h3>
               <div className={styles.gridContent}>
                  <div className={styles.listBlock}>
                     <h4>Detailed Scope</h4>
                     <ul className={styles.customList}>
                        {service.scope.map((item: string, idx: number) => (
                           <li key={idx} className={styles.listItem}>
                              <CheckCircle2 size={18} className={styles.checkIcon} />
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className={styles.listBlock}>
                     <h4>Key Benefits</h4>
                     <ul className={styles.customList}>
                        {service.benefits.map((item: string, idx: number) => (
                           <li key={idx} className={styles.listItem}>
                              <CheckCircle2 size={18} className={styles.checkIcon} />
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               <h3 className={styles.sectionTitle}>Working Methodology</h3>
               <div className={styles.processTimeline}>
                  <div className={styles.processGrid}>
                     {service.process.map((step: { step: string; title: string; desc: string }, idx: number) => (
                        <div key={idx} className={styles.processItem}>
                           <span className={styles.stepNumber}>{step.step}</span>
                           <h5 className={styles.stepTitle}>{step.title}</h5>
                           <p className={styles.stepDesc}>{step.desc}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
               {/* Featured Projects Widget */}
               <div className={styles.sidebarWidget}>
                  <h4 className={styles.widgetTitle}>Relevant Projects</h4>
                  {featuredProjects.map((project: Project) => (
                     <Link href={`/home2/done-projects/${project.id}`} key={project.id} className={styles.projectSmallCard}>
                        <img src={project.image} alt={project.title} />
                        <div className={styles.projectSmallInfo}>
                           <h5>{project.title}</h5>
                           <span className={styles.viewProjectLink}>View Details <ArrowRight size={12} style={{display: 'inline'}} /></span>
                        </div>
                     </Link>
                  ))}
               </div>

               {/* CTA Widget */}
               <div className={`${styles.sidebarWidget} ${styles.ctaWidget}`}>
                  <Phone size={40} style={{marginBottom: '15px'}} />
                  <h4>Need Expert Advice?</h4>
                  <p>Contact our technical team to discuss your project requirements in detail.</p>
                  <Link href="/home2/contact" className="btn btn-primary w-full">Get In Touch</Link>
               </div>

               {/* Other Services */}
               <div className={styles.sidebarWidget}>
                  <h4 className={styles.widgetTitle}>Our Other Services</h4>
                  <ul className={styles.customList}>
                     {servicesData.filter((s: ServiceDetail) => s.slug !== slug).map((s: ServiceDetail) => (
                        <li key={s.slug} style={{marginBottom: '10px'}}>
                           <Link href={`/home2/services/${s.slug}`} className="hover:text-red-600 transition-colors flex items-center gap-2">
                              <ArrowRight size={14} className="text-red-500" />
                              {s.title}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
