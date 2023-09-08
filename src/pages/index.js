import * as React from 'react'
import { graphql } from 'gatsby'
import * as Sentry from '@sentry/gatsby'
import Layout from '../components/layout/layout'


const HomePage =({data})=>{
  const img = data.allContentfulHomepage.nodes[0].heroImage;
  console.log(img)
  return (
    <>
    <Layout heroImage={img}></Layout>
    </>
    
  )
}

export default HomePage

export const pageQuery = graphql`
query {
  allContentfulHomepage {
    nodes {
      heroImage {
        gatsbyImageData
      }
    }
  }
}
`