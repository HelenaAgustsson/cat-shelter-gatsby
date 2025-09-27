import React from 'react'
import { graphql } from 'gatsby'
import { Script } from 'gatsby'
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'
import ProductList from '../components/products/productlist/productList'
import Section from '../components/section/section'
import Intro from '../components/intro/intro'

const ProductListPage = ({ data }) => {
  const pageData = data.contentfulProductListPage
  const products = data.allContentfulProduct.nodes

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
      <Hero heroImage={pageData.heroImage} pagetitle={pageData.title}></Hero>
      <Section>
        <Intro data={pageData.introBlock} />
      </Section>
      <ProductList products={products}></ProductList>
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
      introBlock {
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
        }
      }
    }
  }
`
