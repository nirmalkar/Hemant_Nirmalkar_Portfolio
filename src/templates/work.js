import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { ThemeProvider } from "../contexts/themeContext"

// import "./work.scss"
import "../styles/scss/main.scss"
import WorkBody from "./WorkBody"

const WorkPageTemplate = ({ pageContext: { repositories } }) => {
  return (
    <ThemeProvider>
      <SEO title="Work" />
      <br />
      <Link to="/">
        <span className="fa-lg m-4 m-md-5 text-dark">
          <i class="fas fa-arrow-left" />
        </span>
      </Link>
      <WorkBody repositories={repositories} />
    </ThemeProvider>
  )
}

export default WorkPageTemplate
