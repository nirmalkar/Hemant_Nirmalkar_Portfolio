import React from "react"
import SEO from "../components/seo"
import Main from "../components/Main"

import "bootstrap/dist/css/bootstrap.min.css"
import { ThemeProvider } from "../contexts/themeContext"

// import "./index.scss"
import "../styles/scss/main.scss"

const IndexPage = () => {
  return (
    <ThemeProvider>
      <SEO title="Home" />
      <Main />
    </ThemeProvider>
  )
}

export default IndexPage
