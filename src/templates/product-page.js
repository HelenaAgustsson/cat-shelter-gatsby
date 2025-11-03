import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import ContentContainer from '../components/content-container/content-container'
import Product from '../components/product/product'
import SiteLink from '../components/sitelink/sitelink'

const productPage = ({ data }) => {
  const ppdata = data.contentfulProduct

  return (
    <Layout>
      <ContentContainer>
        <SiteLink link="/shop" linkText="Back to shop" />
        <Product productData={ppdata} />
      </ContentContainer>
    </Layout>
  )
}

export default productPage

export const pageQuery = graphql`
  query sspQuery($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      contentful_id
      __typename
      slug
      title
      alt
      details {
        details
      }
      description {
        raw
      }
      image {
        gatsbyImageData
      }
    }
  }
`
