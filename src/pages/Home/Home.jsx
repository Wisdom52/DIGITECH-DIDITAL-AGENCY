import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import StatStrip from '../../components/StatStrip/StatStrip';
import { burstSparkles } from '../../components/CursorEffects/CursorEffects';

/* ─────────────────────────────────────────────
   CLAY SPHERE SVG  (interactive, hover reactive)
───────────────────────────────────────────── */
function ClaySphere({ size = 100, color1 = '#FFF', color2, color3, animClass = 'float-slow', label = '' }) {
  const uid = `sph-${color2.replace('#', '')}`;
  return (
    <div className="clay-shape-wrapper" title={label}>
      <svg width={size} height={size} viewBox="0 0 120 120" className={animClass}>
        <defs>
          <radialGradient id={uid} cx="35%" cy="30%" r="70%">
            <stop offset="0%"   stopColor={color1} stopOpacity="0.85" />
            <stop offset="45%"  stopColor={color2} />
            <stop offset="100%" stopColor={color3} />
          </radialGradient>
          <filter id={`shadow-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="6" dy="10" stdDeviation="10" floodOpacity="0.12" floodColor="#252830" />
          </filter>
        </defs>
        <circle cx="60" cy="60" r="50" fill={`url(#${uid})`} filter={`url(#shadow-${uid})`} />
        {/* specular shine */}
        <ellipse cx="42" cy="40" rx="14" ry="9" fill="rgba(255,255,255,0.35)" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CLAY DONUT SVG
───────────────────────────────────────────── */
function ClayDonut({ size = 120, color1 = '#FFF', color2, color3, animClass = 'float-medium' }) {
  const uid = `don-${color2.replace('#', '')}`;
  return (
    <div className="clay-shape-wrapper">
      <svg width={size} height={size} viewBox="0 0 120 120" className={animClass}>
        <defs>
          <radialGradient id={uid} cx="35%" cy="35%" r="75%">
            <stop offset="0%"   stopColor={color1} stopOpacity="0.8" />
            <stop offset="40%"  stopColor={color2} />
            <stop offset="100%" stopColor={color3} />
          </radialGradient>
          <filter id={`shadow-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="8" dy="12" stdDeviation="10" floodOpacity="0.1" floodColor="#252830" />
          </filter>
        </defs>
        <path
          d="M60,10 A50,50 0 1,0 60,110 A50,50 0 1,0 60,10 Z M60,36 A24,24 0 1,1 60,84 A24,24 0 1,1 60,36 Z"
          fill={`url(#${uid})`}
          filter={`url(#shadow-${uid})`}
        />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CLAY STAR SVG
───────────────────────────────────────────── */
function ClayStar({ size = 100, color1 = '#FFF', color2, color3, animClass = 'wiggle-anim' }) {
  const uid = `star-${color2.replace('#', '')}`;
  const pts = [];
  for (let i = 0; i < 5; i++) {
    const outerA = ((Math.PI * 2 * i) / 5) - Math.PI / 2;
    const innerA = outerA + Math.PI / 5;
    pts.push(`${60 + 48 * Math.cos(outerA)},${60 + 48 * Math.sin(outerA)}`);
    pts.push(`${60 + 22 * Math.cos(innerA)},${60 + 22 * Math.sin(innerA)}`);
  }
  return (
    <div className="clay-shape-wrapper">
      <svg width={size} height={size} viewBox="0 0 120 120" className={animClass}>
        <defs>
          <radialGradient id={uid} cx="40%" cy="30%" r="70%">
            <stop offset="0%"   stopColor={color1} stopOpacity="0.9" />
            <stop offset="50%"  stopColor={color2} />
            <stop offset="100%" stopColor={color3} />
          </radialGradient>
          <filter id={`shadow-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="5" dy="8" stdDeviation="8" floodOpacity="0.1" floodColor="#252830" />
          </filter>
        </defs>
        <polygon points={pts.join(' ')} fill={`url(#${uid})`} filter={`url(#shadow-${uid})`} />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   HAND-DRAWN SQUIGGLE DOODLE
───────────────────────────────────────────── */
function DoodleSquiggle({ color = '#FF7E67', w = 120, rotate = 0, animClass = 'wiggle-anim' }) {
  return (
    <div className="clay-shape-wrapper" style={{ transform: `rotate(${rotate}deg)` }}>
      <svg width={w} height={40} viewBox="0 0 120 40" className={animClass}>
        <path
          d="M5 20 Q20 5 35 20 Q50 35 65 20 Q80 5 95 20 Q110 35 125 20"
          stroke={color} strokeWidth="4" fill="none" strokeLinecap="round"
          strokeDasharray="6 3"
        />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   TYPEWRITER HOOK
───────────────────────────────────────────── */
const WORDS = ['scalable.', 'vibrant.', 'elite.', 'unforgettable.'];

function useTypewriter() {
  const [text, setText]       = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const word = WORDS[wordIdx];
    if (!deleting && text === word) {
      timerRef.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % WORDS.length);
    } else {
      const speed = deleting ? 60 : 110;
      timerRef.current = setTimeout(() => {
        setText((t) => deleting ? t.slice(0, -1) : word.slice(0, t.length + 1));
      }, speed);
    }
    return () => clearTimeout(timerRef.current);
  }, [text, deleting, wordIdx]);

  return text;
}

/* ─────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────── */
export default function Home({ setCurrentPage }) {
  const typedWord = useTypewriter();

  const handleCTAClick = (e, page) => {
    burstSparkles(e.clientX, e.clientY);
    setTimeout(() => setCurrentPage(page), 300);
  };

  return (
    <div className="home-container">

      {/* ── FLOATING CLAY SHAPES ── */}
      <div className="home-style-1">
        <ClaySphere size={110} color1="#FFF" color2="#FF7E67" color3="#D94E36" animClass="float-slow" label="Software" />
      </div>
      <div className="home-style-2">
        <ClayDonut size={130} color1="#FFF" color2="#A29BFE" color3="#5B54C8" animClass="float-medium" />
      </div>
      <div className="home-style-3">
        <ClayStar size={90} color1="#FFF" color2="#FAD390" color3="#D29933" animClass="wiggle-anim" />
      </div>
      <div className="home-style-4">
        <ClaySphere size={85} color1="#FFF" color2="#55E6C1" color3="#1AA482" animClass="float-fast" />
      </div>
      <div className="home-style-5">
        <ClaySphere size={68} color1="#FFF" color2="#FD79A8" color3="#C0387B" animClass="float-medium" />
      </div>

      {/* ── HAND-DRAWN DOODLES ── */}
      <div className="home-style-6">
        <DoodleSquiggle color="#A29BFE" w={100} rotate={-15} animClass="wiggle-anim" />
      </div>
      <div className="home-style-7">
        <DoodleSquiggle color="#FF7E67" w={80}  rotate={10}  animClass="float-slow" />
      </div>

      {/* ── HERO SECTION ── */}
      <section className="hero-wrapper-new">
        <span className="page-label-new home-style-8">✦ MALINDI-Based Digital Studio</span>

        <h1 className="hero-title-new">
          Artistically crafted.<br />
          <span className="marker-highlight">Engineered to be</span>
          <br />
          <span className="gradient-text">{typedWord}</span>
          <span className="typewriter-cursor" />
        </h1>

        <p className="hero-subtitle-new">
          We are a premium software engineering, brand identity, and technical talent studio.
          We build vibrant systems and train elite tech professionals for a brighter, better digital future.
        </p>

        <div className="hero-ctas-new">
          <button
            className="clay-btn clay-btn-orange"
            id="hero-cta-primary"
            onClick={(e) => handleCTAClick(e, 'contact')}
          >
            Let's build something cool
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <button
            className="clay-btn clay-btn-white"
            id="hero-cta-secondary"
            onClick={(e) => handleCTAClick(e, 'portfolio')}
          >
            See our work
          </button>
        </div>

        <div className="hero-ticker-new">
          <span className="ticker-dot-new" />
          <span>Trusted by ambitious brands that refuse to be boring across Kenya</span>
        </div>
      </section>

      {/* ── ANIMATED STATS STRIP ── */}
      <StatStrip />

      {/* ── WHAT WE DO ── */}
      <section className="section-new">
        <div className="page-header-new">
          <span className="page-label-new">THE CORE FRAMEWORK</span>
          <h2 className="page-title-new">Engineered solutions.<span>No template fluff.</span></h2>
          <p className="page-subtitle-new">
            We don't pass tasks along a conveyor belt. We build your digital authority using specialized,
            production-ready frameworks tailored to convert traffic into revenue.
          </p>
        </div>

        <div className="grid-new-3">
          <div className="clay-card clay-card-orange stagger-child">
            <div className="clay-card-header">
              <div className="clay-card-icon orange">
                <span className="material-symbols-outlined">code</span>
              </div>
              <span className="badge-soft badge-soft-orange">Pillar 01</span>
            </div>
            <h3>Custom Software &amp; Web Engineering</h3>
            <p className="footer-text home-style-9">
              Lightning-fast business platforms, high-converting E-Commerce stores with native M-Pesa Express
              integration, and secure fully-documented infrastructure designed to scale.
            </p>
            <div className="home-style-10">
              <span className="badge-soft badge-soft-orange">M-Pesa API</span>
              <span className="badge-soft badge-soft-orange">Secure DB</span>
            </div>
          </div>

          <div className="clay-card clay-card-violet stagger-child">
            <div className="clay-card-header">
              <div className="clay-card-icon violet">
                <span className="material-symbols-outlined">brush</span>
              </div>
              <span className="badge-soft badge-soft-violet">Pillar 02</span>
            </div>
            <h3>Elite Brand &amp; Identity Design</h3>
            <p className="footer-text home-style-11">
              Full corporate identity manuals, high-impact marketing collateral, and digital social kits that
              grab attention and retain client trust. Stop blending in.
            </p>
            <div className="home-style-12">
              <span className="badge-soft badge-soft-violet">Identity Manuals</span>
              <span className="badge-soft badge-soft-violet">Social Kits</span>
            </div>
          </div>

          <div className="clay-card clay-card-mint stagger-child">
            <div className="clay-card-header">
              <div className="clay-card-icon mint">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <span className="badge-soft badge-soft-mint">Pillar 03</span>
            </div>
            <h3>Continuous Engineering Support</h3>
            <p className="footer-text home-style-13">
              Around-the-clock security, automatic tracking, and regular updates mean your system is always online
            </p>
            <div className="home-style-14">
              <span className="badge-soft badge-soft-mint">Real-time Security</span>
              <span className="badge-soft badge-soft-mint">Zero Downtime</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="section-new home-style-15">
        <div className="manifesto-card pulse-soft">
          <p className="manifesto-quote">
            "We believe boring brands deserve to go extinct.<br />
            We don't do corporate fluff — we build systems that move needles."
          </p>
          <p className="manifesto-body">
            Digitech isn't just an agency — we are a self-sustaining tech ecosystem. Our production studio
            pairs elite lead architects and branding specialists with top-tier minds emerging from our
            advanced laboratory tracks. We design the future while training the hands that build it.
          </p>
        </div>
      </section>

      {/* ── PROCESS PIPELINE ── */}
      <section className="section-new">
        <div className="page-header-new">
          <span className="page-label-new">OUR PIPELINE</span>
          <h2 className="page-title-new">Uncompromising <span>Operational Precision</span></h2>
        </div>

        <div className="timeline-new">
          {[
            {
              n: '01', title: 'The Deep-Dive Alignment (Week 1)',
              body: 'A dedicated strategic workshop to map your market positioning, tear down competitor weaknesses, and lock in your creative direction to understand your wants and needs before a single pixel is drawn.'
            },
            {
              n: '02', title: 'Core Architecture & Concepts (Weeks 2–3)',
              body: 'Distinct, fully realized creative directions presented as living, interactive concepts — not static slide decks — so you can feel the brand in action.'
            },
            {
              n: '03', title: 'Precision Execution (Weeks 4–5)',
              body: 'Once a direction is greenlit, we move into production. We build with modern tools and clean, scalable design systems crafted for speed and conversion.'
            },
            {
              n: '04', title: 'Handover & Asset Delivery (Launch Day)',
              body: "Full technical documentation, an architecture map, tailored training walkthroughs, and a 30-day post-launch support window. We don't just launch and leave."
            },
          ].map((step) => (
            <div className="step-card-new" key={step.n}>
              <div className="step-badge-new">{step.n}</div>
              <div className="clay-card home-style-16">
                <h3 className="home-style-17">{step.title}</h3>
                <p className="footer-text">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ACADEMY PREVIEW ── */}
      <section className="section-new">
        <div className="grid-new-2 home-style-18">
          <div>
            <span className="page-label-new">ACADEMY PROGRAMMES</span>
            <h2 className="page-title-new home-style-19">
              The Lab: Where global tech careers are built.
            </h2>
            <p className="footer-text home-style-20">
              The Digitech Lab is our intensive training division — built to accelerate real-world developer
              capability through production-level pipelines, under direct mentorship from our active workforce.
            </p>
            <button
              className="clay-btn clay-btn-violet"
              id="academy-preview-cta"
              onClick={(e) => handleCTAClick(e, 'academy')}
            >
              Browse Tech Tracks
              <span className="material-symbols-outlined">menu_book</span>
            </button>
          </div>
          <div className="clay-card clay-card-violet">
            <h3 className="home-style-21">
              Lab Training Pipelines
            </h3>
            {[
              '4 Specialized Technical Tracks',
              'Hands-on Robotics,Network & physical hardware',
              'Direct pathway to Digitech Agency internships',
              'Highly rigorous practical-based syllabus',
              'Mentored by active industry professionals',
            ].map((item, i) => (
              <p key={i} className="footer-text home-style-22">
                <span className="home-style-23">▸</span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section-new home-style-24">
        <div className="clay-card clay-card-banana home-style-25">
          <span className="handwritten home-style-26">
            ready when you are ✦
          </span>
          <h2 className="home-style-27">
            Ready to build something unforgettable?
          </h2>
          <p className="footer-text home-style-28">
            Let's discuss your project parameters or academy placement.
          </p>
          <button
            className="clay-btn clay-btn-orange"
            id="home-bottom-cta"
            onClick={(e) => handleCTAClick(e, 'contact')}
          >
            Start the Adventure
            <span className="material-symbols-outlined">explore</span>
          </button>
        </div>
      </section>
    </div>
  );
}
