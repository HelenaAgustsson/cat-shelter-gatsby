import React from 'react'
import { Link } from 'gatsby'
import CTAButton from '../CTAButton/CTAButton'
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
        <CTAButton cta="Donate" link="/donate" />
      </ButtonContainer>
    </MenuContainer>
  )
}

export default Menu
