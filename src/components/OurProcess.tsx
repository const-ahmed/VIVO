import React from 'react';
import Badge from './ui/Badge';
import styles from './OurProcess.module.css';

const STEPS = [
  {
    number: '01',
    title: 'Plan & Research',
    color: '#F47B1F',
    items: [
      'Job Briefing',
      'Salary Benchmarking',
      'Market Map',
      'Build EVP',
      'Agree Recruitment Plan',
    ],
  },
  {
    number: '02',
    title: 'Identify & Engage',
    color: '#4BC4C4',
    items: [
      'Specialist Recruitment',
      'Digital & Social Sourcing',
      'Omni-Channel Comms',
      'Innovative Engagement',
      'Global Audience',
    ],
  },
  {
    number: '03',
    title: 'Screen & Interview',
    color: '#F47B1F',
    items: [
      'Competency interview',
      'Technical Testing',
      'Psychometric Profiling',
      'Cultural Fit Assessments',
      'Enhanced PES Checks',
    ],
  },
  {
    number: '04',
    title: 'Place & Manage',
    color: '#9B59B6',
    items: [
      'Offer Management',
      'Onboarding plan',
      'Temp Staff Management',
      'Management Information',
      'ED&I Monitoring',
    ],
  },
];

const OurProcess: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Badge icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
              <rect x="9" y="3" width="6" height="4" rx="1"/>
              <polyline points="9 12 11 14 15 10"/>
            </svg>
          }>Our Process</Badge>
          <h2 className={styles.title}>How We Work</h2>
          <p className={styles.subtitle}>
            A structured, transparent approach that keeps you informed at every stage — from first brief to successful placement.
          </p>
        </div>

        {/* Desktop only: circles + connectors in one perfectly-spaced row */}
        <div className={styles.track}>
          {STEPS.map((step, i) => (
            <React.Fragment key={step.number}>
              <div className={styles.trackNum} style={{ background: step.color }}>
                {step.number}
              </div>
              {i < STEPS.length - 1 && <div className={styles.connector} />}
            </React.Fragment>
          ))}
        </div>

        {/* Content: equal-width columns, no padding skew */}
        <div className={styles.content}>
          {STEPS.map((step) => (
            <div key={step.number} className={styles.step}>
              {/* Mobile only: circle rendered inside each step */}
              <div
                className={styles.mobileNum}
                style={{ background: step.color }}
              >
                {step.number}
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <ul className={styles.stepList}>
                {step.items.map((item) => (
                  <li key={item} className={styles.stepItem}>
                    <span className={styles.chevron} style={{ color: step.color }}>›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
