import React from 'react';
import './About.css';
import { burstSparkles } from '../../components/CursorEffects/CursorEffects';

const pillars = [
  {
    title: 'Our Vision',
    desc: 'To establish a premier, self-sustaining digital studio that powers regional corporate transformation while launching competitive African technical talent into global technology markets.',
    icon: 'visibility',
    colorClass: 'orange',
    badgeVariant: 'badge-soft-orange',
  },
  {
    title: 'Our Mission',
    desc: 'To provide impeccable, payment-gateway-integrated software services while accelerating real-world technical skills through an intensive, production-driven workspace.',
    icon: 'rocket_launch',
    colorClass: 'violet',
    badgeVariant: 'badge-soft-violet',
  },
];

const values = [
  {
    name: 'Absolute Architectural Precision',
    desc: 'No cutting corners. We build fully documented, highly scalable, and production-ready systems from day one.',
    badge: 'badge-soft-orange',
    icon: 'architecture',
  },
  {
    name: 'Artistic Autonomy',
    desc: 'We reject sterile corporate design defaults. We craft bold visual statements with high-precision aesthetics that command attention.',
    badge: 'badge-soft-violet',
    icon: 'brush',
  },
  {
    name: 'Milestone-Driven Accountability',
    desc: 'Deliverables are lock-stepped with milestone visibility throughout the active workflow. Full transparency at every stage.',
    badge: 'badge-soft-mint',
    icon: 'track_changes',
  },
  {
    name: 'Economic Empowerment',
    desc: 'Creating regional value through local payment API solutions and direct high-value technical talent pipelines for East Africa.',
    badge: 'badge-soft-banana',
    icon: 'trending_up',
  },
];

const cycleSteps = [
  { icon: 'business_center', label: 'Commercial Projects', color: 'var(--orange)', bg: 'var(--orange-light)' },
  { icon: 'currency_exchange', label: 'Fund Lab Scholarships', color: 'var(--violet)', bg: 'var(--violet-light)' },
  { icon: 'school', label: 'Graduate Elite Talent', color: 'var(--mint)', bg: 'var(--mint-light)' },
  { icon: 'engineering', label: 'Join Agency Workforce', color: 'var(--banana)', bg: 'var(--banana-light)' },
];

export default function About({ setCurrentPage }) {
  const handleCTA = (e, page) => {
    burstSparkles(e.clientX, e.clientY);
    setTimeout(() => setCurrentPage(page), 300);
  };

  return (
    <div className="about-page">

      {/* ── HEADER ── */}
      <header className="page-header-new">
        <span className="page-label-new">THE INSTITUTIONAL NARRATIVE</span>
        <h1 className="page-title-new">
          Bridging the gap.{' '}
          <span className="marker-highlight">Elite execution.</span>
        </h1>
        <p className="page-subtitle-new">
          We didn't just build an agency — we built an ecosystem designed to produce excellence on both sides of the client–talent divide.
        </p>
      </header>

      {/* ── ORIGIN STORY ── */}
      <section className="section-new about-style-1">
        <div className="manifesto-card">
          <p className="manifesto-quote">
            "We recognized that the single most effective methodology for cultivating world-class technical talent was to base their training inside an active, operational production environment."
          </p>
          <p className="manifesto-body">
            Digitech Lab was founded to solve a critical industry bottleneck: the vast discrepancy separating
            academic theory from actual production readiness. Out of this foundational philosophy,{' '}
            <strong className="about-style-2">Digitech Digital Services</strong> was established — a
            premium, dual-purpose agency studio that delivers corporate-tier engineering and creative brand design,
            while directly funding our academic laboratory mission.
          </p>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="section-new about-style-3">
        <div className="page-header-new">
          <span className="page-label-new">STRATEGIC DIRECTION</span>
          <h2 className="page-title-new">Vision & <span>Mission</span></h2>
        </div>
        <div className="grid-new-2">
          {pillars.map((p, idx) => (
            <div key={idx} className={`clay-card ${idx === 0 ? 'clay-card-orange' : 'clay-card-violet'} stagger-child`}>
              <div className="clay-card-header">
                <div className={`clay-card-icon ${p.colorClass}`}>
                  <span className="material-symbols-outlined">{p.icon}</span>
                </div>
                <span className={`badge-soft ${p.badgeVariant}`}>{p.title}</span>
              </div>
              <p className="footer-text about-style-4">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── VALUES GRID ── */}
      <section className="section-new about-style-5">
        <div className="page-header-new">
          <span className="page-label-new">WHAT WE STAND FOR</span>
          <h2 className="page-title-new">Our Strategic <span>Values</span></h2>
        </div>
        <div className="grid-new-2">
          {values.map((v, idx) => (
            <div key={idx} className="clay-card stagger-child">
              <div className="clay-card-header">
                <div className="clay-card-icon orange">
                  <span className="material-symbols-outlined">{v.icon}</span>
                </div>
                <span className={`badge-soft ${v.badge}`}>Value {String(idx + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="about-style-6">{v.name}</h3>
              <p className="footer-text about-style-7">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE CYCLE ── */}
      <section className="section-new about-style-8">
        <div className="page-header-new">
          <span className="page-label-new">THE SELF-SUSTAINING LOOP</span>
          <h2 className="page-title-new">The Digitech <span>Cycle</span></h2>
          <p className="page-subtitle-new">
            Commercial projects fund student scholarships. Graduates join the workforce. Excellence compounds.
          </p>
        </div>

        {/* Cycle cards row */}
        <div className="grid-new-2 about-style-9">
          {cycleSteps.map((step, i) => (
            <div key={i} className="clay-card about-style-10">
              <div
                className="about-style-11"
              >
                <span className="material-symbols-outlined about-style-12">{step.icon}</span>
              </div>
              <div className="about-style-13">
                Step {i + 1}
              </div>
              <p className="about-style-14">
                {step.label}
              </p>
              {i < cycleSteps.length - 1 && (
                <div className="about-style-15">→</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <div className="clay-card clay-card-orange about-style-16">
        <span className="handwritten about-style-17">
          let's build together ✦
        </span>
        <h2 className="about-style-18">
          Start a project with us
        </h2>
        <p className="footer-text about-style-19">
          Whether you're a business needing digital infrastructure or a student seeking a career-defining pathway —
          Digitech is where ambition meets execution.
        </p>
        <div className="about-style-20">
          <button className="clay-btn clay-btn-orange" id="about-contact-cta" onClick={(e) => handleCTA(e, 'contact')}>
            Start a Project
            <span className="material-symbols-outlined">handshake</span>
          </button>
          <button className="clay-btn clay-btn-white" id="about-academy-cta" onClick={(e) => handleCTA(e, 'academy')}>
            Explore the Lab
          </button>
        </div>
      </div>
    </div>
  );
}
