
import styles from "./App.module.css"
import { Navbar } from "./components/Navbar/Navbar"
import { Hero } from "./components/Hero/hero"
import { About } from "./components/About/about"
import { Experience } from "./components/Experience/Experience"
import { Projects } from "./components/Projects/projects"
import { Contact } from "./components/Contact/contact"

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App