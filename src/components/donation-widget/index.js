import React from 'react'
import CTAButton from '../cta-button/cta-button'
import {
  DonationContainer,
  ButtonContainer,
  CTAContainer,
  TextContainer,
  ImageContainer,
  Header,
  TransparentButton,
} from './styles'

const DonationWidget = ({ data }) => {
  const { title, subtitle, image, cta } = { ...data }
  return (
    <DonationContainer>
      <TextContainer>
        <Header>{title}</Header>
        {subtitle}
        <ButtonContainer>
          <TransparentButton>£15</TransparentButton>
          <TransparentButton>£25</TransparentButton>
          <TransparentButton>£50</TransparentButton>
        </ButtonContainer>
        <CTAContainer>
          <CTAButton cta={cta} link="" />
        </CTAContainer>
      </TextContainer>
      <ImageContainer $image={image.file.url} />
    </DonationContainer>
  )
}

export default DonationWidget
