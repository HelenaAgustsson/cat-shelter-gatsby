import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import RichText from '../../richtext'
import Section from '../../section/section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {
  LinkContainer,
  BackLink,
  ImageContainer,
  FlexContainer,
  ProductTitle,
  ProductDetails,
} from './styles'

const Product = ({ productData }) => {
  const title = productData.title
  const image = productData.image.gatsbyImageData
  const alt = productData.alt

  return (
    <Section>
      <LinkContainer>
        <FontAwesomeIcon icon={faArrowLeft} className="fa-thin" />
        <BackLink to="/shop">Back to Product Listings</BackLink>
      </LinkContainer>
      <FlexContainer>
        <ImageContainer>
          <GatsbyImage image={image} alt={alt} />
        </ImageContainer>
        <ProductDetails>
          <ProductTitle>{title}</ProductTitle>
          <RichText richText={productData.description} />
        </ProductDetails>
      </FlexContainer>
    </Section>
  )
}

export default Product
