import './Features.css';

const featuresData = [
  {
    title: 'Certified Teachers',
    desc: 'Our well qualified teachers are eagerly ready to sharpen your child through tested teaching methods.',
    bgColor: '#1da1f2',
    iconColor: '#1da1f2',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Quality Education',
    desc: 'At Junior School, we have a reputation for quality education and that is assured for all the children at both campuses.',
    bgColor: '#87c449',
    iconColor: '#87c449',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: 'School Library',
    desc: 'The school library encourages curiosity, innovation and problem-solving. It is integral to the cultural and social life of the school.',
    bgColor: '#0b2f5a',
    iconColor: '#0b2f5a',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="16" y2="10" />
        <line x1="8" y1="14" x2="16" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Co-curricular Activities',
    desc: 'The school offers a wide range of outside class activities such as MDD, Scouting, Swimming among others that allow children to have a happy stay.',
    bgColor: '#e34d3a',
    iconColor: '#e34d3a',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <circle cx="19" cy="7" r="4" />
        <path d="M11 14l-3 4h6l-3-4z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{ backgroundColor: feature.bgColor, '--icon-color': feature.iconColor }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <div className="feature-card__content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
