import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import {
  HeroContainer,
  TitleContainer,
  Title,
  MobileTitle,
  BackgroundContainer,
} from './styles'

const Hero = ({ heroImage, pagetitle }) => {
  return (
    <div>
      <HeroContainer>
        <GatsbyImage
          image={heroImage.gatsbyImageData}
          alt=""
          loading="eager"
          objectFit="cover"
          style={{ width: '100%', height: '100%' }}
        />
      </HeroContainer>

      <BackgroundContainer>
        <TitleContainer>
          <Title>{pagetitle}</Title>
        </TitleContainer>
      </BackgroundContainer>

      <MobileTitle>
        <Title>{pagetitle}</Title>
      </MobileTitle>
    </div>
  )
}

export default Hero
