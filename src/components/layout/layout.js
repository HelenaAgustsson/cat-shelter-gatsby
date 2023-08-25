import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"


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
    <>
    <Header menuLinks={data.site.siteMetadata.menuLinks}  siteTitle={data.site.siteMetadata?.title} />
    <div className="container">{children}</div>
    </>
    
   )
}

export default Layout;