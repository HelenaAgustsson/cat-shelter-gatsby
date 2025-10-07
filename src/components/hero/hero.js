import React from 'react'
//import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import {
  HeroContainer,
  Hero,
  BackgroundContainer,
  TitleContainer,
  Title,
  MobileTitle,
} from './styles'

const StandardHero = ({ heroImage, pagetitle }) => {
  //const image = getImage(heroImage)
  return (
    <HeroContainer>
      <Hero $image={heroImage.file.url}>
        <BackgroundContainer>
          <TitleContainer>
            <Title>{pagetitle}</Title>
          </TitleContainer>
        </BackgroundContainer>
      </Hero>
      <MobileTitle>
        <Title>{pagetitle}</Title>
      </MobileTitle>
    </HeroContainer>
  )
}

export default StandardHero
