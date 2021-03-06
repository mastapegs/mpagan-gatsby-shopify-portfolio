/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Matthew Pagan`,
    siteUrl: `https://matthewpagan.com`,
    description: `Blazing fast modern websites`,
    social: {
      twitter: `mastapegs`
    }
  },
  plugins: [
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://matthewpagan.com',
        sitemap: 'https://matthewpagan.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '*' }],
      },
     },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matthew Pagan`,
        short_name: `Matthew Pagan`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#092cb8`,
        display: `standalone`,
        icon: `src/images/favicon/favicon.png`
      }
    },
    'gatsby-plugin-offline',
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