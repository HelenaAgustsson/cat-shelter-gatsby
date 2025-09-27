import * as React from 'react'
import { graphql } from 'gatsby'
import { Script } from 'gatsby'
import StandardHero from '../components/hero/hero'
import Layout from '../components/layout/layout'
import Section from '../components/section/section'
import Intro from '../components/intro/intro'

const DonatePage = ({ data }) => {
  const pageData = data.contentfulDonatePage
  const img = pageData.heroImage
  const pagetitle = pageData.pagetitle

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
      <StandardHero heroImage={img} pagetitle={pagetitle}></StandardHero>
      <Section>
        <Intro data={pageData.introBlock} />
      </Section>
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
