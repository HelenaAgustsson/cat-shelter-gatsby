import React from 'react'
import DefaultButton from './styles'

const Button = ({ cta }) => {
  const onClick = () => {
    console.log('click')
  }
  return <DefaultButton onClick={onClick}>{cta}</DefaultButton>
}

export default Button
