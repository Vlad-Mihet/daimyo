import React from "react"
import styles from "../styles/JoinUs.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

export default function JoinUs({ setShowModal }) {
  return (
    <div className={styles.joinUs__container}>
      <div className={styles.joinUs__wrapper}>
        <h4>Say hello to a more efficient way to hire creative talent</h4>
        <p>
          Sign up to post jobs, search for artists, and hire the world's best
          digital talent. Contact our recruiting experts with questions and
          comments
        </p>
        <Link to="https://forms.gle/6VPSNwjiuwVM9oYz8" target="_blank">
          <div className={styles.signupButton}>
            <span>SIGN UP</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </Link>
      </div>
    </div>
  )
}
