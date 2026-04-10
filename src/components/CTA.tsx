import React from 'react';
import Button from './ui/Button';
import styles from './CTA.module.css';

const CTA: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>Supercharge Your Hiring Today</h2>
          <p className={styles.subtitle}>
            Optimize recruitment outcomes with our advanced tools. Get started today!
          </p>
          <div className={styles.buttons}>
            <Button variant="primary" size="lg">Get started</Button>
            <Button variant="outline" size="lg">Contact us</Button>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>200%</span>
            <p className={styles.statDesc}>
              Faster hiring process guaranteed with our assistance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
