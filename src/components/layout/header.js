import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { HeaderContainer, FlexContainer, LogoContainer, Nav, MenuLink } from "./styles"

const Header = ({ siteTitle, menuLinks }) => (
    <HeaderContainer>
      <FlexContainer>
        <LogoContainer>
          <Link to="/">{siteTitle}</Link>
        </LogoContainer>
        <Nav>
          {menuLinks.map(link => (
            <MenuLink key={link.name}><Link to={link.link} >{link.name}</Link></MenuLink>
          ))}
        </Nav>
      </FlexContainer>
    </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header