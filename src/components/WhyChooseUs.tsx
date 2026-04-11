import React from 'react';
import Badge from './ui/Badge';
import styles from './WhyChooseUs.module.css';

// Roles that span Vivo's actual specialisms
const VACANCY_ITEMS = [
  { title: 'Head of Digital',    color: '#F59E0B', badge: 'Active',  active: true  },
  { title: 'Finance Manager',    color: '#7C3AED', badge: 'Active',  active: true  },
  { title: 'HR Business Partner',color: '#10B981', badge: 'Active',  active: true  },
  { title: 'Sales Director',     color: '#F97316', badge: 'Filled',  active: false },
];

const VacancyMockup: React.FC = () => (
  <div className={styles.mockup}>
    <div className={styles.mockupHeader}>
      <div className={styles.mockupDot} style={{ background: '#F47B1F' }} />
      <div className={styles.mockupDot} style={{ background: '#e5e5e5' }} />
      <div className={styles.mockupDot} style={{ background: '#e5e5e5' }} />
    </div>
    {VACANCY_ITEMS.map(({ title, color, badge, active }) => (
      <div key={title} className={styles.mockupRow}>
        <div className={styles.mockupIcon} style={{ background: color + '22', border: `1px solid ${color}44` }}>
          <span style={{ display: 'block', width: '10px', height: '10px', borderRadius: '2px', background: color, margin: '0 auto', marginTop: '6px' }} />
        </div>
        <div className={styles.mockupText}>
          <div className={styles.mockupTitle}>{title}</div>
          <div className={styles.mockupSub}>UK · Permanent</div>
        </div>
        <div
          className={styles.mockupBadge}
          style={{
            background: active ? '#f0f8e8' : '#f3f4f6',
            color: active ? '#5a8a00' : '#6b7280',
          }}
        >
          {badge}
        </div>
      </div>
    ))}
  </div>
);

const CandidateMockup: React.FC = () => (
  <div className={styles.mockup}>
    <div className={styles.candidateCardDark}>
      <div className={styles.candidateAvatarDark}>AI</div>
      <div className={styles.candidateInfoDark}>
        <div className={styles.candidateNameDark}>Antonios Ilias</div>
        <div className={styles.candidateRoleDark}>Head of Digital · London</div>
      </div>
    </div>
    <div className={styles.candidateQuote}>
      "Her knack for understanding what we need and delivering the right fit is unmatched. Prompt, professional, and a pleasure to work with."
    </div>
    <div className={styles.candidateActionsRow}>
      <div className={styles.actionBtnDark} style={{ background: 'var(--green)', color: 'var(--black)' }}>Shortlist</div>
      <div className={styles.actionBtnDark} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.5)' }}>Decline</div>
    </div>
  </div>
);

const HiringMockup: React.FC = () => {
  const stages = [
    { label: 'Applied',    count: 48, pct: 100 },
    { label: 'Screening',  count: 24, pct: 50  },
    { label: 'Interview',  count: 12, pct: 25  },
    { label: 'Offer',      count:  4, pct:  8  },
    { label: 'Placed',     count:  2, pct:  4  },
  ];
  return (
    <div className={`${styles.mockup} ${styles.hiringMockup}`}>
      <div className={styles.mockupHeader}>
        <span className={styles.mockupHeadTitle}>Search Progress</span>
      </div>
      <div className={styles.stageList}>
        {stages.map((s) => (
          <div key={s.label} className={styles.stageRow}>
            <span className={styles.stageLabel}>{s.label}</span>
            <div className={styles.stageBarBg}>
              <div className={styles.stageBar} style={{ width: `${s.pct}%` }} />
            </div>
            <span className={styles.stageCount}>{s.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SERVICES = [
  {
    id: 'permanent',
    title: 'Permanent Staffing',
    description: 'We connect you with exceptional talent in technology & digital, HR & finance, and sales & marketing. Our recruiters work closely with you to attract and retain high-calibre candidates both active and passive – while showcasing your employer brand.',
    Mockup: VacancyMockup,
    dark: false,
  },
  {
    id: 'temporary',
    title: 'Temporary Staffing',
    description: 'Flexible, compliant, and fast we provide top-tier contractors to power business-critical projects. Our expert consultants tailor each search to your needs, ensuring you get the right talent, right when you need it.',
    Mockup: CandidateMockup,
    dark: true,
  },
  {
    id: 'demand',
    title: 'Talent on Demand',
    description: 'A flexible, scalable, and cost-effective solution that integrates seamlessly with your business. We embed ourselves in your team to deliver workforce strategies, attract top talent, and support everything from single projects to full outsourcing.',
    Mockup: HiringMockup,
    dark: false,
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Badge icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          }>Our Services</Badge>
          <h2 className={styles.title}>Full-Service Recruitment, Built Around You</h2>
          <p className={styles.subtitle}>
            From permanent hires to contract teams and senior appointments, Vivo delivers expert
            recruitment tailored to your business and sector.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map(({ id, title, description, Mockup, dark }) => (
            <div key={id} className={`${styles.card} ${dark ? styles.cardDark : ''}`}>
              <div className={`${styles.cardMockup} ${dark ? styles.cardMockupDark : ''}`}>
                <Mockup />
              </div>
              <div className={styles.cardContent}>
                <h3 className={`${styles.cardTitle} ${dark ? styles.cardTitleDark : ''}`}>{title}</h3>
                <p className={`${styles.cardDesc} ${dark ? styles.cardDescDark : ''}`}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
