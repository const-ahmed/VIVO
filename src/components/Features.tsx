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
    title: 'Deep Analytics Insight',
    description:
      'Dive into your data\'s depths and extract valuable insights with our deep analytics feature, facilitating agile responses and advantages.',
  },
  {
    number: '02',
    title: 'Employment Portal Network',
    description:
      'Maximize your performance with our platform, providing access to a comprehensive database of potential candidates for your clients.',
  },
  {
    number: '03',
    title: 'Skill Assessment Tools',
    description:
      'Ensure precise candidate selection with our tailored assessment tool, enabling you to make informed hiring decisions confidently.',
  },
];

const ChartMockup: React.FC = () => {
  const maxVal = Math.max(...CHART_DATA.map((d) => d.value));
  return (
    <div className={styles.chart}>
      <div className={styles.chartHeader}>
        <div>
          <div className={styles.chartTitle}>Market Rate Insights</div>
          <div className={styles.chartSub}>View Designer salary rates in United States</div>
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
          <Badge>AI Features</Badge>
          <h2 className={styles.title}>AI-Enhanced Excellence</h2>
          <p className={styles.subtitle}>
            Experience unparalleled efficiency and precision as our AI-driven platform
            leverages extensive data analysis to deliver optimal outcomes.
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
                  <div className={styles.featureTitle}>
                    {feature.title}
                    <span className={styles.infoIcon}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                    </span>
                  </div>
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
