import React from "react"

import SEO from "../components/seo"
import { ThemeProvider } from "../contexts/themeContext"

// import "./work.scss"
import "../styles/scss/main.scss"
import WorkBody from "./WorkBody"

const WorkPageTemplate = ({ pageContext: { repositories } }) => {
  return (
    <ThemeProvider>
      <SEO title="Work" />
      <WorkBody repositories={repositories} />
    </ThemeProvider>
  )
}

export default WorkPageTemplate
