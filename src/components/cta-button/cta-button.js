import React from 'react'
import RedButton from './styles'
import { Link } from 'gatsby'

const CTAButton = ({ cta = 'Submit', onClick = () => {}, link = '/' }) => {
  return (
    <Link to={link}>
      <RedButton onClick={onClick}>{cta}</RedButton>
    </Link>
  )
}

export default CTAButton
