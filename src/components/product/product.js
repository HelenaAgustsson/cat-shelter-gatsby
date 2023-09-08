import * as React from 'react'
import { graphql } from 'gatsby'
import {GatsbyImage, getImage } from 'gatsby-plugin-image'

const Product =({
    title, 
    image,
    alt
})=>{
    return (
      <div>
        <h2>{title}</h2>
        <GatsbyImage image={image} alt={alt} />
      </div>
        

    )
}

export default Product;

/*
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
*/