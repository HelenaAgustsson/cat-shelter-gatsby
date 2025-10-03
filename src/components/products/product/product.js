import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import RichText from '../../richtext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {
  ProductContainer,
  LinkContainer,
  BackLink,
  FlexContainer,
  ProductTitle,
  ProductDetails,
} from './styles'
import { Link } from 'gatsby'

const Product = ({ productData }) => {
  const title = productData.title
  const image = productData.image.gatsbyImageData
  const alt = productData.alt

  return (
    <ProductContainer>
      <LinkContainer>
        <FontAwesomeIcon icon={faArrowLeft} className="fa-thin" />
        <BackLink to="/shop">Back to Product Listings</BackLink>
      </LinkContainer>

      <FlexContainer>
        <GatsbyImage image={image} alt={alt} />
        <ProductDetails>
          <ProductTitle>{title}</ProductTitle>
          <RichText richText={productData.description} />
        </ProductDetails>
      </FlexContainer>
    </ProductContainer>
  )
}

export default Product
