import React from 'react'
import { Link } from 'gatsby'
import CTAButton from '../button/CTAButton'
import { MobileMenuContainer, MenuLink, ButtonContainer } from './styles'

const MobileMenu = ({ links, isOpen }) => {
  return (
    <MobileMenuContainer>
      {isOpen ? (
        <div>
          {links.map((link) => (
            <MenuLink key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </MenuLink>
          ))}
          <ButtonContainer>
            <CTAButton cta="Donate" />
          </ButtonContainer>
        </div>
      ) : null}
    </MobileMenuContainer>
  )
}

export default MobileMenu
