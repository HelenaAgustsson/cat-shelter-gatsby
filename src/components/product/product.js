import * as React from 'react'
import {GatsbyImage } from 'gatsby-plugin-image'
import RichText from '../richtext';
import { FlexContainer, ProductTitle, ProductDetails } from './styles';

const Product =({productData})=>{
  console.log(productData)
  const title=productData.title;
  const image=productData.image.gatsbyImageData; 
  const alt=productData.alt;
  
    return (
      <FlexContainer>
        <GatsbyImage image={image} alt={alt} />
        <ProductDetails>
          <ProductTitle>{title}</ProductTitle>
          <RichText richText={productData.description} />
        </ProductDetails>
      </FlexContainer>
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