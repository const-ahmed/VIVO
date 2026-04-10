import React from 'react';
import styles from './LogoBar.module.css';

const CAROUSEL_LOGOS = [
  { name: 'Liberty',        src: '/carousel/Liberty-logo.png' },
  { name: 'NFU Mutual',     src: '/carousel/NFU-Mutual-Logo.png' },
  { name: 'Bookinglab',     src: '/carousel/bookinglab-logo.png' },
  { name: 'Causeway',       src: '/carousel/causeway-logo.png' },
  { name: 'Chemify',        src: '/carousel/chemify-logo.png' },
  { name: 'Dextra',         src: '/carousel/dextra-logo.png' },
  { name: 'EE',             src: '/carousel/ee-logo.png' },
  { name: 'Famostar',       src: '/carousel/famostar-logo.jpg' },
  { name: 'Grafton',        src: '/carousel/grafton-logo.png' },
  { name: 'Lightronics',    src: '/carousel/lightronics-logo.png' },
  { name: 'Metsec',         src: '/carousel/metsec-logo.png' },
  { name: 'Novacroft',      src: '/carousel/novacroft-logo.png' },
  { name: 'Reply',          src: '/carousel/reply-logo.png' },
  { name: 'Wates',          src: '/carousel/wates-logo.png' },
  { name: 'WealthWizards',  src: '/carousel/wealthwizards-logo.png' },
];

const LogoBar: React.FC = () => {
  // Duplicate for seamless loop — animation moves exactly -50% (one full set)
  const doubled = [...CAROUSEL_LOGOS, ...CAROUSEL_LOGOS];

  return (
    <section className={styles.section}>
      <p className={styles.label}>Used by 1,000+ recruitment agencies worldwide</p>
      <div className={styles.track}>
        <div className={styles.inner}>
          {doubled.map((logo, i) => (
            <div key={i} className={styles.item}>
              <img src={logo.src} alt={logo.name} className={styles.logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBar;
