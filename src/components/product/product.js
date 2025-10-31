import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Section from '../section/section'
import {
  ImageContainer,
  FlexContainer,
  ProductTitle,
  ProductDetails,
} from '../product/styles'

const Product = ({ productData }) => {
  const title = productData?.title
  const image = productData?.image?.gatsbyImageData
  const alt = productData?.alt

  return (
    <Section>
      <FlexContainer>
        <ImageContainer>
          {image ? <GatsbyImage image={image} alt={alt} /> : null}
        </ImageContainer>
        <ProductDetails>
          <ProductTitle>{title}</ProductTitle>
          {productData?.details.details}
        </ProductDetails>
      </FlexContainer>
    </Section>
  )
}

export default Product
