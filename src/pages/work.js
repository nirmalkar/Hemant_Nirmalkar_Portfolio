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
            .filter(item => item.name.split("").toString().includes("a"))
            .map((repo, i) => {
              return (
                <div className="col-4" key={i}>
                  <div className="card m-2" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 class="card-title">{repo.name}</h5>
                      <p>GIT URL {repo.git_url}</p>
                      <p>Homepage {repo.homepage}</p>
                      <p>GIT URL {repo.url}</p>
                      <p>GIT URL {repo.description}</p>
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
