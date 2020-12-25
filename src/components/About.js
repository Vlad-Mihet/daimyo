import React from "react";
import styles from "../styles/About.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faQuestion } from "@fortawesome/free-solid-svg-icons";
import Akali from "./Akali";

export default function About() {
  return (
    <div className={styles.about__container}>
      <div className={styles.about__wrapper}>
        <div className={styles.textColumn}>
          <h3>What is Daimyo?</h3>
          <p>
            80 Level RFP is premium job-matching service catering to the video
            game and other creative industries. We offer two highly effective
            ways to hire or be hired.
          </p>
          <p>
            At Daimyo, RFP means <span>Ready For Production</span>. Our instant
            <span> Job Posts</span> and searchable
            <span> Artists Community Database</span> combines curated talent
            with an intuitive questionnaire - a powerful candidate screening
            tool ensuring an experienced, relevant, and more compatible job
            match.
          </p>
        </div>
        <Akali />
        {/* <div className={styles.animationColumn}>
          <div className={styles.cardContainer}>
            <div className={styles.card__author}>
              <img
                src={process.env.PUBLIC_URL + "/images/samurai.png"}
                alt="samurai"
              />
            </div>
            <div className={styles.card}>
              <p>
                <span>Tanaka</span> created a request
              </p>
              <div className={styles.card__rating}>
                <div className={styles.doubleCheck__container}>
                  <div className={styles.doubleCheck}>
                    <FontAwesomeIcon icon={faCheck} />
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <span className={styles.doubleCheckedSpan}>322</span>
                </div>
                <span>252</span>
                <span>43</span>
              </div>
            </div>
            <div className={styles.offerPreview__card}>
              <div className={styles.previewCard__content}>
                <p className={styles.requestBy}>Tanaka</p>
                <div className={styles.reviewCard__rowWrapper}>
                  <p>is looking for</p>
                  <div className={styles.blurredContent}></div>
                </div>
                <div className={styles.reviewCard__rowWrapper}>
                  <p>full-time</p>
                  <div className={styles.blurredContent}></div>
                  <div className={styles.blurredContent}></div>
                </div>
                <div className={styles.reviewCard__rowWrapper}>
                  <p>in</p>
                  <div className={styles.blurredContent}></div>
                  <div className={styles.blurredContent}></div>
                </div>
              </div>
            </div>
            <div className={styles.commentsContainer}>
              <div className={styles.commentWrapper}>
                <div className={styles.emptyContentSpaceWrapper}>
                  <div className={styles.fillerEmptySpace}></div>
                  <div className={styles.fillerEmptySpace}></div>
                  <div className={styles.fillerEmptySpace}></div>
                </div>
                <FontAwesomeIcon icon={faQuestion} />
              </div>
              <div className={styles.commentWrapper}>
                <div className={styles.emptyContentSpaceWrapper}>
                  <div className={styles.fillerEmptySpace}></div>
                  <div className={styles.fillerEmptySpace}></div>
                  <div className={styles.fillerEmptySpace}></div>
                </div>
                <FontAwesomeIcon icon={faQuestion} />
              </div>
              <div className={styles.commentWrapper}>
                <div className={styles.emptyContentSpaceWrapper}>
                  <div className={styles.fillerEmptySpace}></div>
                  <div className={styles.fillerEmptySpace}></div>
                  <div className={styles.fillerEmptySpace}></div>
                </div>
                <FontAwesomeIcon icon={faQuestion} />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
