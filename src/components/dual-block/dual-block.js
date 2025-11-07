import React from 'react'
import { DualContainer, Header, TextContainer, ImageContainer } from './styles'

const DualBlock = ({ data }) => {
  const { title, text, image } = { ...data }
  return (
    <DualContainer>
      {image ? <ImageContainer $image={image.file.url} /> : null}
      <TextContainer>
        <Header>{title}</Header>
        {text}
      </TextContainer>
    </DualContainer>
  )
}

export default DualBlock
