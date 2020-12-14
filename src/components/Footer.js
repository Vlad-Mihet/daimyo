import React from "react"
import styles from "../styles/Footer.module.scss"

export default function Footer() {
  return (
    <div className={styles.footer__wrapper}>
      <div className={styles.footer}>
        <div className={styles.footer__leftCol}>
          <div className={styles.brand__wrapper}>
            <img src={require("../images/samurai.png")} />
            <span>Daimyo</span>
          </div>
          <span>Designer Terms</span>
          <span>Privacy Policy</span>
          <span>Company Terms</span>
          <span>Terms Of Use</span>
        </div>
        <div className={styles.footer__rightCol}>
          <span>2020. Daimyo. All Rights Reserved</span>
        </div>
      </div>
    </div>
  )
}
