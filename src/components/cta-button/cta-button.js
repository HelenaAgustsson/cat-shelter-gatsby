import React from 'react'
import RedButton from './styles'
import { Link } from 'gatsby'

const CTAButton = ({
  cta = 'Submit',
  onClick = () => {},
  link,
  disabled = false,
}) => {
  if (!link) {
    return (
      <RedButton onClick={onClick} disabled={disabled}>
        {cta}
      </RedButton>
    )
  }

  return (
    <Link to={link}>
      <RedButton disabled={disabled}>{cta}</RedButton>
    </Link>
  )
}

export default CTAButton
