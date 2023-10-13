import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Product from "../components/product/product"
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const productPage=({data})=>{
  const ppdata=data.contentfulProduct
    return (
      <Layout>
        <Product productData={ppdata} contentful_id={ppdata.contentful_id}></Product>
      </Layout>
    )
}

export default productPage;

export const pageQuery = graphql`
query sspQuery($slug: String!) {
    contentfulProduct(slug: {eq: $slug}) {
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