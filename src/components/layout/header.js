import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { HeaderDiv, FlexContainer, LogoContainer, Nav } from "./styles"

const Header = ({ siteTitle, menuLinks }) => (
    <HeaderDiv>
      <FlexContainer>
        <LogoContainer>
          <Link to="/">{siteTitle}</Link>
        </LogoContainer>
        <Nav>
          {menuLinks.map(link => (
            <div style={{paddingLeft:"20px"}}><Link to={link.link} >{link.name}</Link></div>
          ))}
        </Nav>
      </FlexContainer>
    </HeaderDiv>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header