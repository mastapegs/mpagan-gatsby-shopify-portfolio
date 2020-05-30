import React from 'react'
import Navigation from './Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import { graphql } from 'gatsby'

export const query = graphql`
{
  site {
    siteMetadata {
      title
      siteUrl
      description
    }
  }
}
`

const Layout = ({ data, children: page }) => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        {page}
      </main>
      <footer></footer>
    </>
  )
}

export default Layout