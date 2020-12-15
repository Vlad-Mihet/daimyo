import React, { useState } from "react"
import styled from "styled-components"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import About from "../components/About"
import ShowcaseContent from "../components/ShowcaseContent"
import "normalize.css"
import Features from "../components/Features"
import Analytics from "../components/Analytics"
import Status from "../components/Status"
import Subscription from "../components/Subscription.js"
import JoinUs from "../components/JoinUs"
import JoinModal from "../components/JoinModal"

const HomeContainer = styled.div`
  ${({ blurred }) => blurred && `filter: brightness(20%); overflow-y: hidden;`};
`

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [selectedQuickPosition, setSelectedQuickPosition] = useState("")

  const setupQuickApply = positionName => {
    setSelectedQuickPosition(positionName)
    setShowModal(true)
  }

  return (
    <div>
      <HomeContainer blurred={showModal}>
        <Header />
        <Hero setShowModal={setShowModal} />
        <About />
        <ShowcaseContent />
        <Features />
        <Analytics />
        <Status setupQuickApply={setupQuickApply} />
        <Subscription />
        <JoinUs setShowModal={setShowModal} />
        <Footer />
      </HomeContainer>
      {showModal && (
        <JoinModal
          setShowModal={setShowModal}
          position={selectedQuickPosition}
        />
      )}
    </div>
  )
}
