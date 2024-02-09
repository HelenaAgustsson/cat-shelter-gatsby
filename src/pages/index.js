import * as React from 'react'
import { graphql } from 'gatsby'
import StandardHero from '../components/hero/hero'
import Layout from '../components/layout/layout'
import Banner from '../components/banner/banner'
// import * as Sentry from '@sentry/gatsby'
// import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { Script } from 'gatsby'

const HomePage = ({ data }) => {
  const img = data.allContentfulHomepage.nodes[0].heroImage
  const pagetitle = data.allContentfulHomepage.nodes[0].pagetitle

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
      <Banner title="We are here for cats" />
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    allContentfulHomepage {
      nodes {
        contentful_id
        pagetitle
        heroImage {
          description
          file {
            url
          }
          gatsbyImageData(height: 300)
        }
      }
    }
  }
`
