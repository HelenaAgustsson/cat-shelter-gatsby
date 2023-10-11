import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Hero from "./hero"
import Header from "./header"
import { TopContainer, TitleContainer } from "./styles"


const Layout = ({ heroImage, pagetitle, children }) => {
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
    <div className="container">
        <TopContainer>
        { heroImage? <Hero heroImage={heroImage} pagetitle={pagetitle}></Hero>:'' }
        <TitleContainer><h1>{pagetitle}</h1></TitleContainer>
        </TopContainer>
        {children}</div>
    </>
    
   )
}

export default Layout;