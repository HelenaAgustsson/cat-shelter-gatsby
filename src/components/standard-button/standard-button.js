import React from 'react'
import DefaultButton from './styles'
import { Link } from 'gatsby'

const StandardButton = ({
  title = 'submit',
  onClick = () => {},
  link = '/',
}) => {
  return (
    <DefaultButton onClick={onClick}>
      <Link to={link}>{title}</Link>
    </DefaultButton>
  )
}

export default StandardButton
