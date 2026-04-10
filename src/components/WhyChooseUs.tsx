import React from 'react';
import Badge from './ui/Badge';
import styles from './WhyChooseUs.module.css';

const VACANCY_ITEMS = [
  { title: 'React Developer', color: '#F59E0B', badge: 'Active', active: true },
  { title: 'UI/UX Designer', color: '#7C3AED', badge: 'Paused', active: false },
  { title: 'Data Analyst', color: '#10B981', badge: 'Active', active: true },
  { title: 'DevOps Engineer', color: '#F97316', badge: 'Active', active: true },
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
          <div className={styles.mockupSub}>12 applications · Remote</div>
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
      <div className={styles.candidateAvatarDark}>NT</div>
      <div className={styles.candidateInfoDark}>
        <div className={styles.candidateNameDark}>Nicolas Themis</div>
        <div className={styles.candidateRoleDark}>UI/UX Designer · New York</div>
      </div>
    </div>
    <div className={styles.candidateQuote}>
      Nicolas has made us his preferred choice, benefiting from our innovative solutions...
    </div>
    <div className={styles.candidateActionsRow}>
      <div className={styles.actionBtnDark} style={{ background: 'var(--green)', color: 'var(--black)' }}>Shortlist</div>
      <div className={styles.actionBtnDark} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.5)' }}>Decline</div>
    </div>
  </div>
);

const HiringMockup: React.FC = () => {
  const stages = [
    { label: 'Applied', count: 48, pct: 100 },
    { label: 'Screening', count: 24, pct: 50 },
    { label: 'Interview', count: 12, pct: 25 },
    { label: 'Offer', count: 4, pct: 8 },
    { label: 'Hired', count: 2, pct: 4 },
  ];
  return (
    <div className={`${styles.mockup} ${styles.hiringMockup}`}>
      <div className={styles.mockupHeader}>
        <span className={styles.mockupHeadTitle}>Hiring Stages</span>
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

const FEATURES = [
  {
    id: 'vacancies',
    title: 'Vacancies Management',
    description: 'Simplify your hiring process with our intuitive job vacancies management tool.',
    Mockup: VacancyMockup,
    dark: false,
  },
  {
    id: 'candidates',
    title: 'Candidates Management',
    description: 'Efficiently organize and assess candidate profiles with our platform.',
    Mockup: CandidateMockup,
    dark: true,
  },
  {
    id: 'hiring',
    title: 'Hiring Management',
    description: 'Optimize your recruitment workflow with our efficient hiring management solution.',
    Mockup: HiringMockup,
    dark: false,
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Badge>Why Choose Us</Badge>
          <h2 className={styles.title}>Preferred Option Among Recruiters</h2>
          <p className={styles.subtitle}>
            Join the ranks of recruiters who have made us their preferred choice, benefiting from
            our innovative solutions and unparalleled support.
          </p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map(({ id, title, description, Mockup, dark }) => (
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
