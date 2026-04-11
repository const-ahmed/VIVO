import React from 'react';
import Button from './ui/Button';
import Badge from './ui/Badge';
import DashboardMockup from './DashboardMockup';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Badge icon={
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
            </svg>
          }>UK & Europe Recruitment</Badge>

          <h1 className={styles.headline}>
            Connecting People, Fuelling Success
          </h1>

          <p className={styles.subtext}>
            Vivo helps companies across the UK and Europe find and keep the people
            who drive their success. Permanent placements, contract teams, and
            executive search — done properly.
          </p>

          <div className={styles.cta}>
            <Button variant="primary" size="lg">Get in touch</Button>
            <Button variant="outline" size="lg">Our services</Button>
          </div>

          <div className={styles.social}>
            <div className={styles.avatars}>
              {['#F47B1F', '#7BC8E2', '#E27B7B', '#C2B0E2'].map((color, i) => (
                <div
                  key={i}
                  className={styles.avatarCircle}
                  style={{ background: color, zIndex: 4 - i }}
                />
              ))}
            </div>
            <div className={styles.rating}>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className={styles.ratingText}>
                <strong>4.8</strong> From 1,000+ reviews
              </span>
            </div>
          </div>
        </div>

        <div className={styles.mockup}>
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
};

export default Hero;
