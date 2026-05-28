import './AimsValues.css';

const aimsList = [
  'They have the core skills and knowledge necessary to access secondary education successfully.',
  'That children develop an understanding of what learning means and how they can learn things for themselves, so that they will be equipped for lifelong learning.',
  'Their families are engaged in the learning process and are involved in community learning opportunities.',
  'That the children experience a broad curriculum.',
  'That learning is high quality, and lessons are fun, with teachers making the best use of recent research to help them plan and deliver the best learning opportunities.',
];

const values = [
  {
    label: 'Aiming high',
    desc: 'There is no ceiling on what can be achieved',
  },
  {
    label: 'Doing our best',
    desc: 'There are no excuses for not doing your best',
  },
  {
    label: 'Caring for each other',
    desc: 'We are honest and care about each other',
  },
];

export default function AimsValues() {
  return (
    <section className="aims-values" id="aims">
      <div className="av-container">
        <header className="av-section-header">
          <h2 className="av-main-title">Our <span className="av-highlight">Aims and Values</span></h2>
          <p className="av-intro">We aim to give our children the very best life opportunity through ensuring:</p>
        </header>

        <div className="av-grid">
          <div className="av-left">
            <ul className="av-aims-list">
              {aimsList.map((aim, i) => (
                <li key={i} className="av-aim-item">
                  <span className="av-bullet" aria-hidden>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <p className="av-aim-text">{aim}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="av-right values-column">
            <h3 className="values-title">Junior School Values</h3>
            <p className="values-lead">We expect children, staff, parents and the learning community to share our values which are:</p>
            <ol className="values-list">
              {values.map((v, idx) => (
                <li key={idx} className="values-item">
                  <strong className="values-label">{idx + 1}. {v.label}:</strong>
                  <span className="values-desc"> {v.desc}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
