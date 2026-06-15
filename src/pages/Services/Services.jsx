import React, { useState } from 'react';
import './Services.css';
import { burstSparkles } from '../../components/CursorEffects/CursorEffects';

const engineeringTiers = [
  {
    id: 'starter',
    title: 'Starter / Basic Business Site',
    subtitle: 'Ideal for small startups, personal portfolios, and "digital brochures".',
    price: 'KES 15K – 30K',
    vibeText: 'Clean, fast, and straight to the point.',
    badgeVariant: 'orange',
    popular: false,
    features: [
      'Includes 3–5 core pages',
      'Template-based mobile-responsive configuration',
      'Standard lead capture form',
      'Floating WhatsApp chat tool',
      'Structural base SEO setup',
      '30-day post-launch support window',
    ]
  },
  {
    id: 'sme',
    title: 'Professional SME Website',
    subtitle: 'Engineered for established local companies, institutions, and consultants.',
    price: 'KES 30K – 80K',
    vibeText: 'Premium custom layout designed to convert.',
    badgeVariant: 'violet',
    popular: true,
    features: [
      'Comprises 10–20 high-fidelity pages',
      'Entirely custom UI/UX layout (unique brand style)',
      'Integrated Content Management System (CMS)',
      '1-hour dedicated video training walkthrough',
      'Custom forms with automated responders',
      'Premium security hardening and malware scanning',
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Store Engine',
    subtitle: 'Built for retail brands, wholesalers, and supermarkets.',
    price: 'KES 120K – 250K',
    vibeText: 'High transaction power with local payment integration.',
    badgeVariant: 'mint',
    popular: false,
    features: [
      'Unlimited product catalog',
      'Automated M-Pesa Express (Daraja API) integration',
      'Credit card processing',
      'Complex product variations',
      'Automated SMS & email transactional notifications',
      'High-end database encryption',
    ]
  },
  {
    id: 'custom',
    title: 'Custom System / Software Apps',
    subtitle: 'Enterprise-grade platforms, SaaS startups, logistics trackers.',
    price: 'KES 300K – 500K+',
    vibeText: 'Heavy machinery built for complex processes.',
    badgeVariant: 'banana',
    popular: false,
    features: [
      'Fully dynamic, user-driven system configurations',
      'Role-based access controls (Admins, Staff, Clients)',
      'Deep third-party API hookups',
      'Custom data visualization dashboards',
      'Full architectural code documentation',
      'Includes 2-week wireframing/SRS phase',
    ]
  }
];

const designRates = [
  {
    category: 'Brand Identity',
    items: [
      { name: 'Logo Design', rate: 'KES 3K – 10K' },
      { name: 'Startup Branding Kit', rate: 'KES 10K – 20K' },
      { name: 'Full Corporate Identity Manual', rate: 'KES 50K – 100K+' }
    ]
  },
  {
    category: 'Marketing Collateral',
    items: [
      { name: 'Flyers & Posters', rate: 'KES 1K – 7K' },
      { name: 'Business Cards', rate: 'KES 1.5K – 8K' },
      { name: 'Corporate Brochures', rate: 'KES 5K – 10K' },
      { name: 'Banners & Billboards', rate: 'KES 5K – 20K' }
    ]
  },
  {
    category: 'Digital & Social Media',
    items: [
      { name: 'Single Premium Social Post', rate: 'KES 1.5K – 4.5K' },
      { name: 'Monthly Social Package', rate: 'KES 18K – 30K' },
      { name: 'Web / YouTube Display Banners', rate: 'KES 2K – 5K' }
    ]
  },
];

const maintenancePlans = [
  {
    title: 'Basic Upkeep Plan',
    price: 'KES 5,000/mo',
    desc: 'Optimized for Basic Business Sites.',
    badgeVariant: 'orange',
    features: [
      'Monthly core platform updates',
      'Weekly secure off-site backups',
      'Basic continuous uptime monitoring',
    ]
  },
  {
    title: 'Growth Support Plan',
    price: 'KES 10,000/mo',
    desc: 'Optimized for Professional SME Sites.',
    badgeVariant: 'violet',
    popular: true,
    features: [
      'Bi-weekly system maintenance',
      'Security database optimization',
      'Premium malware scanning',
      'Detailed monthly traffic analytics',
      'Up to 2 hours of technical labor',
    ]
  },
  {
    title: 'E-Commerce Concierge',
    price: 'KES 25K – 50K/mo',
    desc: 'Engineered for high-volume stores and custom systems.',
    badgeVariant: 'mint',
    features: [
      'Daily automated backups',
      'Advanced security tracking',
      'M-Pesa API health checking',
      '5 hours priority developer support',
      'Guaranteed 12-hour urgent response',
    ]
  }
];

const variantMap = {
  orange: { badge: 'badge-soft-orange', card: 'clay-card-orange', btn: 'clay-btn-orange', accent: 'var(--orange)' },
  violet: { badge: 'badge-soft-violet', card: 'clay-card-violet', btn: 'clay-btn-violet', accent: 'var(--violet)' },
  mint: { badge: 'badge-soft-mint', card: 'clay-card-mint', btn: 'clay-btn-mint', accent: 'var(--mint)' },
  banana: { badge: 'badge-soft-banana', card: 'clay-card-banana', btn: 'clay-btn-orange', accent: 'var(--banana)' },
};

export default function Services({ setCurrentPage }) {
  const [activeTab, setActiveTab] = useState('software');

  const handleCTA = (e, page) => {
    burstSparkles(e.clientX, e.clientY);
    setTimeout(() => setCurrentPage(page), 300);
  };

  return (
    <div className="services-page">

      {/* ── HEADER ── */}
      <header className="page-header-new">
        <span className="page-label-new">SERVICES & PRICING</span>
        <h1 className="page-title-new">
          Pricing Architecture. <span className="handwritten services-style-1">No BS.</span>
        </h1>
        <p className="page-subtitle-new">
          Raw power for your digital infrastructure. Transparent rates.
          Zero guesswork. <br /> We design frameworks that deliver results.
        </p>
      </header>

      {/* ── TAB SWITCHER ── */}
      <div className="tab-row">
        {[
          { id: 'software', label: '⚙ Software Engineering' },
          { id: 'design', label: '✐ Graphic Design Rates' },
          { id: 'support', label: '🛡 Maintenance Plans' },
        ].map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            id={`tab-${tab.id}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── SOFTWARE TAB ── */}
      {activeTab === 'software' && (
        <section className="section-new services-style-2">
          <div className="grid-new-2">
            {engineeringTiers.map((tier) => {
              const v = variantMap[tier.badgeVariant];
              return (
                <div key={tier.id} className={`clay-card ${tier.popular ? v.card : ''} stagger-child`}>
                  <div className="clay-card-header">
                    <div>
                      <h3 className="services-style-3">{tier.title}</h3>
                      <p className="footer-text services-style-4">{tier.subtitle}</p>
                    </div>
                    {tier.popular && (
                      <span className={`badge-soft ${v.badge}`}>★ Popular</span>
                    )}
                  </div>

                  <div className="price-block-clay">
                    {tier.price}
                    <span className="vibe-check-new">Hover for vibe check</span>
                    <div className="price-tooltip-new">
                      <span className="handwritten services-style-5">Vibe Check ✦</span>
                      {tier.vibeText}
                    </div>
                  </div>

                  <ul className="feature-list-new services-style-6">
                    {tier.features.map((f, i) => (
                      <li key={i}>
                        <span className="material-symbols-outlined services-style-7">task_alt</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* <button
                    className={`clay-btn ${v.btn}`}
                    className="services-style-8"
                    onClick={(e) => handleCTA(e, 'contact')}
                    id={`initiate-${tier.id}`}
                  >
                    Initiate Scoping
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button> */}
                  <button
                    className={`clay-btn ${v.btn} services-style-8`}
                    onClick={(e) => handleCTA(e, 'contact')}
                    id={`initiate-${tier.id}`}
                  >
                    Initiate Scoping
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ── DESIGN TAB ── */}
      {activeTab === 'design' && (
        <section className="section-new services-style-9">
          <div className="grid-new-2">
            {designRates.map((cat, i) => (
              <div key={i} className="clay-card stagger-child">
                <span className="page-label-new services-style-10">{cat.category}</span>
                {cat.items.map((item, idx) => (
                  <div key={idx} className="design-rate-card">
                    <span className="services-style-11">{item.name}</span>
                    <span className="services-style-12">{item.rate}</span>
                  </div>
                ))}
              </div>
            ))}

            <div className="clay-card clay-card-orange stagger-child">
              <span className="page-label-new services-style-13">Specialist Options</span>
              <p className="footer-text services-style-14">
              · Product Packaging Design 
              < br />
              · Web UI/UX High-Fidelity Prototyping.
              </p>
              <p className="handwritten services-style-15">
                Rates via direct scoped consultation.
              </p>
              <button
                className="clay-btn clay-btn-orange services-style-16"
                onClick={(e) => handleCTA(e, 'contact')}
                id="design-quote-cta"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── MAINTENANCE TAB ── */}
      {activeTab === 'support' && (
        <section className="section-new services-style-17">
          <div className="grid-new-3">
            {maintenancePlans.map((plan, i) => {
              const v = variantMap[plan.badgeVariant];
              return (
                <div key={i} className={`clay-card ${plan.popular ? v.card : ''} stagger-child`}>
                  {plan.popular && <span className={`badge-soft ${v.badge}`} className="services-style-18">★ Most Popular</span>}
                  <h3 className="services-style-19">{plan.title}</h3>
                  <div className="services-style-20">
                    {plan.price}
                  </div>
                  <p className="footer-text services-style-21">{plan.desc}</p>

                  <ul className="feature-list-new services-style-22">
                    {plan.features.map((f, idx) => (
                      <li key={idx}>
                        <span className="material-symbols-outlined services-style-23">check_circle</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* <button
                    className={`clay-btn ${v.btn}`}
                    className="services-style-24"
                    onClick={(e) => handleCTA(e, 'contact')}
                    id={`maintenance-${i}`}
                  >
                    Get Started
                  </button> */}
                    <button
                    className={`clay-btn ${v.btn} services-style-24`}
                    onClick={(e) => handleCTA(e, 'contact')}
                    id={`maintenance-${i}`}
                  >
                    Get Started
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ── */}
      <div className="manifesto-card services-style-25">
        <p className="manifesto-quote services-style-26">
          "Confused about which tier fits? Let's talk — no obligation."
        </p>
        <p className="manifesto-body services-style-27">
          Every project starts with a free discovery call. We map your needs and recommend the exact configuration — no upsell, no fluff.
        </p>
        <button
          className="clay-btn clay-btn-orange"
          id="services-contact-cta"
          onClick={(e) => handleCTA(e, 'contact')}
        >
          Book a Discovery Call
          <span className="material-symbols-outlined">phone_in_talk</span>
        </button>
      </div>
    </div>
  );
}
