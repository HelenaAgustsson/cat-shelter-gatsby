import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'
import Section from '../components/section/section'
import Intro from '../components/intro/intro'

const AdoptPage = ({ data }) => {
  const pageData = data.contentfulAdoptPage

  return (
    <Layout>
      <Hero heroImage={pageData.heroImage} pagetitle={pageData.title}></Hero>
      <Section>
        <Intro data={pageData.introBlock} />
      </Section>
    </Layout>
  )
}

export default AdoptPage

export const pageQuery = graphql`
  query plquery {
    contentfulAdoptPage {
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
  }
`
