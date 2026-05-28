import './AdmissionCTA.css';

export default function AdmissionCTA() {
  return (
    <section className="admission-cta">
      {/* Visual background wrapper */}
      <div className="cta-background" />
      <div className="cta-overlay" />
      
      <div className="cta-container">
        <div className="cta-content-wrapper">
          <div className="cta-text-side">
            <span className="cta-badge">Enrollment Open</span>
            <h2 className="cta-heading">Teaching Your Child in a cool environment</h2>
            <p className="cta-subheading">
              Our classrooms are designed with natural ventilation, child-friendly layouts, and modern pedagogical materials. We provide a space where intellectual capability matches moral growth.
            </p>
          </div>
          <div className="cta-button-side">
            <a href="#apply" className="cta-button">
              Get Admission Now
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
