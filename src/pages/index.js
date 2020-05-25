import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import { Link } from 'gatsby'
import styles from './index.module.css'

const Index = () => {
  return (
    <>
      <Jumbotron>
        <h1>Home</h1>
        <p>
          Welcome to my portfolio website.
        </p>
        <p>
          <Button variant="primary">
            <Link className={styles.links} to='/contact'>Click here to reach out to me!</Link>
          </Button>
        </p>
      </Jumbotron>
    </>
  )
}

export default Index