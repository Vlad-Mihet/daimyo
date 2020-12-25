import React from "react";
import styles from "../styles/ShowcaseContent.module.scss";
import MessageCard from "./MessageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faMapMarkerAlt,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Akali from "./Akali";
import Monokuma from "./Monokuma";
import Squirtle from "./Squirtle";
import Neptunia from "./Neptunia";

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
        {/* <div className={styles.design__col}>
          <div className={styles.jobPost__showcase__wrapper}>
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
            <div className={styles.jobPosting__search}>
              <span>Search</span>
            </div>
          </div>
          <div className={styles.available__designers__container}>
            <div className={styles.availableDesigner__wrapper}>
              <div className={styles.designer__circleAvatar}></div>
              <div className={styles.designer__info}>
                <div className={styles.emptyRow__1}>
                  <span>Anna Long</span>
                </div>
                <div className={styles.emptyRow__2}>
                  <div className={styles.empty__field}>
                    <span>Web</span>
                  </div>
                  <div className={styles.empty__field}>
                    <span>Designer</span>
                  </div>
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
                <div className={styles.emptyRow__1}>
                  <span>John Doe</span>
                </div>
                <div className={styles.emptyRow__2}>
                  <div className={styles.empty__field}>
                    <span>Graphic</span>
                  </div>
                  <div className={styles.empty__field}>
                    <span>Designer</span>
                  </div>
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
                <div className={styles.emptyRow__1}>
                  <span>Michael Myers</span>
                </div>
                <div className={styles.emptyRow__2}>
                  <div className={styles.empty__field}>
                    <span>UI/UX</span>
                  </div>
                  <div className={styles.empty__field}>
                    <span>Designer</span>
                  </div>
                </div>
              </div>
              <div className={styles.designer__status}>
                <div className={styles.circle__status}></div>
                <span>Available</span>
              </div>
            </div>
          </div>
        </div> */}
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
        {/* <div className={styles.section2__cards__col}>
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
       */}
      </div>
      <div className={styles.showcase__content__section3}>
        {/* <div className={styles.section3__animation__col}>
          <div className={styles.cards__wrapper}>
            <div className={styles.firstCardWrapper}>
              <div className={styles.firstCardAvatar}>
                <img
                  src={process.env.PUBLIC_URL + "/images/samurai.png"}
                  alt="samurai"
                />
              </div>
              <div className={styles.firstCard}>
                <div className={styles.firstCard__fillerRow__wrapper}>
                  <div className={styles.filler__space}></div>
                  <div className={styles.filler__space}></div>
                  <div className={styles.filler__space}></div>
                </div>
              </div>
            </div>
            <div className={styles.secondCardWrapper}>
              <div className={styles.secondCardAvatar}></div>
              <div className={styles.secondCard}>
                <div className={styles.secondCard__content}>
                  <div className={styles.card__info}>
                    <span>John Doe</span>
                    <div className={styles.fillerSpace__wrapper}>
                      <div className={styles.fillerSpace}></div>
                      <div className={styles.fillerSpace}></div>
                    </div>
                    <p className={styles.card__viewAnswers__button}>
                      View Answers
                    </p>
                  </div>
                  <div className={styles.card__status}>
                    <FontAwesomeIcon icon={faCheck} />
                    <span>Accepted</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.lastCardsWrapper}>
              <div className={styles.lastCards__cardWrapper}>
                <div className={styles.card__cardAvatar}></div>
                <div className={styles.card__cardDetails__filler}>
                  <div className={styles.firstFillerRow}>
                    <span>Jack Meadows</span>
                  </div>
                  <div className={styles.secondFillerRow}>
                    <div className={styles.secondFillerRow__filler}>
                      <span>Web</span>
                    </div>
                    <div className={styles.secondFillerRow__filler}>
                      <span>Designer</span>
                    </div>
                  </div>
                </div>
                <div className={styles.card__status}>
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Accepted</span>
                </div>
              </div>
              <div className={styles.lastCards__cardWrapper}>
                <div className={styles.card__cardAvatar}></div>
                <div className={styles.card__cardDetails__filler}>
                  <div className={styles.firstFillerRow}>
                    <span>Simon Jackson</span>
                  </div>
                  <div className={styles.secondFillerRow}>
                    <div className={styles.secondFillerRow__filler}>
                      <span>UI/UX</span>
                    </div>
                    <div className={styles.secondFillerRow__filler}>
                      <span>Designer</span>
                    </div>
                  </div>
                </div>
                <div className={styles.card__status}>
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Accepted</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
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
  );
}
