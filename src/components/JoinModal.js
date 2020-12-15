import React from "react"
import styles from "../styles/JoinModal.module.scss"

export default function JoinModal() {
  return (
    <div className={styles.joinUs__Modal}>
      <div className={styles.joinModal__wrapper}>
        <form method="POST" onSubmit={() => {}}>
          <input
            type="text"
            name="lastName"
            id="firstName"
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
          />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="file" />
          <select>
            <option value="Web Designer" />
          </select>
        </form>
      </div>
    </div>
  )
}
