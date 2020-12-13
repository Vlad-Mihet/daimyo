import React from "react"
import styles from "../styles/Analytics.module.scss"

export default function DataLabel({ index, percentage, category }) {
  return (
    <div className={styles.dataBlock}>
      <span className={styles.block__index}>{index + 1}.</span>
      <span className={styles.block__percentage}>{percentage}%</span>
      <span className={styles.block__category}>{category}</span>
    </div>
  )
}
