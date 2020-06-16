import React, { useContext } from "react"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby"

import { ThemeContext } from "../contexts/themeContext"

const Hero = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext)
  return (
    <div className="row no-gutters">
      <div className="col-xl-7 hero-ht mt-4 mt-lg-0">
        <label class="switch m-2">
          <input onChange={() => setIsDarkTheme()} type="checkbox" />
          <span class="slider round"></span>
        </label>
        <Fade up duration={2000}>
          <div className={isDarkTheme ? "name  black" : "name "}>
            Hemant Nirmalkar
          </div>
          <p className={isDarkTheme ? "desc-w black" : "desc-w"}>
            Hey there! This is Hemant, I'm a Fullstack developer. I primarily
            work in Javascript. I enjoy solving problems, building logics &
            designing stuffs.
          </p>
        </Fade>
        <Fade up duration={2000}>
          <p className="my-wrk-lnk">
            <Link className="link-styles" to="/work">
              {" "}
              MY WORK
              <i className="fas fa-arrow-right  mt-2 ml-2" />
            </Link>
          </p>
        </Fade>
        <div className="row no-gutters">
          <div className="col-4 d-none d-xl-block"></div>
          <Fade up duration={2000}>
            <div className="col-12 col-lg-8 text-center text-lg-right m-social-lnk-toggle">
              <a
                className="link-styles img-container"
                href="https://github.com/hemantkumar2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-lg p-4  clk-f-a" />
              </a>
              <a
                className="link-styles"
                href="https://codepen.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-codepen fa-lg p-4  clk-f-a" />
              </a>
              <a
                className="link-styles"
                href="https://www.linkedin.com/in/hemant-nirmalkar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in fa-lg p-4  clk-f-a" />
              </a>
              <a
                className="link-styles"
                href="https://www.instagram.com/monty_davinci/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-lg p-4  pr-lg-5 pt-lg-5 clk-f-a" />
              </a>
            </div>
          </Fade>
        </div>
      </div>
      <div
        className="d-none d-xl-block col-5 img"
        role="img"
        aria-label="Hey it's me!"
        title="Hey Thank you! You made me colorful."
      ></div>
    </div>
  )
}

export default Hero
