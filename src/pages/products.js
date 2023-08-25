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
        <h2>{data.contentfulProductListPage.title}</h2>
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