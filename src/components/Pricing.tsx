import React, { useState } from 'react';
import Badge from './ui/Badge';
import Button from './ui/Button';
import styles from './Pricing.module.css';

const STARTER_FEATURES = [
  'Manage up to 10 job vacancies simultaneously',
  'Unlimited candidates management',
  'Email Integration for communication management',
  'Automatic notifications for new candidates',
];

const ENTERPRISE_FEATURES = [
  'Everything in Starter Plan',
  'Advanced candidate search and filtering',
  'Advanced reporting capabilities',
  'Access to our candidate database',
];

const CheckIcon: React.FC<{ light?: boolean }> = ({ light }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill={light ? 'rgba(255,255,255,0.15)' : 'var(--green-light)'} />
    <path
      d="M8 12l3 3 5-5"
      stroke={light ? 'white' : 'var(--green)'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const starterPrice = isYearly ? 39 : 49;
  const enterprisePrice = isYearly ? 159 : 199;
  const starterFirst = isYearly ? 8 : 10;
  const enterpriseFirst = isYearly ? 32 : 40;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Badge>Pricing Plans</Badge>
          <h2 className={styles.title}>Choose Your Preferred Plan</h2>
          <p className={styles.subtitle}>
            Select the plan that best fits your needs and budget to get started.
          </p>
        </div>

        <div className={styles.toggle}>
          <div
            className={styles.toggleSlider}
            style={{ transform: isYearly ? 'translateX(100%)' : 'translateX(0)' }}
          />
          <button
            className={`${styles.toggleBtn} ${!isYearly ? styles.toggleBtnActive : ''}`}
            onClick={() => setIsYearly(false)}
          >
            Pay monthly
          </button>
          <button
            className={`${styles.toggleBtn} ${isYearly ? styles.toggleBtnActive : ''}`}
            onClick={() => setIsYearly(true)}
          >
            Pay yearly
            <span
              className={styles.saveBadge}
              style={{ opacity: isYearly ? 1 : 0, transform: isYearly ? 'scale(1)' : 'scale(0.8)' }}
            >
              Save 20%
            </span>
          </button>
        </div>

        <div className={styles.plans}>
          {/* Starter */}
          <div className={styles.plan}>
            <div className={styles.planTop}>
              <div className={styles.firstMonth}>${starterFirst} for your first month</div>
              <div className={styles.planName}>Starter</div>
              <div className={styles.planAudience}>For individuals or small startup</div>
              <div className={styles.planPrice}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>{starterPrice}</span>
                <span className={styles.period}>/mo</span>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.planFeatures}>
              <div className={styles.featuresLabel}>What you get:</div>
              {STARTER_FEATURES.map((f) => (
                <div key={f} className={styles.featureRow}>
                  <CheckIcon />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <Button variant="primary" size="lg" className={styles.planBtn}>
              Start free trial
            </Button>
          </div>

          {/* Enterprise */}
          <div className={`${styles.plan} ${styles.planDark}`}>
            <div className={styles.planTop}>
              <div className={`${styles.firstMonth} ${styles.firstMonthLight}`}>
                ${enterpriseFirst} for your first month
              </div>
              <div className={styles.planName}>Enterprise</div>
              <div className={`${styles.planAudience} ${styles.planAudienceLight}`}>
                For big recruitment agencies
              </div>
              <div className={styles.planPrice}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>{enterprisePrice}</span>
                <span className={`${styles.period} ${styles.periodLight}`}>/mo</span>
              </div>
            </div>

            <div className={`${styles.divider} ${styles.dividerLight}`} />

            <div className={styles.planFeatures}>
              <div className={`${styles.featuresLabel} ${styles.featuresLabelLight}`}>
                What you get:
              </div>
              {ENTERPRISE_FEATURES.map((f) => (
                <div key={f} className={`${styles.featureRow} ${styles.featureRowLight}`}>
                  <CheckIcon light />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <Button variant="primary" size="lg" className={styles.planBtn}>
              Start free trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
