import React from 'react';
import Button from './ui/Button';
import styles from './CTA.module.css';

const CTA: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>Ready to Find Your Next Great Hire?</h2>
          <p className={styles.subtitle}>
            Get in touch with our team today. Whether you need a permanent hire, a contract
            team, or an executive search — we're ready to help.
          </p>
          <div className={styles.buttons}>
            <Button variant="primary" size="lg">Schedule a call</Button>
            <Button variant="outlineLight" size="lg">Contact us</Button>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>200%</span>
            <p className={styles.statDesc}>
              Faster time-to-hire compared to recruiting alone — proven across our client base
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
