import React from "react"
import styles from "../styles/Analytics.module.scss"
import WorldMap from "./WorldMap"
import Chart from "./DoughnutChart"
import DataLabel from "./DataLabel"

export default function Analytics() {
  var percentages = [20, 14, 13, 9, 7, 5, 5, 5, 4, 4, 14]
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
    "Architectural Designer",
    "Other",
  ]
  return (
    <div className={styles.analytics__container}>
      <div className={styles.mapData__wrapper}>
        <span>We have Artists From All Around The World</span>
        <WorldMap />
      </div>
      <div className={styles.doughnutData__wrapper}>
        <Chart />
      </div>
      <div className={styles.doughnutChart__dataWrapper}>
        {percentages.map((x, index) => (
          <DataLabel
            index={index}
            percentage={percentages[index]}
            category={categories[index]}
          />
        ))}
      </div>
      <span className={styles.breakdownBy}>Breakdown By Design Specialty</span>
    </div>
  )
}
