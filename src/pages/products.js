import React, {useContext} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import ThemeContext from "../components/themecontext"
import ProductList from "../components/productlist/productList"


const ProductListPage = ({data}) => {
  console.log(data)
    const products = data.allContentfulProduct.nodes;
    const theme = useContext(ThemeContext);
    return (
      <>
        <Layout>
          <div className="page-header">
            <h1>{data.contentfulProductListPage.title}</h1>
          </div>
        <ThemeContext.Provider value="pink">
          <div className="flex-container">
          <ProductList products={products}></ProductList>
          </div>
        </ThemeContext.Provider>
        </Layout>
      </>

    )
}

export default ProductListPage

export const pageQuery = graphql`
query plquery {
  contentfulProductListPage {
    title
  }
  allContentfulProduct {
    nodes {
      title
      slug
      categories
      alt
      sku
      image {
        gatsbyImageData
        title
      }
    }
  }
}
`