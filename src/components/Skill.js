import React, { useContext } from "react"
import Fade from "react-reveal/Fade"

import Sass from "../images/sass.svg"
import Node from "../images/nodejs.svg"
import react from "../images/react.svg"
import Gatsby from "../images/gatsby.svg"
import Mongo from "../images/mongo.svg"

import { ThemeContext } from "../contexts/themeContext"

const Skill = () => {
  const { isDarkTheme } = useContext(ThemeContext)
  return (
    <div className="col-12 text-center">
      <Fade up duration={2000}>
        <p className={isDarkTheme ? "f-s light" : "f-s"}>My Skills</p>
      </Fade>
      <div className={"mt-5"}>
        <Fade up duration={2000}>
          <a
            href="https://sass-lang.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={
                isDarkTheme
                  ? "p-4 img-styles img-clr dark"
                  : "p-4 img-styles img-clr"
              }
              style={{ height: "6.9em" }}
              src={Sass}
              alt=""
            />
          </a>
        </Fade>
        <Fade up duration={2000}>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={
                isDarkTheme
                  ? "p-4 img-styles img-clr dark"
                  : "p-4 img-styles img-clr"
              }
              style={{ height: "6.9em" }}
              src={react}
              alt=""
            />
          </a>
        </Fade>
        <Fade up duration={2000}>
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={
                isDarkTheme
                  ? "p-4 img-styles img-clr dark"
                  : "p-4 img-styles img-clr"
              }
              style={{ height: "6.9em" }}
              src={Gatsby}
              alt=""
            />
          </a>
        </Fade>
        <Fade up duration={2000}>
          <a
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={
                isDarkTheme
                  ? "p-4 img-styles img-clr dark"
                  : "p-4 img-styles img-clr"
              }
              style={{ height: "6.9em" }}
              src={Node}
              alt=""
            />
          </a>
        </Fade>
        <Fade up duration={2000}>
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={
                isDarkTheme
                  ? "p-4 img-styles img-clr dark"
                  : "p-4 img-styles img-clr"
              }
              style={{ height: "6.9em" }}
              src={Mongo}
              alt=""
            />
          </a>
        </Fade>
      </div>
    </div>
  )
}
export default Skill
