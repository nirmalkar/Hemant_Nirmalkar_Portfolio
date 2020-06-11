import React, { useState, useEffect } from "react"
import axios from "axios"

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
  console.log(gitRepos)
  let alp = search.split("")
  console.log(typeof alp)
  return (
    <>
      <SEO title="Work" />
      <div
        style={{ width: "20em", margin: " 2em auto" }}
        className="input-group"
      >
        <input
          type="text"
          className="form-control"
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="container">
        <div className="row">
          {gitRepos
            .filter(item =>
              item.name
                .split("")
                .toString()
                .includes(alp ? alp : "")
            )
            .map((repo, i) => {
              return (
                <div className="col-12 col-md-6 col-lg-4" key={i}>
                  <div className="card m-2" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 class="card-title">{repo.name}</h5>
                      <p>
                        GITHUB REPO URL &nbsp;-
                        <a href={repo.html_url} target="_blank">
                          &nbsp;Link
                        </a>
                      </p>
                      <p>
                        Project URL&nbsp;-
                        <a href={repo.homepage} target="_blank">
                          &nbsp;Link
                        </a>
                      </p>
                      <p>
                        DESCRIPTION&nbsp;-
                        <span
                          style={{ fontSize: ".9rem", letterSpacing: ".1em" }}
                        >
                          &nbsp;
                          {repo.description
                            ? repo.description
                            : "No description available"}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default SecondPage
