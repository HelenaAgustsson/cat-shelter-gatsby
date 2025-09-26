import React from 'react'
import { graphql } from 'gatsby'
import { Script } from 'gatsby'
import Layout from '../components/layout/layout'
import Product from '../components/products/product/product'

const productPage = ({ data }) => {
  const ppdata = data.contentfulProduct
  return (
    <Layout>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BL7C5TFCB5"
      ></Script>
      <Script id="google-analytics-4">
        {` window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-BL7C5TFCB5');
            `}
      </Script>
      <Product
        productData={ppdata}
        contentful_id={ppdata.contentful_id}
      ></Product>
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
        gatsbyImageData(width: 300)
      }
    }
  }
`
