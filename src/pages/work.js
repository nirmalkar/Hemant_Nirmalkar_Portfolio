import React, { useState, useEffect } from "react"
import axios from "axios"
import { capitalCase } from "change-case"

import "./work.scss"
import SEO from "../components/seo"

const SecondPage = () => {
  const [gitRepos, setGitRepos] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      // You can await here
      const res = await axios.get(
        "https://api.github.com/users/hemantkumar2/repos"
      )
      console.log(res.data)
      setGitRepos(res.data)
    }
    fetchData()
  }, [])
  let searchChar = search.split("")
  const loader = (
    <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
  )
  console.log(gitRepos)
  return (
    <>
      <SEO title="Work" />
      <div
        style={{ width: "15em", margin: " 2em auto" }}
        className="input-group"
      >
        <input
          type="text"
          className="form-control"
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      {!gitRepos.length ? (
        loader
      ) : (
        <div className="container">
          <div className="card-columns">
            {gitRepos
              .filter(item =>
                item.name
                  .split("")
                  .toString()
                  .includes(searchChar ? searchChar : "")
              )
              .map((repo, i) => {
                return (
                  <div key={i}>
                    <div className="card border-0 m-2 mx-auto shadow-sm">
                      <div className="card-body">
                        <h5 class="card-title">{capitalCase(repo.name)}</h5>
                        <p>
                          <span
                            style={{
                              fontSize: ".9rem",
                            }}
                          >
                            &nbsp;
                            {repo.description
                              ? repo.description
                              : "No description available"}
                          </span>
                        </p>
                        <a
                          data-toggle="tooltip"
                          className="btn btn-dark mr-2"
                          href={repo.homepage}
                          target="_blank"
                          data-placement="top"
                          title="Tooltip on top"
                        >
                          Project
                        </a>
                        <a
                          className="btn btn-light"
                          href={repo.html_url}
                          target="_blank"
                        >
                          <div>Github</div>
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      )}
    </>
  )
}

export default SecondPage
