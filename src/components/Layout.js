import React from 'react'
import Navigation from './Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

const Layout = ({ children: page }) => {
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