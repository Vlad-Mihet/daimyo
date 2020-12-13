import React from "react"
import styles from "../styles/Features.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUserCheck,
  faBookReader,
  faPalette,
  faSuitcase,
  faUserTie,
  faRocket,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

export default function Features() {
  return (
    <div className={styles.features__container}>
      <div className={styles.content__wrapper}>
        <div className={styles.keyFeatures__container}>
          <h4>Key Features</h4>
          <div className={styles.keyFeatures__row}>
            <div className={styles.featureBlock}>
              <div className={styles.block__wrapper}>
                <FontAwesomeIcon icon={faUserCheck} />
                <h5>Curated Talent Database</h5>
              </div>
              <p>
                Using our database of hand-selected creative professionals, you
                can search, reach out to, and receive applications from only the
                most qualified, relevant candidates.
              </p>
            </div>
            <div className={styles.featureBlock}>
              <div className={styles.block__wrapper}>
                <FontAwesomeIcon icon={faBookReader} />
                <h5>RFP Questionnaire</h5>
              </div>
              <p>
                The Questionnaire combines with our instant Job Post tool and
                searchable Artists Community Database to reveal detailed
                information about likely candidates.
              </p>
            </div>
            <div className={styles.featureBlock}>
              <div className={styles.block__wrapper}>
                <FontAwesomeIcon icon={faPalette} />
                <h5>Robust Artist Community</h5>
              </div>
              <p>
                Job-seeking artists who join 80 Level's creative community can
                publish profiles, post portfolio images, write articles and
                learn new techniques to expand their craft and expertise.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.useGuide__container}>
          <h4>How It Works</h4>
          <div className={styles.useGuide__row}>
            <div className={styles.useGuide__block}>
              <div className={styles.block__wrapper}>
                <FontAwesomeIcon icon={faSuitcase} />
                <h5>Create a job</h5>
              </div>
              <p>
                Quickly create a Job Post using our simple interface. Share the
                Job description and details you are looking for in an ideal
                candidate and send a questionnaire to employment-ready artists.
              </p>
              <span className={styles.block__count}>1</span>
            </div>
            <div className={styles.useGuide__block}>
              <div className={styles.block__wrapper}>
                <FontAwesomeIcon icon={faUserTie} />
                <h5>Subscribe and search the database</h5>
              </div>
              <p>
                Choose a plan that works best for your company to get full
                access to the searchable Artists Community Database of
                qualified, hand-selected creative professionals.
              </p>
              <span className={styles.block__count}>2</span>
            </div>
            <div className={styles.useGuide__block}>
              <div className={styles.block__wrapper}>
                <FontAwesomeIcon icon={faRocket} />
                <h5>Hire and grow your team</h5>
              </div>
              <p>
                Review artists who apply to your Job Post or respond to your
                Questionnaire, interview them, and hire the best candidate as
                your new creative team member!
              </p>
              <span className={styles.block__count}>3</span>
            </div>
          </div>
          <div className={styles.getStarted}>
            <span>Get Started Now</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>
    </div>
  )
}
