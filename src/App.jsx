import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CursorEffects from './components/CursorEffects/CursorEffects';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Academy from './pages/Academy/Academy';
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import './index.css';

/* ── Animated marquee ticker ── */
const MARQUEE_ITEMS = [
  'Custom Software', 'Brand Identity', 'M-Pesa Integration',
  'Tech Talent Lab', 'Web Engineering', 'Motion Design',
  'UI / UX Design', 'E-Commerce', 'API Architecture',
  'Makerspace & Robotics','Networking & Cyber Security', 'Digital Media & Content Strategy',
];

function MarqueeBanner() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={i}>
            <span className="marquee-star">★</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Ambient background blobs ── */
function BgBlobs() {
  return (
    <div className="bg-blobs">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':      return <Home setCurrentPage={setCurrentPage} />;
      case 'services':  return <Services setCurrentPage={setCurrentPage} />;
      case 'academy':   return <Academy setCurrentPage={setCurrentPage} />;
      // case 'portfolio': return <Portfolio setCurrentPage={setCurrentPage} />;
      case 'about':     return <About setCurrentPage={setCurrentPage} />;
      case 'contact':   return <Contact />;
      default:          return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <>
      {/* Global effects */}
      <CursorEffects />
      <ScrollProgress />
      <BgBlobs />

      <div className="app-container">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <MarqueeBanner />

        <main className="main-content">
          {renderPage()}
        </main>

        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
}
