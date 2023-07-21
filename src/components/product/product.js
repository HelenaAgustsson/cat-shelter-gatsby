import * as React from 'react'
import { graphql } from 'gatsby'
import {GatsbyImage, getImage } from 'gatsby-plugin-image'

const Product =({
    title, 
    image
})=>{
    return (
      <div>
        <div>{title}</div>
        <GatsbyImage image={image.gatsbyImageData} />
      </div>
        

    )
}

export default Product;

export const query = graphql`
  fragment Product on ContentfulProduct {
    contentfulProduct(title: {}) {
        title
        image {
          gatsbyImageData
        }
      }
  }
`