import React from "react"
import styles from "../styles/ShowcaseContent.module.scss"
import MessageCard from "./MessageCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

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
        <div className={styles.design__col}>
          <div className={styles.jobPost__shocase__wrapper}>
            <div className={styles.empty__spaces__wrapper}>
              <div className={styles.empty__space}></div>
              <div className={styles.empty__space}></div>
            </div>
            <div className={styles.jobPosting__position}>
              <FontAwesomeIcon icon={faSearch} />
              <span>Web Designer</span>
            </div>
            <div className={styles.jobPosting__location}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>New York</span>
            </div>
            <div className={styles.jobPosting__search}></div>
          </div>
          <div className={styles.available__designers__container}>
            <div className={styles.availableDesigner__wrapper}>
              <div className={styles.designer__circleAvatar}></div>
              <div className={styles.designer__info}>
                <div className={styles.emptyRow__1}></div>
                <div className={styles.emptyRow__2}>
                  <div className={styles.empty__field}></div>
                  <div className={styles.empty__field}></div>
                </div>
              </div>
              <div className={styles.designer__status}>
                <div className={styles.circle__status}></div>
                <span>Available</span>
              </div>
            </div>
            <div className={styles.availableDesigner__wrapper}>
              <div className={styles.designer__circleAvatar}></div>
              <div className={styles.designer__info}>
                <div className={styles.emptyRow__1}></div>
                <div className={styles.emptyRow__2}>
                  <div className={styles.empty__field}></div>
                  <div className={styles.empty__field}></div>
                </div>
              </div>
              <div className={styles.designer__status}>
                <div className={styles.circle__status}></div>
                <span>Available</span>
              </div>
            </div>
            <div className={styles.availableDesigner__wrapper}>
              <div className={styles.designer__circleAvatar}></div>
              <div className={styles.designer__info}>
                <div className={styles.emptyRow__1}></div>
                <div className={styles.emptyRow__2}>
                  <div className={styles.empty__field}></div>
                  <div className={styles.empty__field}></div>
                </div>
              </div>
              <div className={styles.designer__status}>
                <div className={styles.circle__status}></div>
                <span>Available</span>
              </div>
            </div>
          </div>
        </div>
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
            For Companies, We Offer
          </span>
          <h4>A Growing Pool of</h4>
          <h4>Top Talent</h4>
          <p>
            Save time by searching our Artists Community Database for
            pre‑qualified, top‑tier creative professionals, actively looking for
            work.
          </p>
        </div>
        <div className={styles.section2__cards__col}>
          <div className={styles.cardsWrapper}>
            <div className={styles.cardsCol}>
              <MessageCard />
              <MessageCard sent={true} />
            </div>
            <div className={styles.cardsCol}>
              <MessageCard sent={true} />
              <MessageCard />
            </div>
            <div className={styles.cardsCol}>
              <MessageCard />
              <MessageCard sent={true} />
            </div>
            <div className={styles.cardsCol}>
              <MessageCard sent={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
