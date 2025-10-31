import React from 'react'
import { TextContainer, TextHeader, TextContent } from './styles'

const TextBlock = ({ data }) => {
  return (
    <TextContainer>
      <TextHeader>{data.header}</TextHeader>
      <TextContent>{data.content.content}</TextContent>
    </TextContainer>
  )
}

export default TextBlock
