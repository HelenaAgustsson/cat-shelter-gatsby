import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Product from "../components/product/product"

const productPage=({data})=>{
  const ppdata=data.contentfulProduct
    return (
      <Layout>
        <Product title={ppdata.title} image={ppdata.image.gatsbyImageData} alt={ppdata.alt}></Product>
      </Layout>
    )
}

export default productPage;


export const pageQuery = graphql`
query sspQuery($slug: String!) {
    contentfulProduct(slug: {eq: $slug}) {
        slug
        title
        alt
        image {
          gatsbyImageData(width: 300)
        }
    }
  }
  `