import React from 'react'
import { Link } from 'gatsby'
import { Navbar, Nav } from 'react-bootstrap'
import { useLocation } from '@reach/router'
import styles from './Navigation.module.css'

const Navigation = () => {
  const { pathname } = useLocation()
  const links = [
    {
      href: '/about',
      linkText: 'About'
    }, {
      href: '/contact',
      linkText: 'Contact'
    }, {
      href: '/blog',
      linkText: 'Blog'
    }, {
      href: '/shop',
      linkText: 'Shop'
    }
  ]
  return (
    <>
      <Navbar bg="dark" variant='dark' expand="sm">
        <Navbar.Brand><Link className={styles.link} to='/'>Matthew Pagan</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={pathname} className="mr-auto">
            {links.map(({ href, linkText }) => (
              <Nav.Link as="li" eventKey={href}>
                <Link className={styles.link} to={href}>{linkText}</Link>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navigation