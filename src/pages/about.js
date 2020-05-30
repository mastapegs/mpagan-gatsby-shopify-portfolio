import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import SEO from '../components/SEO'

const About = () => {
  return (
    <>
      <SEO title='About' />
      <Container>
        <Jumbotron>
          <h1>About</h1>
          <p>
            About me
        </p>
        </Jumbotron>
      </Container>
    </>
  )
}

export default About