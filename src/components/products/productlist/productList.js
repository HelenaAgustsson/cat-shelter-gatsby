import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container, ProductContainer, LinkTitle } from './styles'

const ProductList = ({ products }) => {
  return (
    <Container>
      {products.map((product, index) => (
        <ProductContainer key={index}>
          <Link to={product.slug}>
            <GatsbyImage
              image={product.image.gatsbyImageData}
              alt={product.image.description}
            />
          </Link>
          <LinkTitle>
            <Link to={product.slug}>{product.title}</Link>
          </LinkTitle>
        </ProductContainer>
      ))}
    </Container>
  )
}

export default ProductList
