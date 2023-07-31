import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"

const ProductListPage = ({data}) => {
    console.log(data)
    const products = data.contentfulProductListPage.products;
    console.log(products)
    return (
      <>
      <Layout></Layout>
        <div>{data.contentfulProductListPage.title}</div>
        <ul>
          <li><Link to={products[0].slug} >{products[0].title}</Link></li>
          <li><Link to={products[1].slug} >{products[1].title}</Link></li>
        </ul>
      </>

    )

}

export default ProductListPage

export const pageQuery = graphql`
query plquery {
  contentfulProductListPage {
    title
    products {
      slug
      title
      products {
        image {
          gatsbyImageData
        }
      }
    }
  }
  }
`