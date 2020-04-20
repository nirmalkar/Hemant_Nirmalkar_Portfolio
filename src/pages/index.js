import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"
import "./index.scss"

import MyImg from '../images/me2.jpg'
import Sass from '../images/sass.svg'
import Node from '../images/nodejs.svg'
import react from '../images/react.svg'
import Gatsby from '../images/gatsby.svg'
import Mongo from '../images/mongo.svg'
import MyWork from '../images/mw.jpg'

const IndexPage = () => (
  <div className="">
    <SEO title="Home" />
    <div className="row no-gutters">
      <div className="col-xl-7 hero-ht">
        <div className="name name-styles">Hemant Nirmalkar</div>
        <p className="desc-w">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente mollitia nesciunt distinctio laudantium illo incidunt corrupti reprehenderit! Ratione, in soluta tenetur aut impedit, odit, ut quasi iure libero dicta adipisci!</p>
        <p className="my-wrk-lnk"><Link className="link-styles" to="/work"> MY WORK<i class="fas fa-arrow-right  mt-2 ml-2" /></Link></p>
        <div className="row no-gutters">
          <div className="col-4 d-none d-xl-block m-social-lnk-toggle">
          </div>
          <div className="col-12 col-lg-8 text-center text-lg-right fa-lg m-social-lnk-toggle">
            <a className="link-styles img-container" href="https://github.com/hemantkumar2" target="_blank">
              <i class="fab fa-github fa-lg p-3  clk-f-a" />
            </a>
            <a className="link-styles" href="" target="_blank">
              <i class="fab fa-codepen fa-lg p-3  clk-f-a" />
            </a>
            <a className="link-styles" href="https://www.linkedin.com/in/hemant-nirmalkar/" target="_blank">
              <i class="fab fa-linkedin-in fa-lg p-3  clk-f-a" />
            </a>
            <a className="link-styles" href="https://www.instagram.com/monty_davinci/" target="_blank">
              <i class="fab fa-instagram fa-lg p-3  p-lg-4 clk-f-a" />
            </a>
          </div>
        </div>
      </div>
      <div className="d-none d-xl-block col-5">
        <img className="hero-ht-img" src={MyImg} alt="" />
      </div>
    </div>
    <div className="row no-gutters m-t-my-skills">
      <div className="col-12 text-center">
        <p className="f-s">My Skills</p>
        <div className="mt-5">
          <a href="https://sass-lang.com/" target="_blank">
            <img className="p-4 img-styles" src={Sass} alt="" />
          </a>
          <a href="https://reactjs.org/" target="_blank">
            <img className="p-4 img-styles" src={react} alt="" />
          </a>
          <a href="https://www.gatsbyjs.org/" target="_blank">
            <img className="p-4 img-styles" src={Gatsby} alt="" />
          </a>
          <a href="https://nodejs.org/en/" target="_blank">
            <img className="p-4 img-styles" src={Node} alt="" />
          </a>
          <a href="https://www.mongodb.com/" target="_blank">
            <img className="p-4 img-styles" src={Mongo} alt="" />
          </a>
        </div>
      </div>
      <div className="col-12 text-center m-t-my-work">
        <p className="f-s">My Work</p>
        <div className="d-lg-flex justify-content-center">
          <div>
            <a className="my-wrk-txt" href="" target="_blank"><img className="img-w-h mr-4 mt-5 img-styles" src={MyWork} alt="" />
              <p>asdf</p>
            </a>
          </div>
          <div>
            <a className="my-wrk-txt" href="" target="_blank">
              <img className="img-w-h mr-4 mt-5 img-styles" src={MyWork} alt="" />
              <p>asdf</p>
            </a>
          </div>
          <div>
            <a className="my-wrk-txt" href="" target="_blank">
              <img className="img-w-h mr-4 mt-5 img-styles" src={MyWork} alt="" />
              <p>asdf</p>
            </a>
          </div>
        </div>
        <p className="my-wrk-lnk"><Link className="link-styles" to="/work">SEE MORE<i class="fas fa-arrow-right  mt-2 ml-2" /></Link></p>
      </div>
    </div>
    <div className="con-me-txt">Contact Me</div>
    <div className="mt-4">
      <span className="con-txt ml-5">Contact No </span><span className="con-no">8839948857</span>
    </div>
    <div className="mt-4 p-b">
      <span className="con-txt">Email Addr. </span><span className="con-no">hemantnirmalkar17@gmail.com</span>
    </div>
  </div>
)

export default IndexPage
