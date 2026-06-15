import React, { useState } from 'react';
import './Footer.css';

const NAV_LINKS = [
  { id: 'home',      label: 'Home'     },
  { id: 'services',  label: 'Services' },
  { id: 'academy',   label: 'Academy'  },
  { id: 'portfolio', label: 'Portfolio'},
  { id: 'about',     label: 'About Us' },
  { id: 'contact',   label: 'Contact'  },
];

const SOCIALS = ['Instagram', 'LinkedIn', 'Twitter / X', 'Facebook'];

export default function Footer({ setCurrentPage }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [hovered, setHovered] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer-new">
      <div className="footer-inner-new">

        {/* Top grid: brand | links | newsletter */}
        <div className="grid-new-3 footer-top-grid">

          {/* Brand column */}
          <div>
            <div className="footer-logo-text">
              Digitech <span className="logo-dot" />
            </div>
            <p className="footer-text footer-brand-desc">
              An integrated self-sustaining tech ecosystem blending premium engineering services with live,
              mentored talent development pipelines for Kenya and the African Community.
            </p>
            <p className="footer-text footer-email">info@digitech.co.ke</p>
            <p className="footer-text">+254 700 875 540</p>
            <p className="footer-text footer-location">Digitech Digital Agency, Malindi, Kenya</p>

            <div className="footer-socials">
              {SOCIALS.map((s) => (
                <span
                  key={s}
                  className={`footer-social-link ${hovered === s ? 'hovered' : ''}`}
                  id={`footer-social-${s.toLowerCase().replace(/\s|\/|_/g, '-')}`}
                  onMouseEnter={() => setHovered(s)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="footer-links-grid">
            <div>
              <h4 className="footer-col-title-new">Directory</h4>
              <ul className="footer-links">
                {NAV_LINKS.slice(0, 3).map((link) => (
                  <li key={link.id} onClick={() => setCurrentPage(link.id)} id={`footer-nav-${link.id}`}>
                    {link.label}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="footer-col-title-new">Resources</h4>
              <ul className="footer-links">
                {NAV_LINKS.slice(3).map((link) => (
                  <li key={link.id} onClick={() => setCurrentPage(link.id)} id={`footer-nav-${link.id}-2`}>
                    {link.label}
                  </li>
                ))}
                <li className="disabled">Privacy Policy</li>
                <li className="disabled">Terms of Service</li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="footer-col-title-new">Stay Updated</h4>
            <p className="footer-text footer-newsletter-desc">
              Subscribe for strategic updates, product drops, and lab cohort announcements.
            </p>

            {subscribed ? (
              <div className="footer-subscribed-box">
                <p className="handwritten footer-subscribed-title">
                  Handshake verified! ✦<br />
                  <span className="footer-subscribed-sub">
                    Check your inbox soon.
                  </span>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="footer-subscribe-box-new">
                <input
                  type="email"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="footer-subscribe-input-new"
                  required
                  id="footer-newsletter-input"
                />
                <button
                  type="submit"
                  className="clay-btn clay-btn-violet footer-subscribe-btn"
                  id="footer-newsletter-btn"
                >
                  Subscribe
                </button>
              </form>
            )}

            <div className="footer-working-hours">
              <h4 className="footer-col-title-new footer-hours-title">Working Hours</h4>
              <p className="footer-text footer-hours-text">Mon – Fri: 8:00 AM – 5:00 PM</p>
              <p className="footer-text footer-hours-text">1447 - 80200, Malindi, Kenya</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© 2026 Digitech Digital Agency. All Rights Reserved.</span>
          <div className="footer-made-in">
            <span className="logo-dot footer-made-in-dot" />
            {/* <span>Engineered in Malindi, Kenya</span> */}
          </div>
          <span>Absolute System Copyright Security</span>
        </div>
      </div>
    </footer>
  );
}
