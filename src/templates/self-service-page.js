import React from "react"
import { graphql } from "gatsby"
import {GatsbyImage, getImage } from 'gatsby-plugin-image'


const selfServicePage=({data})=>{
    console.log(data.contentfulSelfServicePage.products[0].image.gatsbyImageData)
    return (
        <>
            <div>{data.contentfulSelfServicePage.title}</div>
            <GatsbyImage image={data.contentfulSelfServicePage.products[0].image.gatsbyImageData} alt='mug' />
        </>
    )
}

export default selfServicePage;


export const pageQuery = graphql`
query sspQuery($slug: String!) {
    contentfulSelfServicePage(slug: {eq: $slug}) {
        slug
        title
        products {
          title
          image {
            gatsbyImageData
          }
        }
    }
  }
  `