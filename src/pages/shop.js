import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'
import ContentContainer from '../components/content-container/content-container'
import Section from '../components/section/section'
import Grid from '../components/grid/grid'
import TextBlock from '../components/textblock/textblock'

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
          <Grid items={products} />
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
        alt
        image {
          gatsbyImageData(height: 250, width: 250)
          title
          description
        }
      }
    }
  }
`
