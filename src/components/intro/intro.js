import React from 'react'
import { IntroDiv } from './styles'

const Intro = ({ data }) => {
  if (data) {
    return (
      <IntroDiv>
        <div>{data.content.content}</div>
      </IntroDiv>
    )
  }
}

export default Intro
