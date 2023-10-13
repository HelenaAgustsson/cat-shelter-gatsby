import React, {useContext} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import ThemeContext from "../components/themecontext"
import ProductList from "../components/productlist/productList"


const ProductListPage = ({data}) => {
  const products = data.allContentfulProduct.nodes;
  const theme = useContext(ThemeContext);
    return (
      <>
        <Layout heroImage={data.contentfulProductListPage.heroImage} pagetitle={data.contentfulProductListPage.title}>
          <ThemeContext.Provider value="shelter">
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
    heroImage {
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
        gatsbyImageData
        title
      }
    }
  }
}
`