import React from 'react';
import styles from './PageHeader.module.css';

const PageHeader = ({ title, path, link }) => {
  return (
    <section className={styles.pageHeader}>
      <h1>{title}</h1>
    </section>
  );
};

export default PageHeader;
