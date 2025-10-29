import React from 'react'
import { DualContainer, Header, TextContainer, ImageContainer } from './styles'

const DualBlock = ({ data }) => {
  return (
    <DualContainer>
      <TextContainer>
        <Header>{data.title}</Header>
        {data.text}
      </TextContainer>
      <ImageContainer $image={data.image.file.url} />
    </DualContainer>
  )
}

export default DualBlock
