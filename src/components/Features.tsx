import React from 'react';
import Badge from './ui/Badge';
import styles from './Features.module.css';

const CHART_DATA = [
  { label: 'Q1 23', value: 55, highlight: false },
  { label: 'Q2 23', value: 70, highlight: false },
  { label: 'Q3 23', value: 48, highlight: false },
  { label: 'Q4 23', value: 82, highlight: false },
  { label: 'Q1 24', value: 65, highlight: false },
  { label: 'Q2 24', value: 93, highlight: true },
  { label: 'Q3 24', value: 76, highlight: false },
];

const FEATURES = [
  {
    number: '01',
    title: 'Tech & Digital',
    description: 'Finding the best technology and digital talent from across the globe.',
  },
  {
    number: '02',
    title: 'HR & Operations',
    description: 'Providing highly talented HR & finance professionals across the UK.',
  },
  {
    number: '03',
    title: 'Sales & Marketing',
    description: 'Helping clients build their sales and marketing capability with the best talent.',
  },
  {
    number: '04',
    title: 'Banking & Finance',
    description: 'Sourcing top-tier banking and financial services talent to support institutions across the UK.',
  },
];

const ChartMockup: React.FC = () => {
  const maxVal = Math.max(...CHART_DATA.map((d) => d.value));
  return (
    <div className={styles.chart}>
      <div className={styles.chartHeader}>
        <div>
          <div className={styles.chartTitle}>Salary Benchmarking</div>
          <div className={styles.chartSub}>Current market rates for roles across the UK</div>
        </div>
      </div>
      <div className={styles.chartBars}>
        {CHART_DATA.map((d) => (
          <div key={d.label} className={styles.chartBarCol}>
            <div className={styles.barWrapper}>
              {d.highlight && (
                <div className={styles.tooltip}>${Math.round(d.value * 1.2)}k</div>
              )}
              <div
                className={`${styles.bar} ${d.highlight ? styles.barActive : ''}`}
                style={{ height: `${(d.value / maxVal) * 100}%` }}
              />
            </div>
            <span className={styles.barLabel}>{d.label}</span>
          </div>
        ))}
      </div>
      <div className={styles.chartLegend}>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} style={{ background: '#F47B1F' }} />
          <span>Current</span>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} style={{ background: '#e5e7eb' }} />
          <span>Previous</span>
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Badge icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="6"/>
              <circle cx="12" cy="12" r="2"/>
            </svg>
          }>Our Specialisms</Badge>
          <h2 className={styles.title}>Deep Expertise Across Key Sectors</h2>
          <p className={styles.subtitle}>
            Our specialist consultants recruit exclusively within their sectors, giving you access
            to networks and market knowledge built over years of focused work.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.left}>
            <ChartMockup />
          </div>

          <div className={styles.right}>
            {FEATURES.map((feature) => (
              <div key={feature.number} className={styles.featureItem}>
                <div className={styles.featureNum}>{feature.number}</div>
                <div className={styles.featureContent}>
                  <div className={styles.featureTitle}>{feature.title}</div>
                  <p className={styles.featureDesc}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
