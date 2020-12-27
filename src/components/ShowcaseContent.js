import React from "react"
import styles from "../styles/ShowcaseContent.module.scss"
import Monokuma from "./Monokuma"
import Squirtle from "./Squirtle"
import Neptunia from "./Neptunia"

export default function ShowcaseContent() {
  return (
    <div className={styles.whatMakesUsDifferent__container}>
      <div className={styles.section__header}>
        <h3>What makes us different?</h3>
        <p>
          Our streamlined, industry-savvy process speeds up recruiting and
          staffing projects, and lets you get back quickly to what you do best -
          <span> designing</span>.{" "}
        </p>
      </div>
      <div className={styles.showcase__content}>
        <Monokuma />
        <div className={styles.textContent__col}>
          <span className={styles.companiesOfferings}>
            For Companies, We Offer
          </span>
          <h4>A Premium</h4>
          <h4>Job Posting Tool</h4>
          <p>
            Save effort by using our instant Job Post tool to reach the best
            candidates, ensuring you find the most qualified talent for your
            creative team.
          </p>
        </div>
      </div>
      <div className={styles.showcase__content__section2}>
        <div className={styles.section2__textContent__col}>
          <span className={styles.companiesOfferings}>
            For Companies, We Provide
          </span>
          <h4>A Growing Pool of</h4>
          <h4>Top Talent</h4>
          <p>
            Save time by searching our Artists Community Database for
            pre‑qualified, top‑tier creative professionals, actively looking for
            work.
          </p>
        </div>
        <Squirtle />
      </div>
      <div className={styles.showcase__content__section3}>
        <Neptunia />
        <div className={styles.section3__textContent__col}>
          <span className={styles.companiesOfferings}>
            For Companies, We Created
          </span>
          <h4>A Streamlined</h4>
          <h4>Hiring Process</h4>
          <p>
            Save time by quickly moving through the recruiting process and
            hiring your new team member.
          </p>
        </div>
      </div>
    </div>
  )
}
