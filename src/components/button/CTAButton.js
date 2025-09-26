import React from 'react'
import DefaultButton from './styles'

const CTAButton = ({ cta = 'Click' }) => {
  const onClick = () => {
    console.log('click')
  }
  return <DefaultButton onClick={onClick}>{cta}</DefaultButton>
}

export default CTAButton
