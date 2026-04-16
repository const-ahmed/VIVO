import React from 'react';
import styles from './DisclaimerModal.module.css';

interface Props {
  onAccept: () => void;
}

const DisclaimerModal: React.FC<Props> = ({ onAccept }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.badge}>Portfolio Project</div>

        <h2 className={styles.title}>This is an Unofficial Redesign</h2>

        <p className={styles.body}>
          This website is an independent, unsolicited redesign of{' '}
          <a
            href="https://vivotalent.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Vivo Talent Solutions
          </a>{' '}
          created solely for learning and portfolio purposes. It is not affiliated with,
          endorsed by, or representative of Vivo Talent Solutions Ltd in any way. All
          brand names, logos, and trademarks remain the property of their respective owners.
        </p>

        <p className={styles.body}>
          To visit the real Vivo Talent Solutions website, go to{' '}
          <a
            href="https://vivotalent.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            vivotalent.com
          </a>
          .
        </p>

        <button className={styles.button} onClick={onAccept}>
          I understand — continue
        </button>
      </div>
    </div>
  );
};

export default DisclaimerModal;
