import React from 'react'
import { DualContainer, Header, TextContainer, ImageContainer } from './styles'

const DualBlock = ({ data }) => {
  return (
    <DualContainer>
      <ImageContainer $image={data.image.file.url} />
      <TextContainer>
        <Header>{data.title}</Header>
        {data.text}
      </TextContainer>
    </DualContainer>
  )
}

export default DualBlock
