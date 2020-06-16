import React, { useContext } from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import Flip from "react-reveal/Flip"

import Unsplash from "../images/unsplash.png"
import Aim from "../images/aim.png"
import Dog from "../images/doglist.png"

import { ThemeContext } from "../contexts/themeContext"

const Work = () => {
  const { isDarkTheme } = useContext(ThemeContext)
  return (
    <div className="col-12 text-center m-t-my-work">
      <Fade up duration={2000}>
        <p className={isDarkTheme ? "f-s black" : "f-s"}>My Work</p>
      </Fade>
      <div className="d-lg-flex justify-content-center m-3 m-xl-0">
        <Flip bottom duration={2000}>
          <div>
            <a
              className="my-wrk-txt"
              href="https://brave-austin-0a0588.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={
                  isDarkTheme
                    ? "img-w-h mr-lg-4 mt-5 img-styles crd-shd gray-scale"
                    : "img-w-h mr-lg-4 mt-5 img-styles crd-shd"
                }
                src={Unsplash}
                alt=""
              />
              <p>Unsplash Api</p>
            </a>
          </div>
        </Flip>
        <Flip bottom duration={2000}>
          <div>
            <a
              className="my-wrk-txt d-none d-lg-block"
              href="https://happy-wozniak-e633ff.netlify.app/dogs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={
                  isDarkTheme
                    ? "img-w-h mr-lg-4 mt-5 img-styles crd-shd gray-scale"
                    : "img-w-h mr-lg-4 mt-5 img-styles crd-shd"
                }
                src={Dog}
                alt=""
              />
              <p>Dog List</p>
            </a>
          </div>
        </Flip>
        <Flip bottom duration={2000}>
          <div>
            <a
              className="my-wrk-txt d-none d-lg-block"
              href="https://www.aimcareerinstitute.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={
                  isDarkTheme
                    ? "img-w-h mt-5 img-styles crd-shd gray-scale"
                    : "img-w-h mt-5 img-styles crd-shd"
                }
                src={Aim}
                alt=""
              />
              <p>Aim Career Institute</p>
            </a>
          </div>
        </Flip>
      </div>
      <Fade up duration={2000}>
        <p className="my-wrk-lnk">
          <Link className="link-styles" to="/work">
            SEE MORE
            <i className="fas fa-arrow-right  mt-2 ml-2" />
          </Link>
        </p>
      </Fade>
    </div>
  )
}
export default Work
