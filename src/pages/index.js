import React from "react"
import SEO from "../components/seo"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.scss"
import MyImg from '../images/me2.jpg'
import JS from '../images/node.svg'
import Node from '../images/nodejs.svg'
import react from '../images/react.svg'
import Gatsby from '../images/gatsby.svg'
import Mongo from '../images/mongo.svg'
import MyWork from '../images/mw.jpg'

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <div className="row no-gutters">
      <div className="col-7 hero-ht">
        <div className="name">Hemant Nirmalkar</div>
        <p className="desc-w">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente mollitia nesciunt distinctio laudantium illo incidunt corrupti reprehenderit! Ratione, in soluta tenetur aut impedit, odit, ut quasi iure libero dicta adipisci!</p>
        <p className="my-wrk-lnk">MY WORK<i class="fas fa-arrow-right  mt-2 ml-2" /></p>
        <div className="row">
          <div className="col-4 m-social-lnk-toggle">
          </div>
          <div className="col-8 text-right fa-lg m-social-lnk-toggle">
            <i class="fab fa-github fa-lg p-3" />
            <i class="fab fa-codepen fa-lg p-3" />
            <i class="fab fa-linkedin-in fa-lg p-3" />
            <i class="fab fa-instagram fa-lg p-4" />
          </div>
        </div>
      </div>
      <div className="col-5 ">
        <img className="hero-ht-img" src={MyImg} alt="" />
      </div>
    </div>
    <div className="row no-gutters m-t-my-skills">
      <div className="col-12 text-center">
        <p className="f-s">My Skills</p>
        <div className="mt-5">
          <img className="p-4" src={JS} alt="" />
          <img className="p-4" src={react} alt="" />
          <img className="p-4" src={Gatsby} alt="" />
          <img className="p-4" src={Node} alt="" />
          <img className="p-4" src={Mongo} alt="" />
        </div>
      </div>
      <div className="col-12 text-center m-t-my-work">
        <p className="f-s">My Work</p>
        <div className="d-flex justify-content-center">
          <div>
            <img className="img-w-h mr-4 mt-5" src={MyWork} alt="" />
            <p className="my-wrk-txt">asdf</p>
          </div>
          <div>
            <img className="img-w-h mr-4 mt-5" src={MyWork} alt="" />
            <p className="my-wrk-txt">asdf</p>

          </div>
          <div>
            <img className="img-w-h mr-4 mt-5" src={MyWork} alt="" />
            <p className="my-wrk-txt">asdf</p>
          </div>
          <div>
            <img className="img-w-h mr-4 mt-5" src={MyWork} alt="" />
            <p className="my-wrk-txt">asdf</p>
          </div>
        </div>
        <p className="my-wrk-lnk">SEE MORE<i class="fas fa-arrow-right  mt-2 ml-2" /></p>
      </div>
    </div>
    <div className="con-me-txt">Contact Me</div>
    <div className="mt-4">
      <span className="con-txt">Contact No </span><span className="con-no">8839948857</span>
    </div>
    <div className="mt-4 m-b">
      <span className="con-txt">Email Addr. </span><span className="con-no">hemantnirmalkar17@gmail.com</span>
    </div>
    <i class="fab fa-github fa-10x" />
  </div>
)

export default IndexPage
