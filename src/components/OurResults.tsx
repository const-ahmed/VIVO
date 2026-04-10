import React from 'react';
import Badge from './ui/Badge';
import styles from './OurResults.module.css';

const STATS = [
  { value: '17.5', suffix: '', label: 'Years of specialist recruitment experience' },
  { value: '23', suffix: '%', label: 'Average reduction in client time-to-hire' },
  { value: '1,032', suffix: '', label: 'Successful placements in the last 12 months' },
];

const OurResults: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Badge>Our Results</Badge>
          <h2 className={styles.title}>Numbers That Speak For Themselves</h2>
        </div>
        <div className={styles.grid}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <div className={styles.value}>
                {stat.value}<span className={styles.suffix}>{stat.suffix}</span>
              </div>
              <p className={styles.label}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurResults;
