import { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Sending my children to Junior School was the best decision for our family. The academic excellence combined with strong moral and religious instruction has shaped them into outstanding pupils.",
    author: "Mrs. Florence Namakula",
    role: "Junior School Parent",
    avatarColor: "#1ea5fc",
  },
  {
    quote: "The teachers here are exceptional. My son struggled with mathematics and reading initially, but the customized tutoring and patience of his teachers completely turned his results around.",
    author: "Mr. David Semwanga",
    role: "Junior School Parent",
    avatarColor: "#7cb342",
  },
  {
    quote: "I am extremely impressed by the co-curricular curriculum. My daughters are active in the swimming club and music lessons. They enjoy their stay at Kyebando and look forward to going every day.",
    author: "Dr. Sarah Nabakooza",
    role: "Junior School Parent",
    avatarColor: "#ef473a",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const triggerChange = (nextIndex) => {
    setFadeState('fade-out');
    setTimeout(() => {
      setCurrent(nextIndex);
      setFadeState('fade-in');
    }, 300);
  };

  const handleNext = () => {
    const nextIdx = (current + 1) % testimonials.length;
    triggerChange(nextIdx);
  };

  const handlePrev = () => {
    const nextIdx = (current - 1 + testimonials.length) % testimonials.length;
    triggerChange(nextIdx);
  };

  const activeTestimonial = testimonials[current];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="test-container">
        <div className="test-header">
          <span className="test-badge">Parent Feedback</span>
          <h2 className="test-title">What Parents <span>Say</span> About Us</h2>
        </div>

        <div className="test-slider-wrapper">
          {/* Left Arrow */}
          <button className="test-arrow test-arrow--prev" onClick={handlePrev} aria-label="Previous testimonial">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
          </button>

          {/* Testimonial Box */}
          <div className={`testimonial-card-outer ${fadeState}`}>
            <div className="testimonial-card">
              <div className="quote-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="testimonial-quote">"{activeTestimonial.quote}"</p>
              
              <div className="testimonial-profile">
                <div className="profile-avatar" style={{ backgroundColor: activeTestimonial.avatarColor }}>
                  {activeTestimonial.author.charAt(0)}
                </div>
                <div className="profile-info">
                  <h4 className="profile-name">{activeTestimonial.author}</h4>
                  <span className="profile-role">{activeTestimonial.role}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button className="test-arrow test-arrow--next" onClick={handleNext} aria-label="Next testimonial">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>

        {/* Dots indicators */}
        <div className="test-dots">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`test-dot ${idx === current ? 'test-dot--active' : ''}`}
              onClick={() => triggerChange(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
