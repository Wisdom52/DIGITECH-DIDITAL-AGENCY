import { useEffect, useRef, useState } from 'react';
import './StatStrip.css';

function useInView(threshold = 0.3) {
  const ref   = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function AnimatedCounter({ target, suffix = '', duration = 1800 }) {
  const [ref, inView] = useInView(0.4);
  const [count, setCount]   = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const animate = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.floor(eased * target));
      if (t < 1) frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { num: 50,  suffix: '+', label: 'Projects Shipped'    },
  { num: 4,   suffix: '',  label: 'Training Tracks'     },
  { num: 100, suffix: '%', label: 'Client Retention'    },
  { num: 3,   suffix: 'x', label: 'Average ROI'         },
];

export default function StatStrip() {
  return (
    <div className="stats-strip">
      {stats.map((s, i) => (
        <div className="stat-block stagger-child" key={i}>
          <div className="stat-number">
            <AnimatedCounter target={s.num} suffix={s.suffix} />
          </div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
