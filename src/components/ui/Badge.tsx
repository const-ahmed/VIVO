import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children, className = '', icon }) => {
  return (
    <span className={`${styles.badge} ${className}`}>
      <span className={styles.icon}>
        {icon ?? <span style={{ opacity: 0.7 }}>✦</span>}
      </span>
      {children}
    </span>
  );
};

export default Badge;
