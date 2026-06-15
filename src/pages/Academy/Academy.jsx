import React, { useState } from 'react';
import './Academy.css';
import { burstSparkles } from '../../components/CursorEffects/CursorEffects';

const tracks = [
  {
    num: '01',
    title: 'Software Application Development',
    focus: 'Website & Full-stack engineering mastery.',
    desc: 'Students advance past academic code into production pipelines — structured relational/non-relational database design (SQL, MongoDB), clean system logic architecture, API endpoint writing, and real-world repository management.',
    skills: ['HTML, CSS & JavaScript','SQL/NoSQL', 'React & Vue', 'Node.js/REST APIs/', 'Git Workflows'],
    badgeVariant: 'orange',
    icon: 'terminal',
    color: 'var(--orange)',
    bgColor: 'var(--orange-light)',
  },
  {
    num: '02',
    title: 'System Security & Infrastructure',
    focus: 'Advanced defensive network operations.',
    desc: 'Modern network hardening, full data encryption deployment (in-transit and at-rest), active server performance tuning, daily malware protection frameworks, and designing automated database replication with secure system recovery plans.',
    skills: ['Hardware Assembly & Troubleshooting','Python Scripting', 'Networking', 'Cybersecurity', 'Data Protection'],
    badgeVariant: 'violet',
    icon: 'shield_lock',
    color: 'var(--violet)',
    bgColor: 'var(--violet-light)',
  },
  {
    num: '03',
    title: 'Makerspace & Robotics',
    focus: 'Physical computing and industrial hardware integration.',
    desc: 'Programming micro-controllers, structural automation system creation, circuit design, and Internet of Things (IoT) field implementation pipelines — bridging software logic and physical hardware.',
    skills: ['Electronics & Circuit Basics', 'Robotics Kinematics & Sensors', 'Advanced 3D Printing', 'IoT Pipelines'],
    badgeVariant: 'banana',
    icon: 'precision_manufacturing',
    color: 'var(--banana)',
    bgColor: 'var(--banana-light)',
  },
  {
    num: '04',
    title: 'Digital Media & Content Strategy',
    focus: 'High-impact creative marketing and layout design.',
    desc: 'Advanced brand typography, high-fidelity UI/UX wireframing, high-conversion copywriting, and multi-channel campaign deployment strategy — producing creative professionals who understand both design and data.',
    skills: ['Graphics Design', 'Photography & Videography', 'Social Media MArketing', 'Brand Management','Social Media Ads & Analytics'],
    badgeVariant: 'pink',
    icon: 'palette',
    color: 'var(--pink)',
    bgColor: 'var(--pink-light)',
  },
];

const variantMap = {
  orange: 'badge-soft-orange',
  violet: 'badge-soft-violet',
  banana: 'badge-soft-banana',
  pink:   'badge-soft-pink',
};

