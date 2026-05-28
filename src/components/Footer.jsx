import './Footer.css';

const contactItems = [
  { icon: '📍', label: 'Website', value: 'junior-school.com' },
  { icon: '✉️', label: 'Email', value: 'admin@junior-school.com' },
  { icon: '📞', label: 'Kamwokya', value: '0414 532567' },
  { icon: '📞', label: 'Kyebando', value: '0414 531393' },
  { icon: '📞', label: 'Gayaza', value: '0393 513540' },
];

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'School Info', href: '#about' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Co-curricular', href: '#curriculum' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Admin Log In', href: '#login' },
];

const socialProfiles = [
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M17.5 7.5c-.4 0-.8-.1-1.1-.2v6.4a4.6 4.6 0 0 1-4.6 4.6 4.6 4.6 0 1 1 4.6-4.6V7.5z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M23 7a3 3 0 0 0-2.1-2.9C18.8 3.6 12 3.6 12 3.6s-6.8 0-8.9.5A3 3 0 0 0 1 7v10a3 3 0 0 0 2.1 2.9c2.1.5 8.9.5 8.9.5s6.8 0 8.9-.5A3 3 0 0 0 23 17V7zM10 15V9l5 3-5 3z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.5 3.3-3.5.95 0 1.95.17 1.95.17v2.1h-1.07c-1.05 0-1.38.66-1.38 1.34V12h2.35l-.37 2.9h-1.98v7A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M22 5.92c-.63.28-1.3.47-2 .56.72-.43 1.28-1.12 1.54-1.94-.68.4-1.43.68-2.22.84A3.6 3.6 0 0 0 12.5 8.5c0 .28.03.56.09.83-3-.15-5.7-1.6-7.5-3.8-.32.55-.5 1.2-.5 1.9 0 1.3.66 2.4 1.66 3.06-.6-.02-1.17-.19-1.66-.46v.05c0 1.86 1.32 3.42 3.07 3.78-.32.09-.65.14-.99.14-.24 0-.48-.02-.71-.06.48 1.5 1.88 2.6 3.53 2.64A7.22 7.22 0 0 1 3 19.54 10.18 10.18 0 0 0 8.75 21c6.29 0 9.73-5.2 9.73-9.72v-.44c.67-.49 1.25-1.1 1.71-1.8-.62.28-1.28.47-1.96.55z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col contact-col">
            <h3 className="footer-title">Have a Questions?</h3>
            <div className="contact-details">
              {contactItems.map((item) => (
                <div key={item.label} className="contact-item">
                  <span className="contact-icon">{item.icon}</span>
                  <div>
                    <p className="contact-text">{item.value}</p>
                    <span className="contact-label">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-col video-col">
            <h3 className="footer-title">Junior Channel</h3>
            <p className="video-desc">Watch our students during the national Music, Dance & Drama festivals:</p>
            <div className="youtube-mockup">
              <div className="mock-thumbnail" style={{ backgroundImage: "url('/hero2.png')" }}>
                <div className="play-button-overlay">
                  <div className="play-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <span className="duration-tag">04:22</span>
              </div>
              <div className="mock-details">
                <h4 className="video-title">MDD Festivals 2026 - Junior Primary Performance</h4>
                <p className="video-views">1,240 views • 2 weeks ago</p>
              </div>
            </div>
          </div>

          <div className="footer-col links-col">
            <h3 className="footer-title">Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
            <div className="connect-block">
              <h4 className="connect-title">Connect With Us</h4>
              <div className="social-icons">
                {socialProfiles.map((profile) => (
                  <a key={profile.label} href={profile.href} className="social-icon" aria-label={profile.label}>
                    {profile.svg}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} Junior School. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="footer-sep">•</span>
            <a href="#terms">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
