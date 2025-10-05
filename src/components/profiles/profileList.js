import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import {
  Section,
  Container,
  ProfileContainer,
  ImageContainer,
  TitleContainer,
} from './styles'

const ProfileList = ({ profiles }) => {
  return (
    <Section>
      <Container>
        {profiles.map((profile, index) => (
          <ProfileContainer key={index}>
            <ImageContainer>
              <GatsbyImage
                image={profile.image.gatsbyImageData}
                alt={profile.image.description}
              />
            </ImageContainer>
            <TitleContainer>{profile.title}</TitleContainer>
          </ProfileContainer>
        ))}
      </Container>
    </Section>
  )
}

export default ProfileList
