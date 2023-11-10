import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import { LayoutDiv, ContentContainer } from "./styles"


const Layout = ({children }) => {
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
      <Header menuLinks={data.site.siteMetadata.menuLinks}  siteTitle={data.site.siteMetadata?.title} />
      <ContentContainer>{children}</ContentContainer>
      <Footer></Footer>
    </LayoutDiv>
    
   )
}

export default Layout;