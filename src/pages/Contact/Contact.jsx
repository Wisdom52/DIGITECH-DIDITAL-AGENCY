import React, { useState } from 'react';
import './Contact.css';
import { burstSparkles } from '../../components/CursorEffects/CursorEffects';

const INITIAL_FORM = {
  clientName: '',
  email: '',
  track: 'Professional SME Platform',
  budget: 'KES 50k – KES 150k',
  objective: '',
};

const contactItems = [
  { label: 'Primary Inquiries', value: 'info@digitech.co.ke', icon: 'mail' },
  { label: 'Studio Operations Hotline', value: '+254 700 875 540', icon: 'phone' },
  { label: 'Physical Headquarters', value: '1447-80200, Malindi, Kenya.', icon: 'location_on' },
  { label: 'Operating Window', value: 'Mon – Fri: 8 AM – 5 PM', icon: 'schedule' },
];

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.clientName.trim() || !formData.email.trim() || !formData.objective.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    burstSparkles(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 2);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData(INITIAL_FORM);
  };

  return (
    <div className="contact-page">

      {/* ── HEADER ── */}
      <header className="page-header-new">
        <span className="page-label-new">CONTACT & BUSINESS INTAKE INTERFACE</span>
        <h1 className="page-title-new">
          Transmit your <span className="marker-highlight">vision.</span>
        </h1>
        <p className="page-subtitle-new">
          Drop your details into our intake system. We review every submission within 24 hours — no auto-responders, real humans only.
        </p>
      </header>

      {/* ── CONTACT GRID ── */}
      <div className="contact-grid contact-style-1">

        {/* Left: Info panel */}
        <div className="contact-style-2">
          <div className="clay-card clay-card-orange contact-style-3">
            <h3 className="contact-style-4">Direct Channels</h3>
            {contactItems.map((item, i) => (
              <div key={i} className="contact-info-item">
                <div className="contact-style-5">
                  <div className="clay-card-icon orange contact-style-6">
                    <span className="material-symbols-outlined contact-style-7">{item.icon}</span>
                  </div>
                  <div className="contact-info-label">{item.label}</div>
                </div>
                <div className="contact-info-value contact-style-8">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <div className="clay-card clay-card-violet">
            <h4 className="contact-style-9">
              ✦ What happens after you submit?
            </h4>
            {[
              'Your brief is reviewed within 24 hours',
              'A scoping call is scheduled within 48 hours',
              'You receive a tailored project proposal',
              'We agree on scope, timeline & contract',
            ].map((step, i) => (
              <div key={i} className="contact-style-10">
                <span className="contact-style-11">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="footer-text contact-style-12">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="clay-card">
          {submitted ? (
            <div className="form-success-message">
              <div className="contact-style-13">
                <span className="material-symbols-outlined contact-style-14">check_circle</span>
              </div>
              <h3 className="handwritten contact-style-15">
                Transmission Received ✦
              </h3>
              <p className="footer-text contact-style-16">
                System handshake verified. Project scoping details have been queued for engineering review.
                Stand by for an inbound ping within 24 hours.
              </p>
              <button className="clay-btn clay-btn-orange" onClick={handleReset} id="contact-reset-btn">
                Send Another Transmission
                <span className="material-symbols-outlined">restart_alt</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} id="contact-form">
              <h3 className="contact-style-17">
                Project Intake Brief
              </h3>

              {error && (
                <div className="contact-style-18">
                  ⚠ {error}
                </div>
              )}

              <div className="grid-new-2 contact-style-19">
                <div className="form-group-clay">
                  <label className="form-label-clay" htmlFor="clientName">Client Name & Corporate Identity *</label>
                  <input
                    type="text" id="clientName" name="clientName"
                    value={formData.clientName} onChange={handleChange}
                    placeholder="Entity Name or Individual Designation"
                    className="form-input-clay" required
                  />
                </div>
                <div className="form-group-clay">
                  <label className="form-label-clay" htmlFor="email">Verified Professional Email *</label>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange}
                    placeholder="secure@entity.com"
                    className="form-input-clay" required
                  />
                </div>
              </div>

              <div className="grid-new-2 contact-style-20">
                <div className="form-group-clay">
                  <label className="form-label-clay" htmlFor="track">Project Track Selection</label>
                  <select id="track" name="track" value={formData.track} onChange={handleChange} className="form-select-clay">
                    <option>Basic Business Site</option>
                    <option>Professional SME Platform</option>
                    <option>E-Commerce Engine</option>
                    <option>Custom Software Solution</option>
                    <option>Graphic Design & Branding</option>
                    <option>Lab Academy Entry</option>
                  </select>
                </div>
                <div className="form-group-clay">
                  <label className="form-label-clay" htmlFor="budget">Project Investment Parameters</label>
                  <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="form-select-clay">
                    <option>Below KES 50k</option>
                    <option>KES 50k – KES 150k</option>
                    <option>KES 150k – KES 300k</option>
                    <option>KES 300k+</option>
                    <option>Lab Academy (No Budget)</option>
                  </select>
                </div>
              </div>

              <div className="form-group-clay">
                <label className="form-label-clay" htmlFor="objective">Core Objective & Scoping Details *</label>
                <textarea
                  id="objective" name="objective"
                  value={formData.objective} onChange={handleChange}
                  placeholder="Describe the system parameters, deliverables, or academy interest. The more detail, the better."
                  rows="5" className="form-input-clay contact-style-21" required
                />
              </div>

              <button type="submit" className="clay-btn clay-btn-orange contact-style-22" id="contact-submit-btn">
                Launch Project Journey
                <span className="material-symbols-outlined">rocket_launch</span>
              </button>

              <p className="footer-text contact-style-23">
                No spam. No auto-responders. A real human reviews every brief.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
