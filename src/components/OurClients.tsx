import React from 'react';
import styles from './OurClients.module.css';

const CLIENTS = [
  { name: 'EasyJet',             src: '/EasyJet-logo.png' },
  { name: 'Unity Trust Bank',    src: '/Unity-logo.png' },
  { name: 'Oodles',              src: '/ooodle-logo.png' },
  { name: 'Birmingham Bank',     src: '/birmingham-bank-logo.png' },
  { name: 'Thorlux Lighting',    src: '/Thorlux-logo.png' },
  { name: 'FossLED',             src: '/fossLed-logo.png' },
  { name: 'Quell',               src: '/quell-logo.png' },
  { name: 'University of Birmingham', src: '/university-logo.png' },
];

const OurClients: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.slashes}>//</span>
          <span className={styles.headingText}>Our Clients</span>
        </div>
        <div className={styles.grid}>
          {CLIENTS.map((client) => (
            <div key={client.name} className={styles.logoWrap}>
              <img
                src={client.src}
                alt={client.name}
                className={styles.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
