import React from "react"
import styles from "../styles/Subscription.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default function Subscription() {
  return (
    <div className={styles.subscription__container}>
      <h4 className={styles.header}>Choose What Suits You</h4>
      <div className={styles.subscriptions__wrapper}>
        <div className={styles.subscriptionBlock}>
          <div className={styles.block__header}>
            <div className={styles.header__top}>
              <div className={styles.subscription__title}>
                <span>Efficient One-Time Listing</span>
                <span>Single Job Post</span>
              </div>
              <span className={styles.subscriptionPrice}>$199</span>
            </div>
            <p>
              Accessible by all talented designers in the Daimyo Designers
              Community
            </p>
          </div>
          <div className={styles.block__content}>
            <div className={styles.subscription__benefits__container}>
              <div className={styles.benefit__wrapper}>
                <FontAwesomeIcon icon={faCheck} />
                <p>
                  One Job Post listed on Daimyo Designers talent section (30-day
                  lifetime)
                </p>
              </div>
              <div className={styles.benefit__wrapper}>
                <FontAwesomeIcon icon={faCheck} />
                <p>
                  One Daymio article mention of Job Post Boosted on Social
                  Media.
                </p>
              </div>
              <div className={styles.benefit__wrapper}>
                <FontAwesomeIcon icon={faCheck} />
                <p>
                  Inclusion in the featured Job Posts section of our weekly
                  newsletters
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subscriptionBlock}>
          <div className={styles.block__header}>
            <div className={styles.header__top}>
              <div className={styles.subscription__title}>
                <span>Best For Finding Jobs</span>
                <span>Unlimited Job Posts</span>
              </div>
              <span className={styles.subscriptionPrice}>$399</span>
            </div>
            <p>
              An Affordable Package In Order To Help Talented Designers Take On
              More Jobs
            </p>
          </div>
          <div className={styles.block__content}>
            <div className={styles.subscription__benefits__container}>
              <div className={styles.benefit__wrapper}>
                <FontAwesomeIcon icon={faCheck} />
                <p>Unlimited Job Postings Listed On Daimyo's Talent Section</p>
              </div>
              <div className={styles.benefit__wrapper}>
                <FontAwesomeIcon icon={faCheck} />
                <p>
                  One Daymio article mention of Job Post Boosted on Social
                  Media.
                </p>
              </div>
              <div className={styles.benefit__wrapper}>
                <FontAwesomeIcon icon={faCheck} />
                <p>
                  Inclusion in the featured Job Posts section of our weekly
                  newsletters
                </p>
              </div>
              <div className={styles.benefit__wrapper}>
                <FontAwesomeIcon icon={faCheck} />
                <p>One Ad Unit On The Daimyo's Home Page</p>
              </div>
              <div className={styles.benefit__wrapper}>
                <FontAwesomeIcon icon={faCheck} />
                <p>
                  Personal Support In Order To Give You A Headstart In Your
                  Journey
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subscriptionBlock}>
          <div className={styles.block__header}>
            <div className={styles.header__top}>
              <div className={styles.subscription__title}>
                <span>Full Unlimited Access</span>
                <span>Database Access & Unlimited Job Posts</span>
              </div>
              <span className={styles.subscriptionPrice}>$899</span>
            </div>
            <p>
              Accessible by all talented designers in the Daimyo Designers
              Community
            </p>
          </div>
          <div className={styles.block__content}>
            <div className={styles.subscription__benefits__container}>
              <div className={styles.benefit__wrapper}>
                <FontAwesomeIcon icon={faCheck} />
                <p>
                  One Job Post listed on Daimyo Designers talent section (30-day
                  lifetime)
                </p>
              </div>
              <div className={styles.benefit__wrapper}>
                <FontAwesomeIcon icon={faCheck} />
                <p>
                  One Daymio article mention of Job Post Boosted on Social
                  Media.
                </p>
              </div>
              <div className={styles.benefit__wrapper}>
                <FontAwesomeIcon icon={faCheck} />
                <p>
                  Inclusion in the featured Job Posts section of our weekly
                  newsletters
                </p>
              </div>
              <div className={styles.benefit__wrapper}>
                <FontAwesomeIcon icon={faCheck} />
                <p>Unlimited Artists Community Database access</p>
              </div>
              <div className={styles.benefit__wrapper}>
                <FontAwesomeIcon icon={faCheck} />
                <p>
                  One Co-branded content feature about your company or on Daimyo
                  with social media promotion of the article on Daimyo channels
                </p>
              </div>
              <div className={styles.benefit__wrapper}>
                <FontAwesomeIcon icon={faCheck} />
                <p>Three Ad Units on Daimyo's Homepage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
