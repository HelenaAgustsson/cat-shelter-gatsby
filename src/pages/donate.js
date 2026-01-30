import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import ContentContainer from '../components/content-container/content-container'
import Hero from '../components/hero/hero'
import Section from '../components/section/section'
import TextBlock from '../components/textblock/textblock'
import DonationWidget from '../components/donation-widget'

const DonatePage = ({ data }) => {
  const pageData = data.contentfulDonatePage
  const img = pageData.heroImage
  const pagetitle = pageData.pagetitle

  return (
    <Layout>
      <Hero heroImage={img} pagetitle={pagetitle} />
      <ContentContainer>
        <Section>
          <TextBlock data={pageData.textBlock} />
        </Section>
        <Section>
          <DonationWidget data={pageData.widget} />
        </Section>
      </ContentContainer>
    </Layout>
  )
}

export default DonatePage

export const pageQuery = graphql`
  query {
    contentfulDonatePage {
      pagetitle
      heroImage {
        description
        file {
          url
        }
        gatsbyImageData(width: 1500, placeholder: BLURRED)
      }
      textBlock {
        header
        content {
          content
        }
      }
      widget {
        title
        subtitle
        cta
        image {
          file {
            url
          }
        }
      }
    }
  }
`
