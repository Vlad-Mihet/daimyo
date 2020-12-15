import React from "react"
import styles from "../styles/Status.module.scss"

export default function StatusCard({
  positionName,
  positionDescription,
  setupQuickApply,
}) {
  return (
    <div className={styles.statusCard__wrapper}>
      <div className={styles.statusCard__content}>
        <h4 className={styles.positionName}>{positionName}</h4>
        <div className={styles.fillerSpaceRow}>
          <div className={styles.fillerSpace}></div>
          <div className={styles.fillerSpace}></div>
        </div>
        <div className={styles.description__wrapper}>
          <div className={styles.descriptionFillerSpace}></div>
          <p className={styles.positionDescription}>{positionDescription}</p>
        </div>
        <div className={styles.application__wrapper}>
          <div className={styles.position__wrapper}>
            <span className={styles.numPositionsAvailable}>5</span>
            <div className={styles.application__availablePositions}>
              <span>Available</span>
              <span>Positions</span>
            </div>
          </div>
          <button
            className={styles.applyNowButton}
            onClick={() => setupQuickApply(positionName)}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  )
}
