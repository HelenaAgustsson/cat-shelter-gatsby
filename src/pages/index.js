import * as React from 'react'
import { graphql } from 'gatsby'
import * as Sentry from '@sentry/gatsby'
import {GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout/layout'
import Button from '../components/button/button'

const HomePage =({data})=>{
  const onClick = () => {
    
    Sentry.captureMessage("Button click error");
    console.log('click');
  }
  return (
    <>
    <Layout>
    <div>This is the homepage</div>
    <div></div>
    <Button />
    </Layout>
    </>
    
  )
}

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