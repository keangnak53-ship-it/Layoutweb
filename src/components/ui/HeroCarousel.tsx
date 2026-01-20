'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './HeroCarousel.module.css';

export interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  desc: string;
  primaryBtn: string;
  primaryLink: string;
  secondaryBtn: string;
  secondaryLink: string;
}

const defaultSlides: Slide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Design & Build',
    subtitle: 'For Cambodia',
    desc: 'We build the future with precision, quality, and integrity. From government infrastructures to premium private developments.',
    primaryBtn: 'View Projects',
    primaryLink: '/done-projects',
    secondaryBtn: 'Contact Us',
    secondaryLink: '/contact'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Sustainable',
    subtitle: 'Infrastructure',
    desc: 'Engineering solutions that stand the test of time. We are committed to building safe and sustainable communities.',
    primaryBtn: 'Our Services',
    primaryLink: '/services',
    secondaryBtn: 'About Us',
    secondaryLink: '/about'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Premium',
    subtitle: 'Developments',
    desc: 'Transforming landscapes with modern architectural designs and world-class construction standards.',
    primaryBtn: 'View Portfolio',
    primaryLink: '/done-projects',
    secondaryBtn: 'Contact Us',
    secondaryLink: '/contact'
  }
];

const HeroCarousel = ({ slides = defaultSlides }: { slides?: Slide[] }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000); // Auto-advance every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`${styles.slide} ${index === current ? styles.activeSlide : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={styles.content}>
            <h1 className={styles.title}>
              {slide.title} <br />
              <span className={styles.highlight}>{slide.subtitle}</span>
            </h1>
            <p className={styles.description}>
              {slide.desc}
            </p>
            <div className={styles.buttonGroup}>
              <Link href={slide.primaryLink} className="btn btn-primary">
                {slide.primaryBtn}
              </Link>
              <Link href={slide.secondaryLink} className="btn btn-outline">
                {slide.secondaryBtn}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button className={`${styles.navButton} ${styles.prevBtn}`} onClick={prevSlide}>
        <ChevronLeft size={24} />
      </button>
      <button className={`${styles.navButton} ${styles.nextBtn}`} onClick={nextSlide}>
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <div 
            key={index}
            className={`${styles.dot} ${index === current ? styles.activeDot : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
