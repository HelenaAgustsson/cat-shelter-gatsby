import React from 'react'
import RedButton from './styles'
import { Link } from 'gatsby'

const CTAButton = ({ cta = 'Submit', onClick = () => {}, link = '/' }) => {
  return (
    <RedButton onClick={onClick}>
      <Link to={link}>{cta}</Link>
    </RedButton>
  )
}

export default CTAButton
