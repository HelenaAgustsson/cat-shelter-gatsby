import React from "react"
import { graphql } from "gatsby"
import {GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from "../components/layout/layout"

const selfServicePage=({data})=>{
    console.log(data.contentfulSelfServicePage.products[0].image.gatsbyImageData)
    return (
        <>
            <Layout></Layout>
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