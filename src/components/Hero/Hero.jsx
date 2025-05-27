import React from "react";

import styles from "./Hero.module.css";
//import { getImageUrl } from "../../utils";
import heroImage from "../../assets/hero/img.webp";




export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm SHREYAS N</h1>
        <p className={styles.description}>
         Cyber Security Intern with hands-on experience in penetration testing, network analysis, and ethical hacking using tools like Kali Linux, airmon-ng, and Nikto 
        </p>
        <a href="mailto:shreyushreyas751@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      
     <img src={heroImage} alt="Hero image" className={styles.heroImg} />;
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
