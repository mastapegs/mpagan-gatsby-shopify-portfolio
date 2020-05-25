import React from 'react'
import Navigation from './Navigation'

const Layout = ({ children: page }) => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        {page}
      </main>
    </>
  )
}

export default Layout