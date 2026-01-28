import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import HomepageHero from '../components/homepage-hero/hero'
import ContentContainer from '../components/content-container/content-container'
import Section from '../components/section/section'
import TextBlock from '../components/textblock/textblock'
import DualBlock from '../components/dual-block/dual-block'

const HomePage = ({ data }) => {
  const pageData = data.contentfulHomepage
  const img = pageData.heroImage
  const pagetitle = pageData.pagetitle
  const textBlocks = pageData.textBlock

  return (
    <Layout>
      <HomepageHero heroImage={img} pagetitle={pagetitle} />
      <ContentContainer>
        <Section>
          {textBlocks.map((block, index) => (
            <Section key={index}>
              <TextBlock data={block} />
            </Section>
          ))}
        </Section>
        <Section>
          <DualBlock data={pageData.dualBlock} />
        </Section>
      </ContentContainer>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    contentfulHomepage {
      contentful_id
      pagetitle
      heroImage {
        description
        file {
          url
        }
        gatsbyImageData(height: 500)
      }
      textBlock {
        header
        content {
          content
        }
      }
      dualBlock {
        title
        text
        image {
          file {
            url
          }
        }
      }
      campaignSection {
        header
        listItems {
          header
          textContent {
            textContent
          }
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
`
