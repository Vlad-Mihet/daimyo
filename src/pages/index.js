import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import About from "../components/About"
import "normalize.css"

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  )
}
