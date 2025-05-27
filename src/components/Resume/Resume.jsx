import React from 'react';
import styles from './Resume.module.css';


const Resume = () => {
  return (
    <div className={styles.resumeContainer}>
      <h2 className={styles.resumeTitle}>My Resume</h2>
      <div className={styles.resumeButtons}>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewBtn}
        >
          View Resume
        </a>
        <a
          href="/resume.pdf"
          download
          className={styles.downloadBtn}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
