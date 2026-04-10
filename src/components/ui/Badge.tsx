import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <span className={`${styles.badge} ${className}`}>
      <span style={{ opacity: 0.7 }}>✦</span> {children}
    </span>
  );
};

export default Badge;
