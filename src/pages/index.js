import * as React from 'react'
import { graphql } from 'gatsby'
import {GatsbyImage, getImage } from 'gatsby-plugin-image'

const HomePage =({data})=>{
  console.log(data)
  return (
    <>
    <div>This is the homepage</div>
    <div>{}</div>
    <GatsbyImage image={data.contentfulProduct.image.gatsbyImageData} alt='mug' />
    </>
    
  )
}

export default HomePage

export const pageQuery = graphql`
query {
  contentfulProduct(title: {}) {
    title
    image {
      gatsbyImageData
    }
  }
}
`