import React from 'react';
import styles from './FontComparison.module.css';

const FONTS = [
  { name: 'Playfair Display',    family: '"Playfair Display", Georgia, serif',  style: 'normal' },
  { name: 'Playfair Display (italic)', family: '"Playfair Display", Georgia, serif', style: 'italic' },
  { name: 'Cormorant Garamond',  family: '"Cormorant Garamond", Georgia, serif', style: 'normal' },
  { name: 'Cormorant Garamond (italic)', family: '"Cormorant Garamond", Georgia, serif', style: 'italic' },
  { name: 'DM Serif Display',    family: '"DM Serif Display", Georgia, serif',   style: 'normal' },
  { name: 'DM Serif Display (italic)', family: '"DM Serif Display", Georgia, serif', style: 'italic' },
  { name: 'EB Garamond',         family: '"EB Garamond", Georgia, serif',         style: 'normal' },
  { name: 'Libre Baskerville',   family: '"Libre Baskerville", Georgia, serif',   style: 'normal' },
  { name: 'Lora',                family: '"Lora", Georgia, serif',                style: 'normal' },
  { name: 'Bodoni Moda',         family: '"Bodoni Moda", Georgia, serif',         style: 'normal' },
  { name: 'Abril Fatface',       family: '"Abril Fatface", Georgia, serif',       style: 'normal' },
  { name: 'Crimson Pro',         family: '"Crimson Pro", Georgia, serif',         style: 'normal' },
];

const HEADLINE = 'Connecting People, Fuelling Success';

const FontComparison: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <span className={styles.bannerTag}>DEV ONLY</span>
          Font comparison — h1 headline across all candidate serifs
        </div>
        {FONTS.map((font) => (
          <div key={font.name} className={styles.row}>
            <div className={styles.label}>{font.name}</div>
            <h1
              className={styles.headline}
              style={{ fontFamily: font.family, fontStyle: font.style }}
            >
              {HEADLINE}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FontComparison;
