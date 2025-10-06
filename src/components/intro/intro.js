import React from 'react'
import { IntroDiv } from './styles'

const Intro = ({ data }) => {
  if (data) {
    return <IntroDiv>{data.content.content}</IntroDiv>
  }
}

export default Intro
