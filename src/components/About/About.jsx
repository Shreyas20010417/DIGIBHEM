import React from "react";
import styles from "./About.module.css";

// Import images directly
import aboutImage from "../../assets/about/aboutImage.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
  <li className={styles.aboutItem}>
    <img src={cursorIcon} alt="Security icon" />
    <div className={styles.aboutItemText}>
      <h3>Cybersecurity Enthusiast</h3>
      <p>
        I'm passionate about protecting digital environments through ethical hacking,
        vulnerability assessments, and network security practices.
      </p>
    </div>
  </li>
  <li className={styles.aboutItem}>
    <img src={serverIcon} alt="Pentesting icon" />
    <div className={styles.aboutItemText}>
      <h3>Ethical Hacker & Pen Tester</h3>
      <p>
        Experienced in simulating attacks, performing Wi-Fi and system penetration testing,
        and analyzing security risks using Kali Linux tools.
      </p>
    </div>
  </li>
  <li className={styles.aboutItem}>
    <img src={cursorIcon} alt="Tool icon" />
    <div className={styles.aboutItemText}>
      <h3>Security Tools Analyst</h3>
      <p>
        Skilled with tools like Nmap, Wireshark, Burp Suite, and Metasploit to perform
        scans, sniff traffic, and test for common vulnerabilities.
      </p>
    </div>
  </li>
  <li className={styles.aboutItem}>
    <img src={serverIcon} alt="Python icon" />
    <div className={styles.aboutItemText}>
      <h3>Security Script Developer</h3>
      <p>
        Built automated tools using Python for packet sniffing, password analysis, and
        vulnerability scanning to improve system defenses.
      </p>
    </div>
  </li>
</ul>

      </div>
    </section>
  );
};
