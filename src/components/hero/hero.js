import React from 'react'
//import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import {
  HeroContainer,
  Hero,
  TitleContainer,
  Title,
  MobileTitle,
} from './styles'

const StandardHero = ({ heroImage, pagetitle }) => {
  //const image = getImage(heroImage)
  return (
    <HeroContainer>
      <Hero $image={heroImage.file.url}>
        <TitleContainer>
          <Title>{pagetitle}</Title>
        </TitleContainer>
      </Hero>
      <MobileTitle>
        <Title>{pagetitle}</Title>
      </MobileTitle>
    </HeroContainer>
  )
}

export default StandardHero
