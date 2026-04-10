import React, { useState, useEffect, useCallback } from 'react';
import Badge from './ui/Badge';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  { name: 'Antonios Ilias', src: '/Testimonials/antonios.jpg' },
  { name: 'Hugh',           src: '/Testimonials/hugh.jpg' },
  { name: 'Mark',           src: '/Testimonials/mark.jpg' },
  { name: 'Matt',           src: '/Testimonials/matt.jpg' },
  { name: 'Nes',            src: '/Testimonials/nes.jpg' },
  { name: 'Sabin',          src: '/Testimonials/sabin.jpg' },
  { name: 'Shreya',         src: '/Testimonials/shreya.jpg' },
  { name: 'Swaraj',         src: '/Testimonials/swaraj.jpg' },
  { name: 'Tony',           src: '/Testimonials/tony.png' },
];

const INTERVAL_MS = 5000;

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Badge>Testimonials</Badge>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Real feedback from the businesses and candidates we've worked with across the UK and Europe.
          </p>
        </div>

        <div
          className={styles.carousel}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous testimonial">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className={styles.slide}>
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                className={`${styles.card} ${i === current ? styles.cardActive : ''}`}
                aria-hidden={i !== current}
              >
                <img src={t.src} alt={`Testimonial from ${t.name}`} className={styles.img} />
              </div>
            ))}
          </div>

          <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next testimonial">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className={styles.dots}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
