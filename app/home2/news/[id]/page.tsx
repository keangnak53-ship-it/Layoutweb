'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Calendar, Tag, ArrowLeft, ArrowRight, Share2, 
  Facebook, Twitter, Linkedin, Printer 
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import { newsItems } from '@/data/news';
import styles from './page.module.css';

export default function NewsDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const article = newsItems.find(n => n.id === Number(id));

  if (!article) {
    return (
      <div className="container py-40 text-center">
        <h2>Article Not Found</h2>
        <Link href="/news" className="btn btn-primary mt-10">Back to News</Link>
      </div>
    );
  }

  // Related news (different id, same category if possible)
  const relatedNews = newsItems
    .filter(n => n.id !== article.id)
    .slice(0, 3);

  return (
    <article className={styles.detailPage}>
      {/* 1. Article Hero / Title Area */}
      <PageHero 
        title={article.title}
        subtitle={article.category}
        bgImage={article.image}
        breadcrumbTitle="News Update"
      />

      <div className={styles.container}>
        <div className={styles.mainLayout}>
          
          {/* Main Content Column */}
          <div className={styles.contentColumn}>
            {/* 2. Meta Information */}
            <div className={styles.articleMeta}>
              <div className={styles.metaLeft}>
                 <div className={styles.metaItem}>
                    <Calendar size={18} />
                    <span>{article.date}</span>
                 </div>
                 <div className={styles.metaItem}>
                    <Tag size={18} />
                    <span>{article.category}</span>
                 </div>
              </div>
              <div className={styles.metaRight}>
                 <button className={styles.iconBtn} title="Share"><Share2 size={18} /></button>
                 <button className={styles.iconBtn} title="Print"><Printer size={18} /></button>
              </div>
            </div>

            {/* 3. Main Article Body */}
            <div className={styles.articleBody}>
               {/* Using dangerouslySetInnerHTML for demonstrating formatted content from data */}
               {article.content ? (
                 <div dangerouslySetInnerHTML={{ __html: article.content }} />
               ) : (
                 <p>{article.excerpt}</p>
               )}
               
               <p>KIM MEX Construction remains dedicated to transparency and keeping our stakeholders informed about our latest achievements, safety milestones, and project developments. We continue to strive for excellence in every brick we lay and every structure we raise across the Kingdom.</p>
            </div>

            {/* 4. Documents/Images (If any) */}
            <div className={styles.additionalMedia}>
               <h3 className={styles.sectionTitle}>Project Highlights</h3>
               <div className={styles.mediaGrid}>
                  <div className={styles.mediaItem}>
                     <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="News scene" />
                  </div>
                  <div className={styles.mediaItem}>
                     <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="News scene" />
                  </div>
               </div>
            </div>

            {/* Back to List */}
            <div className={styles.navigation}>
               <Link href="/news" className={styles.backLink}>
                  <ArrowLeft size={20} />
                  <span>Back to News & Updates</span>
               </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
             <div className={styles.sidebarWidget}>
                <h4 className={styles.widgetTitle}>Share This Story</h4>
                <div className={styles.shareButtons}>
                   <button className={styles.shareBtn}><Facebook size={20} /> Facebook</button>
                   <button className={styles.shareBtn}><Twitter size={20} /> Twitter</button>
                   <button className={styles.shareBtn}><Linkedin size={20} /> LinkedIn</button>
                </div>
             </div>

             <div className={styles.sidebarWidget}>
                <h4 className={styles.widgetTitle}>Related News</h4>
                <div className={styles.relatedList}>
                   {relatedNews.map(item => (
                     <Link href={`/news/${item.id}`} key={item.id} className={styles.relatedCard}>
                        <img src={item.image} alt={item.title} />
                        <div className={styles.relatedInfo}>
                           <h5>{item.title}</h5>
                           <span>{item.date}</span>
                        </div>
                     </Link>
                   ))}
                </div>
             </div>

             <div className={styles.ctaWidget}>
                <h4>Subscribe to our Newsletter</h4>
                <p>Get the latest company updates and industry insights delivered to your inbox.</p>
                <input type="email" placeholder="Email Address" className={styles.ctaInput} />
                <button className="btn btn-primary w-full mt-4">Subscribe</button>
             </div>
          </aside>

        </div>
      </div>
    </article>
  );
}
