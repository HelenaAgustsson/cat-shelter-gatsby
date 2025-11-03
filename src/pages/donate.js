import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import ContentContainer from '../components/content-container/content-container'
import StandardHero from '../components/hero/hero'
import Section from '../components/section/section'
import TextBlock from '../components/textblock/textblock'

const DonatePage = ({ data }) => {
  const pageData = data.contentfulDonatePage
  const img = pageData.heroImage
  const pagetitle = pageData.pagetitle

  return (
    <Layout>
      <StandardHero heroImage={img} pagetitle={pagetitle}></StandardHero>
      <ContentContainer>
        <Section>
          <TextBlock data={pageData.textBlock} />
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
      }
      textBlock {
        header
        content {
          content
        }
      }
    }
  }
`
