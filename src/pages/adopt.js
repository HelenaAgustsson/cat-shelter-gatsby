import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import ContentContainer from '../components/ContentContainer/contentcontainer'
import Hero from '../components/hero/hero'
import Section from '../components/section/section'
import TextBlock from '../components/textblock/textblock'
import ProfileList from '../components/profiles/profileList'

const AdoptPage = ({ data }) => {
  const pageData = data.contentfulAdoptPage
  const profiles = data.allContentfulProfile.nodes

  return (
    <Layout>
      <Hero heroImage={pageData.heroImage} pagetitle={pageData.title}></Hero>
      <ContentContainer>
        <Section>
          <TextBlock data={pageData.textBlock} />
        </Section>
        <ProfileList profiles={profiles} />
      </ContentContainer>
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
      textBlock {
        header
        content {
          content
        }
      }
    }

    allContentfulProfile {
      nodes {
        title
        slug
        image {
          gatsbyImageData(height: 250, width: 250)
          title
          description
        }
      }
    }
  }
`
