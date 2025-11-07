import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import StandardHero from '../components/hero/hero'
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
      <StandardHero heroImage={img} pagetitle={pagetitle}></StandardHero>
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
