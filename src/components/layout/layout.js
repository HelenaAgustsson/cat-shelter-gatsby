import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SiteNav from '../navigation/sitenav'
import Footer from './footer'
import { LayoutDiv, PageContainer } from './styles'
import { Helmet } from 'react-helmet'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <LayoutDiv>
      <Helmet>
        <meta
          property="og:image"
          content="https://helenas-cat-shelter.netlify.app/catshelter-screenshot.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:title" content="Helena's Cat Shelter" />
        <meta
          property="og:description"
          content="Helena's Cat Shelter is a non-profit organization dedicated to finding loving homes for cats in need. Browse our cats and start your adoption journey today."
        />
        <meta
          property="og:url"
          content="https://helenas-cat-shelter.netlify.app"
        />
      </Helmet>
      <SiteNav
        menuLinks={data.site.siteMetadata.menuLinks}
        siteTitle={data.site.siteMetadata?.title}
      />
      <PageContainer>{children}</PageContainer>
      <Footer></Footer>
    </LayoutDiv>
  )
}

export default Layout
