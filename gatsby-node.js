const axios = require("axios")

const GITHUB_URL = "https://api.github.com/users/hemantkumar2/repos"

exports.createPages = async ({ actions: { createPage } }) => {
  const { data } = await axios.get(GITHUB_URL)
  createPage({
    path: `/work`,
    component: require.resolve("./src/templates/work.js"),
    context: { repositories: data },
  })
}
