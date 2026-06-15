import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'home',      label: 'Home'           },
  { id: 'services',  label: 'Services'       },
  { id: 'academy',   label: 'Academy'        },
  // { id: 'portfolio', label: 'Portfolio'      },
  { id: 'about',     label: 'About'          },
  { id: 'contact',   label: 'Contact'        },
];

export default function Navbar({ currentPage, setCurrentPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);

  /* Add subtle shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (pageId) => {
    setCurrentPage(pageId);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`pill-navbar ${scrolled ? 'scrolled' : ''}`}
      id="main-nav"
    >
      {/* Logo */}
      <div className="navbar-logo-new" onClick={() => handleNav('home')} id="nav-logo">
        Digitech <span className="logo-dot" />
      </div>

      {/* Desktop links */}
      <div className="nav-links-new" id="nav-links-desktop">
        {NAV_LINKS.map((link) => (
          <span
            key={link.id}
            id={`nav-${link.id}`}
            className={`nav-link-new ${currentPage === link.id ? 'active' : ''}`}
            onClick={() => handleNav(link.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNav(link.id)}
          >
            {link.label}
          </span>
        ))}
      </div>

      {/* CTA button (desktop) */}
      <button
        className="clay-btn clay-btn-orange nav-cta-desktop"
        onClick={() => handleNav('contact')}
        id="nav-cta-btn"
      >
        Start a Project
      </button>

      {/* Hamburger (mobile) */}
      <button
        className="navbar-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileOpen}
        id="nav-mobile-toggle"
      >
        <span className="material-symbols-outlined">
          {mobileOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="nav-links-new mobile-open" id="nav-links-mobile">
          {NAV_LINKS.map((link) => (
            <span
              key={link.id}
              id={`nav-mobile-${link.id}`}
              className={`nav-link-new ${currentPage === link.id ? 'active' : ''}`}
              onClick={() => handleNav(link.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleNav(link.id)}
            >
              {link.label}
            </span>
          ))}
          <button
            className="clay-btn clay-btn-orange nav-cta-mobile"
            onClick={() => handleNav('contact')}
            id="nav-mobile-cta"
          >
            Start a Project
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      )}
    </nav>
  );
}
