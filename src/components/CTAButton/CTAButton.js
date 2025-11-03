import React from 'react'
import DefaultButton from './styles'
import { Link } from 'gatsby'

const CTAButton = ({ cta = 'Submit', onClick = () => {}, link }) => {
  return (
    <DefaultButton onClick={onClick}>
      <Link to={link}>{cta}</Link>
    </DefaultButton>
  )
}

export default CTAButton
