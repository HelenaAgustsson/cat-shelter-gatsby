import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import ProductList from "../components/productlist/productList"


const ProductListPage = ({data}) => {
  console.log(data)
    return (
      <Layout>
        <Hero heroImage={data.contentfulProductListPage.heroImage} pagetitle={data.contentfulProductListPage.title}></Hero>
        <ProductList products={data.allContentfulProduct.nodes}></ProductList>
      </Layout>
          
    )
}

export default ProductListPage

export const pageQuery = graphql`
query plquery {
  contentfulProductListPage {
    title
    heroImage {
      description
        file {
          url
        }
      gatsbyImageData(height: 300)
    }
  }
  allContentfulProduct {
    nodes {
      contentful_id
      title
      slug
      categories
      alt
      sku
      image {
        gatsbyImageData(height: 250, width: 250)
        title
      }
    }
  }
}
`