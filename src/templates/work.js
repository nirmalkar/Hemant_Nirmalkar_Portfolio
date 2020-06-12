import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import WorkCard from "./WorkCard"

import "./work.scss"

const WorkPageTemplate = ({ pageContext: { repositories } }) => {
  const [repos, setRepos] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    setRepos(repositories)
  }, [repositories])

  const renderRepoCards = () => {
    if (search) {
      return repos
        .filter(repo => repo.name.includes(search))
        .map((repo, i) => <WorkCard key={i} index={i} repo={repo} />)
    } else {
      return repositories.map((repo, i) => (
        <WorkCard key={i} index={i} repo={repo} />
      ))
    }
  }

  return (
    <>
      <SEO title="Work" />
      <br />
      <Link to="/">
        <span className="fa-lg m-4 m-md-5 text-dark">
          <i class="fas fa-arrow-left" />
        </span>
      </Link>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="input-group mb-5">
              <input
                type="text"
                className="form-control"
                onChange={e => setSearch(e.target.value)}
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="card-columns">{renderRepoCards()}</div>
      </div>
    </>
  )
}

export default WorkPageTemplate
