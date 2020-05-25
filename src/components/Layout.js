import React from 'react'
import Navigation from './Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'

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