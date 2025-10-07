import React from 'react'
import DefaultButton from './styles'
import { Link } from 'gatsby'

const CTAButton = ({ cta = 'Submit', onClick = () => {} }) => {
  return (
    <DefaultButton onClick={onClick}>
      <Link to="/donate">{cta}</Link>
    </DefaultButton>
  )
}

export default CTAButton
