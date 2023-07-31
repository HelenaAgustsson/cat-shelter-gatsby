import * as React from 'react'
import { graphql } from 'gatsby'
import * as Sentry from "@sentry/gatsby"
import {GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout/layout'

const HomePage =({data})=>{

  return (
    <>
    <Layout></Layout>
    <div>This is the homepage</div>
    <div></div>
    </>
    
  )
}

Sentry.captureMessage("Something went wrong");

export default HomePage

export const pageQuery = graphql`
query {
  contentfulProduct(title: {}) {
    title
    image {
      gatsbyImageData
    }
  }
}
`