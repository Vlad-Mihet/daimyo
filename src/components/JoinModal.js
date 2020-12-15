import React, { useEffect } from "react"
import styles from "../styles/JoinModal.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

export default function JoinModal({ setShowModal, position }) {
  useEffect(() => {
    const options = document.querySelectorAll("option")
    if (position !== "") {
      console.log(position)

      for (let i = 0; i < options.length; i++) {
        console.log(options[i].textContent == position)
        if (options[i].innerText === position) {
          options[i].setAttribute("selected", '"selected"')
        }
      }
    }
  })

  return (
    <div className={styles.joinUs__Modal}>
      <div className={styles.modal__header}>
        <span>Join Us Now!</span>
        <FontAwesomeIcon icon={faTimes} onClick={() => setShowModal(false)} />
      </div>
      <div className={styles.joinModal__wrapper}>
        <form method="POST" onSubmit={() => {}}>
          <div className={styles.name__wrapper}>
            <label htmlFor="firstName">
              First Name
              <input
                type="text"
                name="lastName"
                id="firstName"
                placeholder="First Name"
              />
            </label>
            <label htmlFor="lastName">
              Last Name
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
              />
            </label>
          </div>
          <label htmlFor="email">
            Email
            <input type="email" name="email" id="email" placeholder="Email" />
          </label>
          <label className={styles.file__label}>
            Link your portfolio so we can check whether or not we would be a
            great match
            <input type="file" />
          </label>
          <select>
            <option value="Web Designer">Web Designer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Graphic Designer">Graphic Designer</option>
            <option value="Game Designer">Game Designer</option>
            <option value="Interior Designer">Interior Designer</option>
            <option value="Animation Designer">Animation Designer</option>
            <option value="Motion Graphics Designer">
              Motion Graphics Designer
            </option>
            <option value="Industrial Product Designer">
              Industrial Product Designer
            </option>
            <option value="Fashion Designer">Fashion Designer</option>
          </select>
          <textarea placeholder="Tell Us A Bit About Yourself" />
          <button type="submit">Apply</button>
        </form>
      </div>
    </div>
  )
}
