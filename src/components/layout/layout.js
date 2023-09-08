import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Hero from "./hero"
import Header from "./header"


const Layout = ({ heroImage, children }) => {
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
    <>
    <Header menuLinks={data.site.siteMetadata.menuLinks}  siteTitle={data.site.siteMetadata?.title} />
    {heroImage? <Hero heroImage={heroImage}></Hero>:''}
    
    <div className="container">{children}</div>
    </>
    
   )
}

export default Layout;