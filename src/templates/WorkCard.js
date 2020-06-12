import React from "react"
import Fade from "react-reveal/Fade"
import { capitalCase } from "change-case"

const WorkCard = ({ repo, index }) => {
  return (
    <Fade delay={300 + index * 30}>
      <div className="card border-0 m-2 mx-auto shadow-sm">
        <div className="card-body">
          <h5 class="card-title">{capitalCase(repo.name)}</h5>
          <p>
            <span style={{ fontSize: ".9rem" }}>
              &nbsp;
              {repo.description || "No description available"}
            </span>
          </p>
          <a
            className="btn btn-dark mr-2"
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
          >
            Project
          </a>
          <a
            className="btn btn-light"
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>Github</div>
          </a>
        </div>
      </div>
    </Fade>
  )
}

export default WorkCard
