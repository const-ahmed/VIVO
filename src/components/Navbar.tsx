import React, { useState } from 'react';
import Button from './ui/Button';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
  { label: 'Services', hasDropdown: false },
  { label: 'Specialisms', hasDropdown: false },
  { label: 'About', hasDropdown: false },
  { label: 'Pricing', hasDropdown: false },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <img src="/vivo-logo.png" alt="Vivo Talent Solutions" className={styles.logoImg} />
        </a>

        <ul className={styles.links}>
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a href="#" className={styles.link}>
                {item.label}
                {item.hasDropdown && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a href="#" className={styles.signIn}>Sign in</a>
          <Button variant="primary" size="sm">Sign up</Button>
        </div>

        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href="#" className={styles.mobileLink}>
              {item.label}
            </a>
          ))}
          <div className={styles.mobileActions}>
            <a href="#" className={styles.signIn}>Sign in</a>
            <Button variant="primary" size="sm">Sign up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
