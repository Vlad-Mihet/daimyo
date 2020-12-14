import React from "react"
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

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <ShowcaseContent />
      <Features />
      <Analytics />
      <Status />
      <Subscription />
      <JoinUs />
      <Footer />
    </div>
  )
}
