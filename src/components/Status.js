import React from "react"
import styles from "../styles/Status.module.scss"
import StatusCard from "./StatusCard.js"

export default function Status({ setupQuickApply }) {
  var categories = [
    "Web Designer",
    "Graphic Designer",
    "Game Designer",
    "Interior Designer",
    "Animation Designer",
    "Motion Graphics Designer",
    "Industrial Product Designer",
    "Fashion Designer",
    "UI/UX Designer",
  ]
  return (
    <div className={styles.status__container}>
      <div className={styles.status__header}>
        <h3>Available Positions</h3>
        <span>Apply For A Position And Join Our Team</span>
      </div>
      <div className={styles.cards__wrapper}>
        {categories.map((category, index) => (
          <StatusCard
            key={index}
            positionName={category}
            positionDescription={category}
            setupQuickApply={setupQuickApply}
          />
        ))}
      </div>
    </div>
  )
}
