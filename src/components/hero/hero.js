import React from 'react'
//import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { SectionDiv } from '../section/styles'
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
      <SectionDiv>
        <MobileTitle>
          <Title>{pagetitle}</Title>
        </MobileTitle>
      </SectionDiv>
    </HeroContainer>
  )
}

export default StandardHero
