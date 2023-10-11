import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Product from "../components/product/product"

const productPage=({data})=>{
  const ppdata=data.contentfulProduct
  console.log(ppdata)
    return (
      <Layout>
        <Product productData={ppdata} contentful_id={ppdata.contentful_id}  ></Product>
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
        image {
          gatsbyImageData(width: 300)
        }
    }
  }
`