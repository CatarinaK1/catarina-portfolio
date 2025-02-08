import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import React from "react";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Catarina</h1>
        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, magni
          eaque atque dolorum qui totam maiores possimus eos molestiae, quae,
          nulla consectetur hic necessitatibus pariatur quo vitae.
          Exercitationem, aut consequuntur!
        </p>
        <a href="mailto:myemail<2gmail.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      ></img>
      <div className={styles.topBLur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
