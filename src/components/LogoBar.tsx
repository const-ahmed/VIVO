import React, { useRef, useEffect } from 'react';
import styles from './LogoBar.module.css';

const CAROUSEL_LOGOS = [
  { name: 'Liberty',        src: '/carousel/Liberty-logo.png' },
  { name: 'NFU Mutual',     src: '/carousel/NFU-Mutual-Logo.png' },
  { name: 'Bookinglab',     src: '/carousel/bookinglab-logo.png' },
  { name: 'Causeway',       src: '/carousel/causeway-logo.png' },
  { name: 'Chemify',        src: '/carousel/chemify-logo.png' },
  { name: 'Dextra',         src: '/carousel/dextra-logo.png' },
  { name: 'EE',             src: '/carousel/ee-logo.png' },
  { name: 'Famostar',       src: '/carousel/famostar-logo.jpg' },
  { name: 'Grafton',        src: '/carousel/grafton-logo.png' },
  { name: 'Lightronics',    src: '/carousel/lightronics-logo.png' },
  { name: 'Metsec',         src: '/carousel/metsec-logo.png' },
  { name: 'Novacroft',      src: '/carousel/novacroft-logo.png' },
  { name: 'Reply',          src: '/carousel/reply-logo.png' },
  { name: 'Wates',          src: '/carousel/wates-logo.png' },
  { name: 'WealthWizards',  src: '/carousel/wealthwizards-logo.png' },
];

const SPEED = 1.2; // px per frame at 60 fps ≈ 72 px/s

const LogoBar: React.FC = () => {
  const innerRef  = useRef<HTMLDivElement>(null);
  const posRef    = useRef(0);
  const rafRef    = useRef(0);
  const pausedRef = useRef(false);
  const loopWidth = useRef(0);

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    // Measure width of the original slide set before cloning
    loopWidth.current = inner.scrollWidth;

    // Clone every real slide and append to the track
    Array.from(inner.children).forEach(slide => {
      inner.appendChild(slide.cloneNode(true));
    });

    const tick = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        // Silent teleport — no transition, no CSS animation
        if (posRef.current >= loopWidth.current) {
          posRef.current = 0;
        }
        inner.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section className={styles.section}>
      <p className={styles.label}>Trusted by businesses across the UK and Europe</p>
      <div className={styles.track}>
        <div
          ref={innerRef}
          className={styles.inner}
        >
          {CAROUSEL_LOGOS.map((logo, i) => (
            <div key={i} className={styles.item}>
              <img src={logo.src} alt={logo.name} className={styles.logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBar;
