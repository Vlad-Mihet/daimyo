import React from "react"
import styles from "../styles/Analytics.module.scss"
import WorldMap from "./WorldMap"
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
            key={index}
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
