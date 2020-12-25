import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import About from "./components/About"
import ShowcaseContent from "./components/ShowcaseContent"
import "normalize.css"
import Features from "./components/Features"
import Analytics from "./components/Analytics"
import Status from "./components/Status"
import Subscription from "./components/Subscription.js"
import JoinUs from "./components/JoinUs"
import Neptunia from "./components/Neptunia"
import Akali from "./components/Akali"
import Monokuma from "./components/Monokuma"
import Squirtle from "./components/Squirtle"

function App() {
  return (
    <div className="App">
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

export default App
