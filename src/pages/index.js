import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, graphql } from 'gatsby'
import styles from './index.module.css'
import BackgroundImage from 'gatsby-background-image'
import SEO from '../components/SEO'

export const query = graphql`
query MyQuery {
  file(sourceInstanceName: {eq: "hero"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Index = ({ data }) => {
  return (
    <>
      <SEO title='Home' />
      <BackgroundImage
        fluid={data.file.childImageSharp.fluid}
        tag='section'
        className={styles.heroImg}
      >
        <div className={styles.textContainer}>
          <h1>Web Developer</h1>
          <p>
            Welcome to my portfolio website.
          </p>
          <p>
            <Button variant="primary">
              <Link className={styles.links} to='/contact'>Click here to reach out to me!</Link>
            </Button>
          </p>
        </div>
      </BackgroundImage>
    </>
  )
}

export default Index