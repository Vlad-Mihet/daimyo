import React from "react"
import styles from "../styles/Header.module.scss"

export default function Header() {
  return (
    <div className={styles.header__wrapper}>
      <div className={styles.header}>
        <h3>Daimyo</h3>
        <div className={styles.header__buttons}>
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  )
}
