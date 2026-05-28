import './WelcomeFacilities.css';

const facilities = [
  {
    title: 'Modern Library',
    desc: 'Encouraging curiosity, independent research, and a lifelong love for reading in students.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: 'School Transport',
    desc: 'A safe, monitored, and highly reliable bus fleet covering major routes for all students.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="22" height="13" rx="2" ry="2" />
        <line x1="4" y1="9" x2="20" y2="9" />
        <line x1="4" y1="13" x2="20" y2="13" />
        <circle cx="7" cy="21" r="2" />
        <circle cx="17" cy="21" r="2" />
      </svg>
    ),
  },
  {
    title: 'Swimming Pool',
    desc: 'Professional coaches guiding children in a clean, state-of-the-art aquatic training facility.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 6c.6.5 1.2 1 2.5 1C5.8 7 7 6 8.5 6s2.7 1 4 1 2.7-1 4-1 2.7 1 4 1c1.3 0 2-.5 2.5-1" />
        <path d="M2 12c.6.5 1.2 1 2.5 1 1.3 0 2.5-1 4-1s2.7 1 4 1 2.7-1 4-1 2.7 1 4 1c1.3 0 2-.5 2.5-1" />
        <path d="M2 18c.6.5 1.2 1 2.5 1 1.3 0 2.5-1 4-1s2.7 1 4 1 2.7-1 4-1 2.7 1 4 1c1.3 0 2-.5 2.5-1" />
      </svg>
    ),
  },
  {
    title: 'Medical Clinic',
    desc: 'Fully-equipped school clinic staffed with certified pediatric nurses for emergency care.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: 'Creative Arts & Music',
    desc: 'Inspiring talent through expert-led dance, theatrical play, and musical instrument lessons.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    title: 'Sports Fields',
    desc: 'Spacious running tracks, football fields, and courts for developing physical teamwork.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
        <path d="M12 6a6 6 0 0 1 6 6M12 18a6 6 0 0 1-6-6" />
      </svg>
    ),
  },
];

export default function WelcomeFacilities() {
  return (
    <section className="welcome-facilities" id="about">
      <div className="wf-container">
        <div className="wf-grid">
          {/* Left Column: Facilities */}
          <div className="wf-left">
            <span className="wf-section-badge">Our Campus Assets</span>
            <h2 className="wf-title">School Facilities</h2>
            
            <div className="facilities-grid">
              {facilities.map((fac, idx) => (
                <div key={idx} className="facility-card">
                  <div className="facility-icon">
                    {fac.icon}
                  </div>
                  <div className="facility-content">
                    <h4 className="facility-title">{fac.title}</h4>
                    <p className="facility-text">{fac.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="wf-left-actions">
              <a href="#admissions" className="wf-btn wf-btn--primary">
                View Important Documents
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </a>
              <p className="wf-docs-note">
                Download admission forms, school calendar, and parent guide documents crafted for easy access.
              </p>
            </div>
          </div>

          {/* Right Column: Welcome Message */}
          <div className="wf-right">
            <div className="wf-right-card">
              <div className="wf-badge-row">
                <span className="wf-founded-badge">FOUNDED IN 2005</span>
              </div>
              <h2 className="wf-welcome-title">
                Welcome to <br />
                <span className="text-highlight">Junior School</span>
              </h2>
              <p className="wf-lead">
                Nurturing academic progress, creative expression, and strong moral grounding for early childhood and primary education.
              </p>
              <div className="wf-divider"></div>
              <p className="wf-paragraph">
                Junior Schools began as a private learning center committed to bridging the gap in quality primary school education. Over the years, our unwavering standards have driven massive growth, leading to the creation of four distinct, world-class campuses.
              </p>
              <p className="wf-paragraph">
                With branches junior school we serve thousands of families. We maintain a unified curriculum that stresses academic excellence, sportsmanship, scouting, arts, and strong values.
              </p>
              <p className="wf-paragraph">
                We believe every child possesses unique potential. Through highly individual instruction, state-of-the-art facilities, and experienced teachers, we foster the resilience and curiosity necessary to build global leaders.
              </p>
              <div className="wf-right-actions">
                <a href="#history" className="wf-btn wf-btn--accent">
                  Read Our Full Story
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
