import React from 'react';
import Badge from './ui/Badge';
import styles from './Testimonials.module.css';

interface PillProps {
  text: string;
  dark?: boolean;
}

const Pill: React.FC<PillProps> = ({ text, dark }) => (
  <div className={`${styles.pill} ${dark ? styles.pillDark : ''}`}>
    <span className={styles.q}>"</span>
    {text}
    <span className={styles.q}>"</span>
  </div>
);

const Ghost: React.FC = () => <div className={styles.ghost} />;

const Testimonials: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <Badge>Testimonials</Badge>
        <h2 className={styles.title}>Hear From Our Clients</h2>
        <p className={styles.subtitle}>
          <em>"How has Hirestream impacted your operations?"</em> Here's some of what they said.
        </p>
      </div>

      <div className={styles.rows}>
        {/* Row 1 */}
        <div className={styles.row}>
          <Ghost />
          <Pill text="Faster talent acquisition process" dark />
          <Pill text="Enhanced hiring team collaboration" />
          <Ghost />
        </div>

        {/* Row 2 */}
        <div className={styles.row}>
          <Pill text="Efficient job vacancy management" />
          <Pill text="Improved candidate communication" />
          <Pill text="Clear interview scheduling" />
        </div>

        {/* Row 3 */}
        <div className={styles.row}>
          <Ghost />
          <Pill text="Faster job posting process" />
          <Pill text="Simplified applicant tracking" />
          <Pill text="Increased candidate engagement" dark />
          <Ghost />
        </div>

        {/* Row 4 */}
        <div className={styles.row}>
          <Ghost />
          <Pill text="Better management of job vacancies" />
          <Pill text="Streamlined candidate evaluation process" />
          <Ghost />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
