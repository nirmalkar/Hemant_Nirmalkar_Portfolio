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
    <div className="row no-gutters">
      <div className="col-12 text-center">
        <p className="f-s">My Skills</p>
        <div>
          <img className="p-5" src={JS} alt="" />
          <img className="p-5" src={react} alt="" />
          <img className="p-5" src={Gatsby} alt="" />
          <img className="p-5" src={Node} alt="" />
          <img className="p-5" src={Mongo} alt="" />
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
