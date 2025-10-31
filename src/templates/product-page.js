import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import ContentContainer from '../components/ContentContainer/contentcontainer'
import Product from '../components/product/product'
import SiteLink from '../components/sitelink/sitelink'

const productPage = ({ data }) => {
  const ppdata = data.contentfulProduct
  return (
    <Layout>
      <ContentContainer>
        <SiteLink link="/shop" linkText="Back to shop" />
        <Product productData={ppdata} contentful_id={ppdata.contentful_id} />
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
      description {
        raw
      }
      image {
        gatsbyImageData
      }
    }
  }
`
