import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'
import ProductList from '../components/products/productlist/productList'
import Section from '../components/section/section'
import TextBlock from '../components/textblock/textblock'
import ContentContainer from '../components/ContentContainer/contentcontainer'

const ProductListPage = ({ data }) => {
  const pageData = data.contentfulProductListPage
  const products = data.allContentfulProduct.nodes

  return (
    <Layout>
      <Hero heroImage={pageData.heroImage} pagetitle={pageData.title}></Hero>
      <ContentContainer>
        <Section>
          <TextBlock data={pageData.textBlock} />
        </Section>
        <Section>
          <ProductList products={products}></ProductList>
        </Section>
      </ContentContainer>
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
      textBlock {
        header
        content {
          content
        }
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
          description
        }
      }
    }
  }
`