export default function Academy({ setCurrentPage }) {
  const [openTrack, setOpenTrack] = useState(null);

  const handleCTA = (e, page) => {
    burstSparkles(e.clientX, e.clientY);
    setTimeout(() => setCurrentPage(page), 300);
  };

  return (
    <div className="academy-page">

      {/* ── HEADER ── */}
      <header className="page-header-new">
        <span className="page-label-new">DIGITECH LAB ACADEMY</span>
        <h1 className="page-title-new">
          The production-ready{' '}
          <span className="marker-highlight">training ground.</span>
        </h1>
        <p className="page-subtitle-new">
          Traditional classes teach syntax. We teach deployment. 4 intensive tracks led by active industry developers.
        </p>
      </header>

      {/* ── PIPELINE BANNER ── */}
      <div className="manifesto-card pulse-soft academy-style-1">
        <h3 className="manifesto-quote academy-style-2">
          Lab Pipeline Sequence: Connected ✦
        </h3>
        <p className="manifesto-body academy-style-3">
          Our laboratory mimics a live real world development Environment. No hypothetical assignments.
          We teach, develop, deploy and maintain real systems that solve real regional bottlenecks.
        </p>
      </div>

      {/* ── TRACKS — accordion style ── */}
      <section className="section-new academy-style-4">
        <div className="page-header-new">
          <span className="page-label-new">SPECIALIZATIONS</span>
          <h2 className="page-title-new">
            4 Specialized <span>Technical Tracks</span>
          </h2>
        </div>

        <div className="academy-style-5">
          {tracks.map((track, idx) => {
            const isOpen = openTrack === idx;
            return (
              <div
                key={idx}
                className="clay-card"
                style={{ cursor: 'pointer', borderLeft: isOpen ? `5px solid ${track.color}` : '5px solid transparent', transition: 'border-color 0.3s ease' }}
                onClick={() => setOpenTrack(isOpen ? null : idx)}
                id={`track-${track.num}`}
              >
                <div className="academy-track-card">
                  <div
                    className="track-num-badge"
                    style={{ background: track.bgColor, color: track.color }}
                  >
                    {track.num}
                  </div>
                  <div className="academy-style-6">
                    <div className="academy-style-7">
                      <div>
                        <span className={`badge-soft ${variantMap[track.badgeVariant]}`} className="academy-style-8">TRACK {track.num}</span>
                        <h3 className="academy-style-9">{track.title}</h3>
                      </div>
                      <div className="academy-style-10">
                        <div className="clay-card-icon" style={{ background: track.bgColor, color: track.color }}>
                          <span className="material-symbols-outlined">{track.icon}</span>
                        </div>
                        <span className="material-symbols-outlined" style={{ color: track.color, transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                          expand_more
                        </span>
                      </div>
                    </div>

                    <p className="footer-text academy-style-11">
                      <strong>Core Focus:</strong> {track.focus}
                    </p>

                    {/* Expandable content */}
                    {isOpen && (
                      <div className="academy-style-12">
                        <p className="footer-text academy-style-13">
                          {track.desc}
                        </p>
                        <div className="skills-wrap">
                          {track.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="skill-chip">{skill}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── INTERNSHIP ADVANTAGE ── */}
      <section className="section-new">
        <div className="grid-new-2 academy-style-14">
          <div>
            <span className="page-label-new">THE PATHWAY</span>
            <h2 className="page-title-new academy-style-15">
              The Industry Internship <span>Advantage</span>
            </h2>
            <p className="footer-text academy-style-16">
              Top performers within Digitech Lab don't graduate into theoretical unemployment.
              They integrate directly into our internal <strong>Digitech Digital Agency</strong> production division
              as Junior Associates — working on active, real-world client projects alongside expert engineers.
            </p>
            <p className="footer-text academy-style-17">
              They exit with verified live project credits and a globally competitive tech portfolio.
            </p>
            <button
              className="clay-btn clay-btn-orange"
              id="academy-apply-cta"
              onClick={(e) => handleCTA(e, 'contact')}
            >
              Apply for the Next Cohort
              <span className="material-symbols-outlined">school</span>
            </button>
          </div>

          <div className="clay-card clay-card-violet">
            <span className="page-label-new academy-style-18">TUITION ARCHITECTURE</span>
            <p className="footer-text academy-style-19">
              Contact our admissions office for active cohort entry charges and scholarship structures.
            </p>
            {[
              { icon: 'school',         label: 'Merit-based scholarship pathways' },
              { icon: 'groups',         label: 'Small cohort sizes (max 30 per intake)' },
              { icon: 'calendar_month', label: 'Flexible intake windows' },
              { icon: 'workspace_premium', label: 'Certificate on successful completion' },
            ].map((item, i) => (
              <div key={i} className="academy-style-20">
                <div className="clay-card-icon violet">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <p className="footer-text academy-style-21">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CYCLE CTA ── */}
      <div className="clay-card clay-card-mint academy-style-22">
        <h3 className="handwritten academy-style-23">
          The Digitech Cycle ✦
        </h3>
        <p className="footer-text academy-style-24">
          Commercial projects fund student scholarship pipelines. Graduates enter the workforce directly as
          Junior Associates to engineer client production code under strict senior oversight.
          A self-sustaining loop of tech excellence.
        </p>
        <button
          className="clay-btn clay-btn-mint"
          id="academy-bottom-cta"
          onClick={(e) => handleCTA(e, 'contact')}
        >
          Start Your Application
          <span className="material-symbols-outlined">rocket_launch</span>
        </button>
      </div>
    </div>
  );
}
