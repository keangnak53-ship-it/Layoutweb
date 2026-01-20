'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './PageHero.module.css';

interface PageHeroProps {
  title: string;
  subtitle: string;
  bgImage?: string;
  breadcrumbTitle?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  subtitle, 
  bgImage = 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  breadcrumbTitle 
}) => {
  const pathname = usePathname();
  const isHome2 = pathname?.startsWith('/home2');
  const basePath = isHome2 ? '/home2' : '';

  return (
    <section className={styles.pageHero}>
      {/* Background Image with Zoom Animation Class */}
      <div 
        className={styles.bgImage} 
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className={styles.overlay}></div>
      
      <div className={`container ${styles.content}`}>
        <div className={styles.textWrapper}>
          <span className={styles.subtitle}>{subtitle}</span>
          <h1 className={styles.title}>{title}</h1>
          
          <div className={styles.breadcrumb}>
             <Link href={basePath || "/"}>Home</Link> / <span>{breadcrumbTitle || title}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
