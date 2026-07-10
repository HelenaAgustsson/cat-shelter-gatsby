import React, { useState } from 'react'
import CTAButton from '../cta-button/cta-button'
import {
  DonationContainer,
  ButtonContainer,
  CTAContainer,
  TextContainer,
  ImageContainer,
  Header,
  TransparentButton,
  ThankYouContainer,
  ThankYouHeader,
} from './styles'

const AMOUNTS = [15, 25, 50]

const DonationWidget = ({ data, onDonate }) => {
  const { title, subtitle, image, cta } = { ...data }
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [hasDonated, setHasDonated] = useState(false)

  const handleDonate = async () => {
    if (!selectedAmount) return
    setHasDonated(true)
  }

  if (hasDonated) {
    return (
      <DonationContainer>
        <ImageContainer $image={image.file.url} />
        <ThankYouContainer>
          <ThankYouHeader>Thank you!</ThankYouHeader>
          <p>Your donation of £{selectedAmount} means a huge amount to us.</p>
        </ThankYouContainer>
      </DonationContainer>
    )
  }

  return (
    <DonationContainer>
      <ImageContainer $image={image.file.url} />
      <TextContainer>
        <Header>{title}</Header>
        {subtitle}
        <ButtonContainer>
          {AMOUNTS.map((amount) => (
            <TransparentButton
              key={amount}
              $selected={selectedAmount === amount}
              onClick={() => setSelectedAmount(amount)}
              aria-pressed={selectedAmount === amount}
            >
              £{amount}
            </TransparentButton>
          ))}
        </ButtonContainer>
        <CTAContainer>
          <CTAButton
            cta={cta}
            onClick={handleDonate}
            disabled={!selectedAmount}
          />
        </CTAContainer>
      </TextContainer>
    </DonationContainer>
  )
}

export default DonationWidget
