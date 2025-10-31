import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container, ItemContainer, ItemTitle } from './styles'

const Grid = ({ items }) => {
  return (
    <Container>
      {items.map((item, index) => (
        <ItemContainer key={index}>
          <Link to={item.slug}>
            <GatsbyImage
              image={item.image.gatsbyImageData}
              alt={item.image.description}
            />
          </Link>
          <ItemTitle>
            <Link to={item.slug}>{item.title}</Link>
          </ItemTitle>
        </ItemContainer>
      ))}
    </Container>
  )
}

export default Grid
