import React from "react"
import styles from "../styles/Hero.module.scss"

export default function Hero() {
  return (
    <div className={styles.hero__container}>
      <div data-speed="5" className={styles.hero__image__wrapper1}>
        <img src={require(`../images/1.jpg`)} alt="1" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper2}>
        <img src={require(`../images/2.jpg`)} alt=" 2" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper3}>
        <img src={require(`../images/3.jpg`)} alt=" 3" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper4}>
        <img src={require(`../images/4.jpg`)} alt="4" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper5}>
        <img src={require(`../images/5.jpg`)} alt="5" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper6}>
        <img src={require(`../images/6.jpg`)} alt="6" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper7}>
        <img src={require(`../images/7.jpg`)} alt="7" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper8}>
        <img src={require(`../images/8.jpg`)} alt="8" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper9}>
        <img src={require(`../images/9.jpg`)} alt="9" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper10}>
        <img src={require(`../images/10.jpg`)} alt="10" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper11}>
        <img src={require(`../images/11.jpg`)} alt="11" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper12}>
        <img src={require(`../images/12.jpg`)} alt="12" />
      </div>
      <div data-speed="5" className={styles.hero__image__wrapper13}>
        <img src={require(`../images/13.jpg`)} alt="13" />
      </div>
    </div>
  )
}
