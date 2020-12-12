import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import About from "../components/About"
import ShowcaseContent from "../components/ShowcaseContent"
import "normalize.css"

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <ShowcaseContent />
      <Footer />
    </div>
  )
}
