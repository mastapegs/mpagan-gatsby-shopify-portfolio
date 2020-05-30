/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

plugins: [
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Matthew Pagan`,
      short_name: `Matthew Pagan`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#092cb8`,
      display: `standalone`
    }
  },
  'gatsby-plugin-offline',
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: path.join(__dirname, `src`, `images`),
    },
  },
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
]


module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hero`,
        path: path.join(__dirname, `src`, `images`, 'hero'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ]
}
