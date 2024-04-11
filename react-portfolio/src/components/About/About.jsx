import React from "react";
import { getImageUrl } from "../../utils";
import styles from "../About/About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with laptop"
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Food Supervisor</h3>
              <p>
                I have almost a couple of years of experience as Food service
                supervisor. As a supervisor, I help my employees in make right
                sandwich everytime. Durig my supervision i have increased store
                sales by 20% with interpersonal skills and considering food
                standards
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Expierenced in Programming</h3>
              <p>
                I alwways love programming. During my learnig curve I gained
                knowledge of various programming languages from c++ - java -
                html - css - javascript and now react.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Customer Service Representative</h3>
              <p>
                I have gained experience as CSR from my various jobs like from
                cashier job at Becker, Baker at Tim hortons and mostly from
                Subway where I worked to uplift store reputation.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
