import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import RichText from '../richtext'
import Section from '../section/section'
import {
  ImageContainer,
  FlexContainer,
  ProductTitle,
  ProductDetails,
} from '../product/styles'

const Product = ({ productData }) => {
  const { title, alt, description, image } = { ...productData }

  return (
    <Section>
      <FlexContainer>
        <ImageContainer>
          {image ? (
            <GatsbyImage image={image.gatsbyImageData} alt={alt} />
          ) : null}
        </ImageContainer>
        <ProductDetails>
          <ProductTitle>{title}</ProductTitle>
          {description ? <RichText richText={description} /> : null}
        </ProductDetails>
      </FlexContainer>
    </Section>
  )
}

export default Product
