import React from "react";
import styles from "./Experience.module.css";
import data from "../../data/exp.json";
import { getImageUrl } from "../../utils";

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h3 className={styles.title}>Experience</h3>
      <div className={styles.content}>
        <ul className={styles.expItems}>
          {data.map((d, id) => {
            return (
              <li key={id} className={styles.expItem}>
                <div className={styles.imageSide}>
                  <img src={getImageUrl(d.imgsrc)} alt={d.oraganization} />
                </div>
                <div className={styles.description}>
                  <h3>
                    {d.title} at {d.oraganization}
                  </h3>
                  <p>
                    {d.startDate} - {d.endDate}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
