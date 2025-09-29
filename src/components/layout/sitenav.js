import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import CTAButton from '../button/CTAButton'
import {
  NavContainer,
  FlexContainer,
  LogoContainer,
  MenuLink,
  ButtonContainer,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const SiteNav = ({ siteTitle, menuLinks }) => (
  <NavContainer>
    <FlexContainer>
      <LogoContainer>
        <Link to="/">{siteTitle}</Link>
      </LogoContainer>
      <FlexContainer>
        {menuLinks.map((link) => (
          <MenuLink key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </MenuLink>
        ))}
        <ButtonContainer>
          <CTAButton cta="Donate" />
        </ButtonContainer>
        <FontAwesomeIcon icon={faBars} />
      </FlexContainer>
    </FlexContainer>
  </NavContainer>
)

SiteNav.propTypes = {
  siteTitle: PropTypes.string,
}

SiteNav.defaultProps = {
  siteTitle: ``,
}

export default SiteNav
