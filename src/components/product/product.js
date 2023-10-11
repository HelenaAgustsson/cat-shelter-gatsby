import * as React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby';
import {GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';

const Product =({productData})=>{
  
  const title=productData.title;
  const image=productData.image.gatsbyImageData; 
  const alt=productData.alt;

  const updatedProduct= useContentfulLiveUpdates({
    ...productData,
    sys: { id: productData.contentful_id},
  });
  
    return (
      <div>Product page
        <h2>{updatedProduct.title}</h2>
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