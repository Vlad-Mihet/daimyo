import React from "react"
import styles from "../styles/Analytics.module.scss"
import Chart from "./DoughnutChart"
import DataLabel from "./DataLabel"

export default function Analytics() {
  var percentages = [20, 18, 16, 12, 9, 8, 7, 6, 4]
  var categories = [
    "Web Designer",
    "Graphic Designer",
    "Game Designer",
    "Interior Designer",
    "Animation Designer",
    "Motion Graphics Designers",
    "Industrial Product Designer",
    "Fashion Designer",
    "UI/UX Designer",
  ]
  return (
    <div className={styles.analytics__container}>
      <div className={styles.analytics__header}>
        <h3>Available Positions</h3>
        <span>Apply For A Position And Join Our Team</span>
      </div>
      <div className={styles.doughnutData__wrapper}>
        <Chart />
      </div>
      <div className={styles.doughnutChart__dataWrapper}>
        {percentages.map((x, index) => (
          <DataLabel
            key={index}
            index={index}
            percentage={percentages[index]}
            category={categories[index]}
          />
        ))}
      </div>
    </div>
  )
}
