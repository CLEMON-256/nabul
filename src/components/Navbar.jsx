import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--sticky' : ''}`}>
      {/* Top bar removed — navbar simplified to main navigation only */}

      {/* Main Navigation */}
      <div className="navbar__main">
        <div className="navbar__container">
          <div className="navbar__logo">
            <img src="/logo.png" alt="School Logo" className="navbar__logo-img" />
            <div className="navbar__brand">
              <span className="navbar__brand-name">JUNIOR SCHOOL</span>
              <span className="navbar__brand-tag">Nurturing Minds, Shaping Futures</span>
            </div>
          </div>

          <nav className="navbar__nav">
            <ul className="navbar__list">
              <li><a href="#home" className="navbar__link navbar__link--active">Home</a></li>
              <li><a href="#about" className="navbar__link">About</a></li>
              <li><a href="#academics" className="navbar__link">Academics</a></li>
              <li><a href="#admissions" className="navbar__link">Admissions</a></li>
              <li><a href="#news" className="navbar__link">News</a></li>
              <li><a href="#contact" className="navbar__link">Contact</a></li>
            </ul>
            <a href="#apply" className="navbar__cta">Apply Now</a>
          </nav>
        </div>
      </div>
    </header>
  );
}