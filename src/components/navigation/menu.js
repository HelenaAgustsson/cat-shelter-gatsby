import React, { useState } from 'react'
import { Link } from 'gatsby'
import Button from '../button/Button'
import { MenuContainer, MenuLink, ButtonContainer } from './styles'

const Menu = ({ links }) => {
  return (
    <MenuContainer>
      {links.map((link) => (
        <MenuLink key={link.name}>
          <Link to={link.link}>{link.name}</Link>
        </MenuLink>
      ))}
      <ButtonContainer>
        <Button cta="Donate" link="/donate" />
      </ButtonContainer>
    </MenuContainer>
  )
}

export default Menu
