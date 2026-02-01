import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SiteNav from '../navigation/sitenav'
import Footer from './footer'
import { LayoutDiv, PageContainer } from './styles'

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
    <div>
      <SiteNav
        menuLinks={data.site.siteMetadata.menuLinks}
        siteTitle={data.site.siteMetadata?.title}
      />
      <PageContainer>{children}</PageContainer>
      <Footer></Footer>
    </div>
  )
}

export default Layout
