import React, { useState, useEffect, useRef } from 'react';
import './Portfolio.css';
import { burstSparkles } from '../../components/CursorEffects/CursorEffects';

/* ─── M-Pesa Terminal Simulator ─── */
function MpesaSimulator() {
  const [phone, setPhone] = useState('254700000000');
  const [simulating, setSimulating] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([
    { text: 'SYSTEM READY — STK-SIMULATOR NODE-09 ONLINE', type: 'info' },
    { text: 'Enter a phone number and press "Trigger STK Push" to simulate the Safaricom Daraja API flow.', type: 'normal' },
  ]);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLogs]);

  const addLog = (text, type = 'normal') => {
    setTerminalLogs((prev) => [...prev, { text: `[${new Date().toLocaleTimeString()}] ${text}`, type }]);
  };

  const runSimulation = () => {
    if (simulating) return;
    if (!phone.match(/^254\d{9}$/)) {
      addLog('ERROR: Invalid phone format. Must be 254XXXXXXXXX (12 digits)', 'warning');
      return;
    }
    setSimulating(true);
    setTerminalLogs([]);

    const steps = [
      [100,  'INITIATING TRANSACTION...', 'info'],
      [700,  'Connecting to Safaricom Daraja API Gateway...', 'normal'],
      [1400, 'Requesting OAuth Access Token...', 'normal'],
      [2100, 'Token received: token_exp_3599_active', 'success'],
      [2400, 'Generating password using shortcode, passkey & timestamp...', 'normal'],
      [3000, `Sending STK Push payload to +${phone}...`, 'normal'],
      [3300, `Payload: { BusinessShortCode: "174379", Amount: "15000", PartyA: "${phone}", CallbackURL: "https://api.digitech.co.ke/mpesa/callback" }`, 'info'],
      [4200, 'Safaricom Daraja API → [200 OK] MerchantRequestID: ws_CO_04062026_1245', 'success'],
      [4600, 'Awaiting customer PIN entry on handset screen...', 'warning'],
      [6000, 'Safaricom Callback received: [ResultCode: 0] "The service request is processed successfully."', 'success'],
      [6300, 'Transaction ID: KSL4K8D9F0 — KES 15,000.00 transferred.', 'success'],
      [7000, 'Updating relational database: UPDATE shipments SET payment_status = "PAID"...', 'normal'],
      [7600, 'Database write committed. Notification sent to logistics fleet.', 'success'],
      [8000, 'TRANSACTION COMPLETE. NODE IDLE.', 'info'],
    ];

    steps.forEach(([delay, text, type]) => {
      setTimeout(() => {
        addLog(text, type);
        if (text.startsWith('TRANSACTION COMPLETE')) setSimulating(false);
      }, delay);
    });
  };

  return (
    <div className="clay-card portfolio-style-1">
      <div className="portfolio-style-2">
        <h4 className="portfolio-style-3">
          M-Pesa Daraja Webhook Simulator
        </h4>
        <div className="hero-ticker-new portfolio-style-4">
          <span className="ticker-dot-new" />
          <span>WEBHOOK LISTENING</span>
        </div>
      </div>

      <div className="grid-new-2 portfolio-style-5">
        <div className="portfolio-style-6">
          <div className="form-group-clay portfolio-style-7">
            <label className="form-label-clay" htmlFor="sim-phone">Phone Number (254XXXXXXXXX)</label>
            <input
              type="text" id="sim-phone" value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="254700000000" className="sim-input-clay"
              disabled={simulating}
            />
          </div>
          <div className="form-group-clay portfolio-style-8">
            <label className="form-label-clay">Amount (KES)</label>
            <input type="text" value="KES 15,000.00" className="sim-input-clay" disabled />
          </div>
          <button
            onClick={runSimulation}
            className={`clay-btn ${simulating ? 'clay-btn-white' : 'clay-btn-orange'}`}
            id="stk-trigger-btn"
            disabled={simulating}
          >
            {simulating ? '⚡ Simulating...' : 'Trigger STK Push'}
            <span className="material-symbols-outlined">{simulating ? 'hourglass_top' : 'send'}</span>
          </button>
          <p className="footer-text portfolio-style-9">
            This simulates the full M-Pesa Daraja API STK push flow including OAuth token exchange, push payload, and webhook callback.
          </p>
        </div>

        <div className="sim-terminal-clay" ref={terminalRef}>
          {terminalLogs.map((log, i) => (
            <div key={i} className={`terminal-line-clay ${log.type}`}>
              <span className="portfolio-style-10">›</span>
              <span>{log.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Database Schema Tab ─── */
function SchemaTab() {
  const schema = `-- Relational DB Schema: African Logistics Platform
-- Shipments & M-Pesa Daraja Callback Tables

CREATE TABLE shipments (
  shipment_id     VARCHAR(50)  PRIMARY KEY,
  customer_name   VARCHAR(100) NOT NULL,
  customer_phone  VARCHAR(15)  NOT NULL,
  destination     VARCHAR(50)  NOT NULL,
  payment_status  VARCHAR(20)  DEFAULT 'PENDING',
  status          VARCHAR(20)  DEFAULT 'ORDERED',
  created_at      TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE mpesa_callbacks (
  callback_id          VARCHAR(100) PRIMARY KEY,
  merchant_request_id  VARCHAR(50)  NOT NULL,
  checkout_request_id  VARCHAR(50)  NOT NULL,
  result_code          INT          NOT NULL,
  result_desc          VARCHAR(255),
  amount               DECIMAL(10,2),
  mpesa_receipt_number VARCHAR(30),
  transaction_date     TIMESTAMP,
  phone_number         VARCHAR(15)
);

-- Index for fast phone-based lookups
CREATE INDEX idx_shipments_phone
  ON shipments(customer_phone);

-- Trigger: auto-dispatch when payment confirmed
CREATE OR REPLACE FUNCTION auto_dispatch()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.payment_status = 'PAID' THEN
    UPDATE shipments
    SET status = 'DISPATCHED'
    WHERE customer_phone = NEW.phone_number;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;`;

  return (
    <div className="portfolio-style-11">
      <pre className="portfolio-style-12">
        {schema}
      </pre>
    </div>
  );
}

/* ─── Dashboard Tab ─── */
function DashboardTab() {
  const metrics = [
    { label: 'In Transit',       value: 142, color: 'var(--orange)', bg: 'var(--orange-light)' },
    { label: 'Delivered Today',  value: 84,  color: 'var(--mint)',   bg: 'var(--mint-light)' },
    { label: 'Pending Clearance',value: 7,   color: 'var(--violet)', bg: 'var(--violet-light)' },
    { label: 'Flagged',          value: 2,   color: 'var(--pink)',   bg: 'var(--pink-light)' },
  ];
  const routes = [
    { name: 'Mombasa → Nairobi', pct: 94, color: 'var(--mint)' },
    { name: 'Nairobi → Kisumu',  pct: 71, color: 'var(--violet)' },
    { name: 'Mombasa → Malindi', pct: 58, color: 'var(--orange)' },
  ];

  return (
    <div className="clay-card portfolio-style-13">
      <h4 className="portfolio-style-14">
        Active Fleet Status Dashboard
      </h4>

      <div className="grid-new-2 portfolio-style-15">
        {metrics.map((m, i) => (
          <div key={i} className="clay-card portfolio-style-16">
            <div className="portfolio-style-17">{m.value}</div>
            <div className="portfolio-style-18">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="portfolio-style-19">
        {routes.map((r, i) => (
          <div key={i}>
            <div className="portfolio-style-20">
              <span>{r.name}</span>
              <span style={{ color: r.color }}>{r.pct}%</span>
            </div>
            <div className="portfolio-style-21">
              <div style={{ width: `${r.pct}%`, height: '100%', background: r.color, borderRadius: '10px', transition: 'width 1s var(--ease-bounce)' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── MAIN PORTFOLIO PAGE ─── */
const caseStudies = [
  {
    title: 'Mombasa Port Smart Logistics Gate',
    client: 'Trade & Marine Port Authority',
    desc: 'An automated container recognition system linking port gates, weighbridges, and manifest databases. Developed in C++ and Python using neural vision models.',
    metrics: '35% reduction in gate queues · 99.4% camera recognition accuracy',
    badge: 'badge-soft-orange',
    icon: 'local_shipping',
  },
  {
    title: 'Kijiji Fintech Core Ledger API',
    client: 'East Africa Microfinance Consortium',
    desc: 'A highly secure financial ledger service handling high transaction volumes with zero audit leakage. Built in Go, utilizing PostgreSQL with double-entry accounting constraints.',
    metrics: '12M+ monthly queries · sub-10ms ledger lock updates',
    badge: 'badge-soft-violet',
    icon: 'account_balance',
  },
];

const PORTFOLIO_TABS = [
  { id: 'simulator', label: '⚡ M-Pesa Simulator' },
  { id: 'schema',    label: '🗄 Database Schema' },
  { id: 'dashboard', label: '📊 Fleet Dashboard' },
];

export default function Portfolio({ setCurrentPage }) {
  const [activeTab, setActiveTab] = useState('simulator');

  const handleCTA = (e, page) => {
    burstSparkles(e.clientX, e.clientY);
    setTimeout(() => setCurrentPage(page), 300);
  };

  return (
    <div className="portfolio-page">

      {/* ── HEADER ── */}
      <header className="page-header-new">
        <span className="page-label-new">PORTFOLIO & AUTHORITY CONFIG</span>
        <h1 className="page-title-new">
          Case & Spec Studies. <span>Delivered.</span>
        </h1>
        <p className="page-subtitle-new">
          Enterprise digital products, applications, and frameworks engineered by our core workforce.
          Live interactive demos — not screenshots.
        </p>
      </header>

      {/* ── CASE STUDIES ── */}
      <section className="section-new portfolio-style-22">
        <div className="page-header-new">
          <span className="page-label-new">TRACK 01</span>
          <h2 className="page-title-new portfolio-style-23">
            Technical Workforce <span>Case Studies</span>
          </h2>
        </div>

        <div className="grid-new-2">
          {caseStudies.map((study, idx) => (
            <div key={idx} className={`clay-card stagger-child ${idx === 0 ? 'clay-card-orange' : 'clay-card-violet'}`}>
              <div className="clay-card-header">
                <div className={`clay-card-icon ${idx === 0 ? 'orange' : 'violet'}`}>
                  <span className="material-symbols-outlined">{study.icon}</span>
                </div>
                <span className={`badge-soft ${study.badge}`}>{study.client}</span>
              </div>
              <h3 className="portfolio-style-24">{study.title}</h3>
              <p className="footer-text portfolio-style-25">
                {study.desc}
              </p>
              <div className="portfolio-style-26">
                ✦ {study.metrics}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTERACTIVE SPEC STUDY ── */}
      <section className="section-new portfolio-style-27">
        <div className="page-header-new">
          <span className="page-label-new">TRACK 02 — FEATURED CONCEPT SPEC</span>
          <h2 className="page-title-new portfolio-style-28">
            African Logistics Platform <span>Reimagined</span>
          </h2>
          <p className="page-subtitle-new">
            A comprehensive UX/UI reimagining with M-Pesa Daraja API STK simulation, relational schema design, and live fleet dashboard. Fully interactive — try it below.
          </p>
        </div>

        <div className="clay-card clay-card-banana portfolio-style-29">
          {/* Tab row */}
          <div className="tab-row">
            {PORTFOLIO_TABS.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                id={`portfolio-tab-${tab.id}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === 'simulator' && <MpesaSimulator />}
          {activeTab === 'schema'    && <SchemaTab />}
          {activeTab === 'dashboard' && <DashboardTab />}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <div className="manifesto-card portfolio-style-30">
        <p className="manifesto-quote portfolio-style-31">
          "Want us to build something like this for you?"
        </p>
        <p className="manifesto-body portfolio-style-32">
          Every system we've built started with a conversation. Let's talk about yours.
        </p>
        <div className="portfolio-style-33">
          <button className="clay-btn clay-btn-orange" id="portfolio-contact-cta" onClick={(e) => handleCTA(e, 'contact')}>
            Start a Project
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <button className="clay-btn clay-btn-white" id="portfolio-services-cta" onClick={(e) => handleCTA(e, 'services')}>
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
}
