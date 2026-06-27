'use client';

import { useEffect, useRef } from 'react';
import styles from './lanyard.module.css';

/* ─── Physics ─────────────────────────────────────────────────────────────── */
const SPRING      = 0.06;
const DAMPING     = 0.88;
const ROTATION    = 0.06;
const IDLE_AMOUNT = 6;
const IDLE_SPEED  = 0.0012;

/* How far below the pin the card centre rests at idle */
const HANG_Y = 320;

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

export default function Lanyard({
  card  = '/assets/lanyard/Card.png',
  // strap = '/assets/lanyard/Strap.png',
}) {
  const wrapperRef = useRef(null);
  const cardRef    = useRef(null);
  const pathRef    = useRef(null);

  const animFrame  = useRef(null);
  const anchor     = useRef({ x: 0, y: 0 });

  const state = useRef({
    dragging: false,
    x: 0, y: HANG_Y,
    vx: 0, vy: 0,
    rotation: 0,
    offsetX: 0, offsetY: 0,
  });

  /* ── measure wrapper → pin position ────────────────────────────────────── */
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const measure = () => {
      const r = wrapper.getBoundingClientRect();
      anchor.current.x = r.width / 2;
      anchor.current.y = 0;           // pin is at the very top edge of wrapper
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrapper);
    return () => ro.disconnect();
  }, []);

  /* ── animation loop ─────────────────────────────────────────────────────── */
  useEffect(() => {
    let prev = performance.now();

    const tick = (now) => {
      const delta = Math.min((now - prev) / 16.666, 2);
      prev = now;
      const s = state.current;

      /* idle sway */
      if (!s.dragging) {
        const idleX =  Math.sin(now * IDLE_SPEED) * IDLE_AMOUNT;
        const idleY =  Math.cos(now * IDLE_SPEED * 0.7) * 4;
        const ax = (idleX            - s.x) * SPRING;
        const ay = (HANG_Y + idleY   - s.y) * SPRING;
        s.vx = (s.vx + ax * delta) * DAMPING;
        s.vy = (s.vy + ay * delta) * DAMPING;
        s.x += s.vx;
        s.y += s.vy;
      }

      s.rotation += ((s.vx * ROTATION) - s.rotation) * 0.12;

      const cardEl = cardRef.current;
      if (cardEl) {
        /* card is centred on (anchorX + s.x, anchorY + s.y) */
        const halfW = cardEl.offsetWidth  / 2;
        const halfH = cardEl.offsetHeight / 2;
        const left  = anchor.current.x + s.x - halfW;
        const top   = anchor.current.y + s.y - halfH;
        cardEl.style.transform =
          `translate(${left}px, ${top}px) rotate(${s.rotation}deg)`;

        /* strap: pin → card top-centre (no gap) */
        const path = pathRef.current;
        if (path) {
          const ax  = anchor.current.x;
          const ay  = anchor.current.y;           // pin y  = 0
          const cx  = ax + s.x;                   // card centre x
          const cy  = anchor.current.y + s.y - halfH; // card TOP edge y

          const dist  = Math.sqrt((cx-ax)**2 + (cy-ay)**2);
          const sag   = clamp(dist * 0.15, 20, 80);
          const ctrlX = (ax + cx) / 2 + clamp(s.rotation * 4, -60, 60);
          const ctrlY = (ay + cy) / 2 - sag;

          path.setAttribute('d',
            `M ${ax} ${ay} Q ${ctrlX} ${ctrlY} ${cx} ${cy}`
          );
        }
      }

      animFrame.current = requestAnimationFrame(tick);
    };

    animFrame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrame.current);
  }, []);

  /* ── drag ───────────────────────────────────────────────────────────────── */
  useEffect(() => {
    const onMove = (e) => {
      if (!state.current.dragging) return;
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const r = wrapper.getBoundingClientRect();
      const tx = (e.clientX - r.left)  - anchor.current.x - state.current.offsetX;
      const ty = (e.clientY - r.top)   - anchor.current.y - state.current.offsetY;
      state.current.vx = tx - state.current.x;
      state.current.vy = ty - state.current.y;
      state.current.x  = tx;
      state.current.y  = ty;
    };
    const onUp = () => { state.current.dragging = false; };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup',   onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup',   onUp);
    };
  }, []);

  const handlePointerDown = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    state.current.dragging = true;
    state.current.offsetX  = e.clientX - (r.left + r.width  / 2);
    state.current.offsetY  = e.clientY - (r.top  + r.height / 2);
    card.setPointerCapture(e.pointerId);
  };

  return (
    <div ref={wrapperRef} className={styles.wrapper}>

      {/* Strap SVG — covers entire wrapper, extends upward via overflow:visible */}
      <svg className={styles.rope}>
        <defs>
          <linearGradient id="leatherGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a2f1a" />
            <stop offset="25%" stopColor="#6a3f22" />
            <stop offset="50%" stopColor="#8a5a33" />
            <stop offset="75%" stopColor="#5a341d" />
            <stop offset="100%" stopColor="#3a2113" />
          </linearGradient>

          {/* subtle edge highlight for realism */}
          <filter id="ropeDepth">
            <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="#000" floodOpacity="0.35"/>
          </filter>
        </defs>

        <path
          ref={pathRef}
          fill="none"
          stroke="url(#leatherGrad)"
          strokeWidth="34"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Card image */}
      <div
        ref={cardRef}
        className={styles.card}
        onPointerDown={handlePointerDown}
      >
        <div className={styles.holder} />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={card}
          alt="Lanyard card"
          draggable={false}
          className={styles.cardImage}
        />
      </div>
    </div>
  );
}