module.exports = {
  siteMetadata: {
    title: `Hemant Nirmalkar | Portfolio`,
    description: `Description`,
    author: `@hemantkumar2`,
    siteUrl: `https://www.hemantnirmalkar.com`,

    social: {
      github: "",
      codepen: "",
      linkedin: "",
      twitter: "",
      facebook: "",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hemantkumar2`,
        short_name: `hemant`,
        start_url: `/`,
        background_color: `#36454f`,
        theme_color: `#36454f`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
