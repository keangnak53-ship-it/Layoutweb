import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, HardHat, FileText, Anchor, 
  CheckCircle2, ShieldCheck, Clock, Award,
  ArrowRight, Phone
} from 'lucide-react';
import HeroCarousel from '@/components/ui/HeroCarousel';
import styles from '../page.module.css';

export default function Home2() {
  return (
    <>
      <HeroCarousel />

      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h3>25+</h3>
              <p>Years in Operation</p>
            </div>
            <div className={styles.statItem}>
              <h3>150+</h3>
              <p>Completed Projects</p>
            </div>
            <div className={styles.statItem}>
              <h3>18</h3>
              <p>Provinces Covered</p>
            </div>
            <div className={styles.statItem}>
              <h3>50+</h3>
              <p>Gov & Private Clients</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.aboutPreview}>
             <span className="section-subtitle">Who We Are</span>
             <h2 className="section-title">About KIM MEX</h2>
             <p className={styles.aboutText}>
               Established in 2000, KIM MEX is a premier construction and engineering firm in Cambodia. 
               We specialize in delivering complex projects with a focus on quality, safety, and sustainable development.
               Our portfolio spans across major government infrastructure and high-end private developments.
             </p>
             <Link href="/about" className="btn btn-navy">Read Full Story</Link>
          </div>

          <div className={styles.whyChooseSection}>
             <div className="text-center">
               <span className="section-subtitle">Our Advantage</span>
               <h2 className="section-title" style={{fontSize: '2rem'}}>Why Choose KIM MEX?</h2>
             </div>
             
             <div className={styles.featuresGrid}>
                <div className={styles.featureCard}>
                   <Clock size={32} className={styles.featureIcon} />
                   <div>
                     <h3 className="font-bold mb-2">Decades of Experience</h3>
                     <p className="text-gray-600 text-sm">Operating successfully since 2000 with a proven track record.</p>
                   </div>
                </div>
                <div className={styles.featureCard}>
                   <CheckCircle2 size={32} className={styles.featureIcon} />
                   <div>
                     <h3 className="font-bold mb-2">Fully Registered & Eligible</h3>
                     <p className="text-gray-600 text-sm">One of the few firms fully certified to bid on major government projects.</p>
                   </div>
                </div>
                <div className={styles.featureCard}>
                   <Award size={32} className={styles.featureIcon} />
                   <div>
                     <h3 className="font-bold mb-2">Strong Government Portfolio</h3>
                     <p className="text-gray-600 text-sm">Trusted partner for Ministry buildings and public infrastructure.</p>
                   </div>
                </div>
                <div className={styles.featureCard}>
                   <ShieldCheck size={32} className={styles.featureIcon} />
                   <div>
                     <h3 className="font-bold mb-2">Quality & Safety First</h3>
                     <p className="text-gray-600 text-sm">We strictly adhere to ISO safety standards and on-time delivery protocols.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className="container">
          <div className="text-center">
             <span className="section-subtitle">How We Work</span>
             <h2 className="section-title">Our Working Process</h2>
          </div>

          <div className={styles.processGrid}>
             <div className={styles.stepCard}>
               <div className={styles.stepNumber}>1</div>
               <h3 className="font-bold mb-2">Consultation</h3>
               <p className="text-gray-500 text-sm">Understanding your vision and requirements.</p>
             </div>
             <div className={styles.stepCard}>
               <div className={styles.stepNumber}>2</div>
               <h3 className="font-bold mb-2">Design & Plan</h3>
               <p className="text-gray-500 text-sm">Architectural drawings and feasibility studies.</p>
             </div>
             <div className={styles.stepCard}>
               <div className={styles.stepNumber}>3</div>
               <h3 className="font-bold mb-2">Construction</h3>
               <p className="text-gray-500 text-sm">Execution with strict safety and quality control.</p>
             </div>
             <div className={styles.stepCard}>
               <div className={styles.stepNumber}>4</div>
               <h3 className="font-bold mb-2">Handover</h3>
               <p className="text-gray-500 text-sm">Final inspection and project delivery.</p>
             </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.servicesSection}`}>
        <div className="container">
          <div className="text-center">
            <span className="section-subtitle">What We Offer</span>
            <h2 className="section-title">Core Services</h2>
          </div>
          
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}><Building2 size={28} /></div>
              <h3>Design & Build</h3>
              <p>Complete turnkey solutions taking your project from concept to reality.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}><HardHat size={28} /></div>
              <h3>Building Renovation</h3>
              <p>Modernizing existing structures with improved aesthetics and functionality.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}><FileText size={28} /></div>
              <h3>Project Management</h3>
              <p>Overseeing construction timelines, budgets, and resource allocation.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}><Anchor size={28} /></div>
              <h3>Consultants</h3>
              <p>Expert technical advice and feasibility studies for complex engineering needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className="mb-10">
             <div>
                <span className="section-subtitle">Portfolio</span>
                <h2 className="section-title">Featured Projects</h2>
             </div>
          </div>
          
          <div className={styles.projectsGrid}>
             <div className={styles.projectCard}>
                <Image 
                  src="/images/Thumbnail-1.jpg" 
                  alt="Ministry Office Complex" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={styles.projectOverlay}>
                   <h3>Ministry Office Complex</h3>
                   <div className="mb-2 text-[#ED1C24] font-semibold text-sm">Phnom Penh • Government</div>
                   <p className={styles.projectDesc}>
                     A state-of-the-art administrative complex built for the Ministry of Commerce.
                   </p>
                   <Link href="/done-projects" className={styles.viewProjectBtn}>View Project</Link>
                </div>
             </div>
             <div className={styles.projectCard}>
                <Image 
                  src="/images/Thumbnail-5.jpg" 
                  alt="BVM Water Treatment" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={styles.projectOverlay}>
                   <h3>BVM Water Treatment</h3>
                   <div className="mb-2 text-[#ED1C24] font-semibold text-sm">Siem Reap • Infrastructure</div>
                    <p className={styles.projectDesc}>
                     Large-scale water purification plant serving the greater region.
                   </p>
                   <Link href="/done-projects" className={styles.viewProjectBtn}>View Project</Link>
                </div>
             </div>
             <div className={styles.projectCard}>
                <Image 
                  src="/images/Thumbnail-3.jpg" 
                  alt="Private Villa Estate" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={styles.projectOverlay}>
                   <h3>Private Villa Estate</h3>
                   <div className="mb-2 text-[#ED1C24] font-semibold text-sm">Kandal • Residential</div>
                    <p className={styles.projectDesc}>
                     Luxury private residence featuring modern architectural design.
                   </p>
                   <Link href="/done-projects" className={styles.viewProjectBtn}>View Project</Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.newsSection}`}>
        <div className="container">
          <div className="text-center">
             <span className="section-subtitle">Updates</span>
             <h2 className="section-title">Latest News</h2>
          </div>

          <div className={styles.newsGrid}>
             <div className={styles.newsCard}>
               <div className="w-full h-48 relative">
                 <Image 
                   src="/images/Thumbnail-4.jpg" 
                   alt="News" 
                   fill
                   className="object-cover"
                   sizes="(max-width: 768px) 100vw, 33vw"
                 />
               </div>
               <div className={styles.newsDate}>Oct 15, 2025</div>
               <div className={styles.newsContent}>
                 <h3 className={styles.newsTitle}>Kim Mex Wins Best Commercial Project Award</h3>
                 <Link href="/news" className="text-sm font-semibold hover:text-[#ED1C24] transition">Read More &rarr;</Link>
               </div>
             </div>
             <div className={styles.newsCard}>
               <div className="w-full h-48 relative">
                 <Image 
                   src="/images/Thumbnail-2.jpg" 
                   alt="News" 
                   fill
                   className="object-cover"
                   sizes="(max-width: 768px) 100vw, 33vw"
                 />
               </div>
               <div className={styles.newsDate}>Sep 02, 2025</div>
               <div className={styles.newsContent}>
                 <h3 className={styles.newsTitle}>Groundbreaking Ceremony for New Water Plant</h3>
                 <Link href="/news" className="text-sm font-semibold hover:text-[#ED1C24] transition">Read More &rarr;</Link>
               </div>
             </div>
             <div className={styles.newsCard}>
               <div className="w-full h-48 relative">
                 <Image 
                   src="/images/Thumbnail-7.jpg" 
                   alt="News" 
                   fill
                   className="object-cover"
                   sizes="(max-width: 768px) 100vw, 33vw"
                 />
               </div>
               <div className={styles.newsDate}>Aug 10, 2025</div>
               <div className={styles.newsContent}>
                 <h3 className={styles.newsTitle}>Safety Milestone: 1 Million Man-Hours</h3>
                 <Link href="/news" className="text-sm font-semibold hover:text-[#ED1C24] transition">Read More &rarr;</Link>
               </div>
             </div>
          </div>
        </div>
      </section>

      <section className={styles.clientsSection}>
        <div className="container">
          <div className="text-center mb-10">
             <span className="section-subtitle">Our Partners</span>
             <h2 className="section-title">Our Clients</h2>
          </div>
          <div className={styles.clientsGrid}>
             <div className={styles.clientLogo} style={{position: 'relative'}}>
               <Image src="/assets/ACU.png" alt="ACU" fill className="object-contain p-4" sizes="140px" />
             </div>
             <div className={styles.clientLogo} style={{position: 'relative'}}>
               <Image src="/assets/EDC.png" alt="EDC" fill className="object-contain p-4" sizes="140px" />
             </div>
             <div className={styles.clientLogo} style={{position: 'relative'}}>
               <Image src="/assets/GCDE.png" alt="GCDE" fill className="object-contain p-4" sizes="140px" />
             </div>
             <div className={styles.clientLogo} style={{position: 'relative'}}>
               <Image src="/assets/MEF.png" alt="MEF" fill className="object-contain p-4" sizes="140px" />
             </div>
             <div className={styles.clientLogo} style={{position: 'relative'}}>
               <Image src="/assets/MOI.png" alt="MOI" fill className="object-contain p-4" sizes="140px" />
             </div>
             <div className={styles.clientLogo} style={{position: 'relative'}}>
               <Image src="/assets/NCE.jpg" alt="NCE" fill className="object-contain p-4" sizes="140px" />
             </div>
             <div className={styles.clientLogo} style={{position: 'relative'}}>
               <Image src="/assets/NSSF.png" alt="NSSF" fill className="object-contain p-4" sizes="140px" />
             </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
         <div className="container">
            <h2 className={styles.ctaTitle}>Ready to build your next landmark?</h2>
            <p className={styles.ctaText}>
              Leverage 25 years of construction excellence. Contact our technical team today for a consultation.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact" className="btn btn-primary" style={{padding: '15px 40px'}}>Start Your Project</Link>
              <Link href="tel:+85512345678" className="btn btn-outline" style={{padding: '15px 40px', display: 'flex', gap: '10px', alignItems: 'center'}}>
                <Phone size={20} /> Call Now
              </Link>
            </div>
         </div>
      </section>
    </>
  );
}
