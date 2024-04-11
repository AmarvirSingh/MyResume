import React from "react";
import styles from "../Hero/Hero.module.css";
import { getImageUrl } from "../../utils";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Amarvir Singh</h1>
        <p className={styles.description}>
          I am a learning react as of now but I have over 2 years of experience
          as food service supervisor. My goal is to join company as front end
          devloper.{" "}
        </p>
        <a className={styles.contactBtn} href="mailto:amarvirgill06@gmail.com">
          Contact Me
        </a>
      </div>
      <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
