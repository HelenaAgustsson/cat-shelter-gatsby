import React, { useState } from 'react'
import { Link } from 'gatsby'
import CTAButton from '../button/CTAButton'
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
        <CTAButton cta="Donate" />
      </ButtonContainer>
    </MenuContainer>
  )
}

export default Menu
