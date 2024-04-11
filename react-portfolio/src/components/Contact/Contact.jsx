import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.leftSide}>
        <h2>Contact</h2>
        <p>Feel Free to Contact me !</p>
      </div>
      <ul>
        <li>
          <img src={getImageUrl("contact/emailIcon.png")} />
          <a href="mailto:amarvirgill06@gmail.com"> Amarvirgill06@gmail.com</a>
        </li>
        <li>
          <img
            className={styles.imgPhone}
            src={getImageUrl("contact/phoneIcon.png")}
          />
          <a href="tel:+1-647-574-8244">647-574-8244</a>
        </li>
        <li>
          <img src={getImageUrl("contact/githubIcon.png")} />
          <a href="https://www.github.com/AmarvirSingh">
            {" "}
            Amarvirgill06@gmail.com
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
