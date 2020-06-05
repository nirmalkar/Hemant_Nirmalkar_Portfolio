import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"

import Fade from "react-reveal/Fade"
import Flip from "react-reveal/Flip"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.scss"

import Sass from "../images/sass.svg"
import Node from "../images/nodejs.svg"
import react from "../images/react.svg"
import Gatsby from "../images/gatsby.svg"
import Mongo from "../images/mongo.svg"
import Unsplash from "../images/unsplash.png"
import Aim from "../images/aim.png"
import Dog from "../images/doglist.png"

const IndexPage = () => (
  <div className="">
    <SEO title="Home" />
    <div className="row no-gutters">
      <div className="col-xl-7 hero-ht mt-4 mt-lg-0">
        <Fade up duration={2000}>
          <div className="name name-styles">Hemant Nirmalkar</div>
          <p className="desc-w">
            Hey there! This is Hemant, I'm a Fullstack developer. I primarily
            work in Javascript. I enjoy solving problems, building logics &
            designing stuffs. I like watching series, tech videos and listening
            music.
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
                <span className="social-styles">
                  <i className="fab fa-github fa-lg p-3  clk-f-a" />
                </span>
              </a>
              <a
                className="link-styles"
                href="https://codepen.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-codepen fa-lg p-3  clk-f-a" />
              </a>
              <a
                className="link-styles"
                href="https://www.linkedin.com/in/hemant-nirmalkar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in fa-lg p-3  clk-f-a" />
              </a>
              <a
                className="link-styles"
                href="https://www.instagram.com/monty_davinci/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-lg p-3  pr-lg-4 pt-lg-4 clk-f-a" />
              </a>
            </div>
          </Fade>
        </div>
      </div>
      <div
        className="d-none d-xl-block col-5 img"
        role="img"
        aria-label="Hey it's me!"
        title="This is Colorful me, I'm looking good ain't I ?"
      ></div>
    </div>
    <div className="row no-gutters m-t-my-skills">
      <div className="col-12 text-center">
        <Fade up duration={2000}>
          <p className="f-s">My Skills</p>
        </Fade>
        <div className="mt-5">
          <Fade up duration={2000}>
            <a
              href="https://sass-lang.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="p-4 img-styles img-clr"
                style={{ height: "7.3em" }}
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
                className="p-4 img-styles img-clr"
                style={{ height: "7.3em" }}
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
                className="p-4 img-styles img-clr"
                style={{ height: "7.3em" }}
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
                className="p-4 img-styles img-clr"
                style={{ height: "7.3em" }}
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
                className="p-4 img-styles img-clr"
                style={{ height: "7.3em" }}
                src={Mongo}
                alt=""
              />
            </a>
          </Fade>
        </div>
      </div>
      <div className="col-12 text-center m-t-my-work">
        <Fade up duration={2000}>
          <p className="f-s">My Work</p>
        </Fade>
        <div className="d-lg-flex justify-content-center">
          <Flip bottom duration={2000}>
            <div>
              <a
                className="my-wrk-txt"
                href="https://brave-austin-0a0588.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-w-h mr-lg-4 mt-5 img-styles crd-shd"
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
                  className="img-w-h mr-lg-4 mt-5 img-styles crd-shd"
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
                  className="img-w-h mt-5 img-styles crd-shd"
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
    </div>
    <Fade bottom duration={2000}>
      <div className="d-none d-lg-block">
        <div className="con-me-txt">Contact Me</div>
        <div className="mt-4">
          <span className="con-no m-l">+91-8839948857</span>
        </div>
        <div className="mt-4 p-b">
          <span className="con-no m-l">hemantnirmalkar17@gmail.com</span>
        </div>
      </div>
      <div className="d-lg-none text-center">
        <div className="row">
          <div className="col"></div>
        </div>
        <div className="con-me-txt-mob">Contact Me</div>
        <div className="mt-4">
          <div className="con-no-mob mt-3">+91-8839948857</div>
        </div>
        <div className="mt-4 p-b">
          <div className="con-no-mob mt-3">hemantnirmalkar17@gmail.com</div>
        </div>
      </div>
    </Fade>
  </div>
)

export default IndexPage
