import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import ContentContainer from '../components/ContentContainer/contentcontainer'
import StandardHero from '../components/hero/hero'
import Section from '../components/section/section'
import Intro from '../components/intro/intro'

const DonatePage = ({ data }) => {
  const pageData = data.contentfulDonatePage
  const img = pageData.heroImage
  const pagetitle = pageData.pagetitle

  return (
    <Layout>
      <StandardHero heroImage={img} pagetitle={pagetitle}></StandardHero>
      <ContentContainer>
        <Section>
          <Intro data={pageData.introBlock} />
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
      introBlock {
        header
        content {
          content
        }
      }
    }
  }
`
