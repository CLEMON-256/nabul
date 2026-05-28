import { useState, useEffect, useCallback } from 'react';
import './Hero.css';

const slides = [
  {
    image: '/hero1.png',
    badge: 'Inspiring Early Excellence',
    title: 'Nurturing Minds,\nShaping Futures',
    subtitle:
      'Dedicated to fostering intellectual curiosity and character strength through a balanced and rigorous academic framework.',
    cta: { label: 'Explore Our School', href: '#about' },
    cta2: { label: 'Apply for Admission', href: '#admissions' },
  },
  {
    image: '/hero2.png',
    badge: 'Academic Distinction',
    title: 'Excellence in\nEvery Classroom',
    subtitle:
      'Our distinguished faculty and state-of-the-art facilities provide an immersive environment where students realize their full academic potential.',
    cta: { label: 'Our Academics', href: '#academics' },
    cta2: { label: 'Meet Our Teachers', href: '#staff' },
  },
  {
    image: '/hero3.png',
    badge: 'Holistic Development',
    title: 'Sports, Arts &\nCo-Curricular Life',
    subtitle:
      'Beyond the classroom, we cultivate versatile individuals through a robust program of competitive athletics, creative arts, and leadership initiatives.',
    cta: { label: 'Our Activities', href: '#activities' },
    cta2: { label: 'View Gallery', href: '#gallery' },
  },
  {
    image: '/hero4.png',
    badge: 'Global Perspectives',
    title: 'Producing Leaders\nof Tomorrow',
    subtitle:
      'Our graduates emerge as visionary leaders, prepared to navigate the complexities of higher education and contribute meaningfully to a global society.',
    cta: { label: 'Alumni Stories', href: '#alumni' },
    cta2: { label: 'Apply Now', href: '#admissions' },
  },
];

const SLIDE_DURATION = 5000;

// heroStats removed by request — stats area hidden

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  const goToSlide = useCallback((index) => {
    if (animating) return;
    setAnimating(true);
    setProgress(0);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 600);
  }, [animating]);

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % slides.length);
  }, [current, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length);
  }, [current, goToSlide]);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Progress bar
  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100));
    }, 50);
    return () => clearInterval(tick);
  }, [current]);

  const slide = slides[current];

  return (
    <section className="hero" id="home">
      {/* Background slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`hero__bg ${i === current ? 'hero__bg--active' : ''}`}
          style={{ backgroundImage: `url(${s.image})` }}
        />
      ))}

      {/* Dark overlay */}
      <div className="hero__overlay" />

      {/* Content */}
      <div className={`hero__content ${animating ? 'hero__content--exit' : 'hero__content--enter'}`}>
        <span className="hero__badge">{slide.badge}</span>
        <h1 className="hero__title">
          {slide.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < slide.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="hero__subtitle">{slide.subtitle}</p>
        <div className="hero__actions">
          <a href={slide.cta.href} className="hero__btn hero__btn--primary">
            {slide.cta.label}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href={slide.cta2.href} className="hero__btn hero__btn--outline">
            {slide.cta2.label}
          </a>
        </div>
        {/* stats removed */}
      </div>

      {/* Dot navigation */}
      <div className="hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrow controls */}
      <button className="hero__arrow hero__arrow--prev" onClick={prevSlide} aria-label="Previous slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button className="hero__arrow hero__arrow--next" onClick={nextSlide} aria-label="Next slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      {/* Progress bar */}
      <div className="hero__progress">
        <div className="hero__progress-bar" style={{ width: `${progress}%` }} />
      </div>

      {/* Slide counter */}
      <div className="hero__counter">
        <span className="hero__counter-current">{String(current + 1).padStart(2, '0')}</span>
        <span className="hero__counter-sep"> / </span>
        <span className="hero__counter-total">{String(slides.length).padStart(2, '0')}</span>
      </div>
    </section>
  );
}
