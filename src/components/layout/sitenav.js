import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { NavContainer, FlexContainer, LogoContainer, MenuLink } from './styles'

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
