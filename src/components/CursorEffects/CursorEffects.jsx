import { useEffect, useRef } from 'react';
import './CursorEffects.css';

export default function CursorEffects() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos  = useRef({ x: 0, y: 0 });
  const rafId    = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;

    const onMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Move dot instantly
      dot.style.left = e.clientX + 'px';
      dot.style.top  = e.clientY + 'px';

      // Spawn sparkles occasionally
      if (Math.random() < 0.08) spawnSparkle(e.clientX, e.clientY);
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.15);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.15);
      ring.style.left = ringPos.current.x + 'px';
      ring.style.top  = ringPos.current.y + 'px';
      rafId.current = requestAnimationFrame(animate);
    };

    const onDown = (e) => {
      dot.style.transform = 'translate(-50%, -50%) scale(2)';
      ring.style.transform = 'translate(-50%, -50%) scale(0.6)';
      burstSparkles(e.clientX, e.clientY);
    };
    const onUp = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(1)';
      ring.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

// Spawn one floating sparkle
function spawnSparkle(x, y) {
  const el = document.createElement('div');
  el.className = 'sparkle-particle';
  const size   = 4 + Math.random() * 8;
  const colors = ['#FF7E67', '#A29BFE', '#55E6C1', '#FAD390', '#FD79A8', '#74B9FF'];
  const color  = colors[Math.floor(Math.random() * colors.length)];
  const tx = (Math.random() - 0.5) * 80;
  const ty = (Math.random() - 0.5) * 80;

  el.style.cssText = `
    left: ${x}px; top: ${y}px;
    width: ${size}px; height: ${size}px;
    background: ${color};
    --tx: ${tx}px; --ty: ${ty}px;
    transform: translate(-50%,-50%);
  `;
  document.body.appendChild(el);
  el.addEventListener('animationend', () => el.remove());
}

// Burst multiple confetti pieces on click
export function burstSparkles(x, y) {
  const colors = ['#FF7E67', '#A29BFE', '#55E6C1', '#FAD390', '#FD79A8', '#74B9FF'];
  for (let i = 0; i < 16; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    const size  = 6 + Math.random() * 10;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const angle = (Math.PI * 2 / 16) * i + (Math.random() - 0.5) * 0.5;
    const dist  = 60 + Math.random() * 120;
    const tx    = Math.cos(angle) * dist;
    const ty    = Math.sin(angle) * dist;
    const rot   = Math.random() * 720 - 360;

    el.style.cssText = `
      left: ${x}px; top: ${y}px;
      width: ${size}px; height: ${size * 0.6}px;
      background: ${color};
      border-radius: ${Math.random() > 0.5 ? '50%' : '3px'};
      --tx: ${tx}px; --ty: ${ty}px; --rot: ${rot}deg;
      transform: translate(-50%,-50%);
    `;
    document.body.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }
}
