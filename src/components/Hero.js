import React from "react"
import styles from "../styles/Hero.module.scss"

export default function Hero({ setShowModal }) {
  return (
    <div className={styles.hero__container}>
      <div className={styles.intro__header}>
        <h3>
          Find Your Next <span>Rockstar Designer</span>
        </h3>
        <p>
          Hiring your next great <span>artist</span> or <span>animator</span>{" "}
          can be challenging. Sign up to create Job Posts or search Daimyo, a
          growing artists community of pre-qualified, professional creative
          talent.
        </p>
        <a
          href="https://forms.gle/6VPSNwjiuwVM9oYz8"
          target="_blank"
          rel="noreferrer"
        >
          Join
        </a>
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper1}>
        <img src={"/images/1.jpg"} alt="" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper2}>
        <img src={"/images/2.jpg"} alt="" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper3}>
        <img src={"/images/3.jpg"} alt="" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper4}>
        <img src={"/images/4.jpg"} alt="" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper5}>
        <img src={"/images/5.jpg"} alt="" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper6}>
        <img src={"/images/6.jpg"} alt="" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper7}>
        <img src={"/images/7.jpg"} alt="" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper8}>
        <img src={"/images/8.jpg"} alt="" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper9}>
        <img src={"/images/9.jpg"} alt="" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper10}>
        <img src={"/images/10.jpg"} alt="" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper11}>
        <img src={"/images/11.jpg"} alt="" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper12}>
        <img src={"/images/12.jpg"} alt="" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper13}>
        <img src={"/images/13.jpg"} alt="" />
      </div>
    </div>
  )
}
