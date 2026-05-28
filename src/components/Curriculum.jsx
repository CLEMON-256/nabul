import './Curriculum.css';

const curriculumPillars = [
  {
    title: 'Pre-School & Nursery (Ages 3–5)',
    desc: 'Focusing on language development, fine motor skills, sensory games, and fundamental social integration in a loving space.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: 'Primary Curriculum (P1–P7)',
    desc: 'Rigorous training in numeracy, literacy, social studies, agricultural sciences, and preparatory PLE standards.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
  },
  {
    title: 'ICT & Creative Projects',
    desc: 'Interactive computer literacy, programming foundation logic, and visual arts projects that prepare digital natives.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

export default function Curriculum() {
  return (
    <section className="curriculum-section" id="curriculum">
      <div className="curr-container">
        <header className="curr-section-header">
          <h2 className="curr-main-title">School <span className="curr-highlight">Curriculum</span></h2>
        </header>

        <div className="curr-grid">
          {/* Left Column: Visual classroom image */}
          <div className="curr-left">
            <div className="image-wrapper">
              <img
                src="/classroom_activity.png"
                alt="Children participating in modern classroom learning activity"
                className="classroom-image"
              />
              <div className="experience-badge">
                <span className="exp-num">PLE</span>
                <span className="exp-text">98% First Grade Pass Rate</span>
              </div>
              <div className="deco-dot dot-1" />
              <div className="deco-dot dot-2" />
            </div>
          </div>

          {/* Right Column: Text content */}
          <div className="curr-right">
            <p className="curr-intro">
              Junior School follows the Uganda National Curriculum with the core subjects; English, Mathematics, Science and Social Studies. This curriculum is enriched with junior literature classes, etiquette lessons and moral education. The school runs a wide co-curricular program that has a variety of games, sports and clubs, these include; Scouts & Guides, Debating, Writers, Swimming, Music dance & drama and a football academy.
            </p>

            <div className="curr-pillars">
              {curriculumPillars.map((pillar, idx) => (
                <div key={idx} className="curr-pillar-row">
                  <div className="curr-pillar-icon-box">
                    {pillar.icon}
                  </div>
                  <div className="curr-pillar-details">
                    <h4 className="curr-pillar-title">{pillar.title}</h4>
                    <p className="curr-pillar-desc">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="curr-actions">
              <a href="#admissions" className="curr-btn-primary">
                Download School Syllabus
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>

            <div className="curr-subsection">
              <h3 className="curr-subsection-title">PRE-PRIMARY SECTION</h3>
              <p className="curr-subsection-text">With Nursery section pupils are taught; Math Concepts, General Knowledge, Handwriting, Drawing , Singing, confidence, Independency, Motor control, co-operation, English Writing & English Reading which continue up to Primary two. We highly value the playtime for this age group as a means to build strong social interaction bonds.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
