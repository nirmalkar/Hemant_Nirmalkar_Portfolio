import React, { useContext } from "react"
import Fade from "react-reveal/Fade"

import { ThemeContext } from "../contexts/themeContext"

const Footer = () => {
  const { isDarkTheme } = useContext(ThemeContext)
  return (
    <Fade bottom duration={2000}>
      <div
        className={
          isDarkTheme ? "d-none d-lg-block p-5 light" : "d-none d-lg-block p-5"
        }
      >
        <div className="con-me-txt">Contact Me</div>
        <div className="mt-4">
          <span className="con-no m-l">+91-8839948857</span>
        </div>
        <div className="mt-4">
          <span className="con-no m-l">hemantnirmalkar17@gmail.com</span>
        </div>
      </div>
      <div
        className={
          isDarkTheme
            ? "d-lg-none text-center p-5 light"
            : "d-lg-none text-center p-5"
        }
      >
        <div className="row">
          <div className="col"></div>
        </div>
        <div className="con-me-txt-mob">Contact Me</div>
        <div className="mt-4">
          <div className="con-no-mob mt-3">+91-8839948857</div>
        </div>
        <div className="mt-4">
          <div className="con-no-mob mt-3">hemantnirmalkar17@gmail.com</div>
        </div>
      </div>
    </Fade>
  )
}
export default Footer
