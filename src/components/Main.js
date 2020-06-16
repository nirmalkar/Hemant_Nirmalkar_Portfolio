import React, { useContext } from "react"

import Hero from "../components/Hero"
import Skill from "../components/Skill"
import Work from "../components/Work"
import Footer from "../components/Footer"
import { ThemeContext } from "../contexts/themeContext"

const Main = () => {
  const { isDarkTheme } = useContext(ThemeContext)
  return (
    <div className={isDarkTheme ? "dark" : "light"}>
      <Hero />
      <div className="row no-gutters m-t-my-skills">
        <Skill />
        <Work />
      </div>
      <Footer />
    </div>
  )
}

export default Main
