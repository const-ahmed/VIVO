import React from 'react';
import styles from './DashboardMockup.module.css';

const VACANCIES = [
  { title: 'Marketing Specialist', company: 'Company', type: 'Remote', applications: 12 },
  { title: 'Financial Analyst', company: 'Company', type: 'Hybrid', applications: 8 },
  { title: 'Project Manager', company: 'Company', type: 'Onsite', applications: 23 },
  { title: 'Graphic Designer', company: 'Company', type: 'Remote', applications: 16 },
  { title: 'Data Engineer', company: 'Company', type: 'Remote', applications: 31 },
  { title: 'Software Developer', company: 'Company', type: 'Hybrid', applications: 19 },
];

const SIDEBAR_ITEMS = [
  { label: 'Dashboard', active: true },
  { label: 'Vacancies' },
  { label: 'Ongoing Recruitment' },
  { label: 'Candidates' },
  { label: 'Interviews' },
  { label: 'Analytics' },
];

const INDUSTRY_INSIGHTS = [
  { label: 'Technology', value: 78 },
  { label: 'Finance', value: 62 },
  { label: 'Healthcare', value: 55 },
  { label: 'Marketing', value: 48 },
  { label: 'Engineering', value: 70 },
];

const DashboardMockup: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.browser}>
        <div className={styles.browserBar}>
          <div className={styles.dots}>
            <span className={styles.dot} style={{ background: '#FF5F57' }} />
            <span className={styles.dot} style={{ background: '#FEBC2E' }} />
            <span className={styles.dot} style={{ background: '#28C840' }} />
          </div>
          <div className={styles.urlBar}>vivotalent.com/dashboard</div>
        </div>

        <div className={styles.dashboard}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarLogo}>Vivo.</div>
            <div className={styles.sidebarUser}>
              <div className={styles.avatar} style={{ background: '#F47B1F' }}>AH</div>
              <div>
                <div className={styles.userName}>Alex Holland</div>
                <div className={styles.userRole}>Recruiter</div>
              </div>
            </div>
            <nav className={styles.sidebarNav}>
              {SIDEBAR_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className={`${styles.sidebarItem} ${item.active ? styles.sidebarItemActive : ''}`}
                >
                  {item.label}
                </div>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main className={styles.main}>
            {/* Header */}
            <div className={styles.mainHeader}>
              <div>
                <div className={styles.greeting}>Hello, Alex Holland</div>
                <div className={styles.greetingSub}>Monday, 12 June 2024</div>
              </div>
              <div className={styles.headerActions}>
                <div className={styles.notifBtn}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </div>
                <div className={styles.msgBtn}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Upcoming Interview */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardTitle}>Upcoming Interview</span>
                <span className={styles.viewAll}>View all</span>
              </div>
              <div className={styles.interviewItem}>
                <div className={styles.interviewAvatar}>NT</div>
                <div className={styles.interviewInfo}>
                  <div className={styles.interviewName}>Nicolas Thierry</div>
                  <div className={styles.interviewMeta}>UX Designer · 11:00 AM – 11:30 AM</div>
                </div>
                <div className={styles.interviewTags}>
                  <span className={styles.tag} style={{ background: '#f0f8e8', color: '#5a8a00' }}>Yearly</span>
                  <span className={styles.statChip}>312 ✓ pipeline</span>
                </div>
              </div>
            </div>

            {/* Two columns: Vacancies + Industries */}
            <div className={styles.twoCol}>
              {/* Current Vacancies */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardTitle}>Current Vacancies</span>
                  <span className={styles.viewAll}>See all</span>
                </div>
                <div className={styles.vacancyList}>
                  {VACANCIES.map((v) => (
                    <div key={v.title} className={styles.vacancyItem}>
                      <div className={styles.vacancyIcon} />
                      <div className={styles.vacancyInfo}>
                        <div className={styles.vacancyTitle}>{v.title}</div>
                        <div className={styles.vacancyMeta}>{v.type}</div>
                      </div>
                      <span className={styles.vacancyCount}>{v.applications}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries Insight */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardTitle}>Industries Insight</span>
                </div>
                <div className={styles.insightList}>
                  {INDUSTRY_INSIGHTS.map((item) => (
                    <div key={item.label} className={styles.insightItem}>
                      <span className={styles.insightLabel}>{item.label}</span>
                      <div className={styles.insightBarBg}>
                        <div
                          className={styles.insightBar}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                      <span className={styles.insightValue}>{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
