import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { HeaderDiv, FlexContainer, LogoContainer, LinksContainer } from "./styles"

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <HeaderDiv>
      <FlexContainer>
        <LogoContainer>
          <Link to="/">{siteTitle}</Link>
        </LogoContainer>
        <div>
          <nav>
            <LinksContainer>
              {menuLinks.map(link => (
                <div key={link.name} >
                  <Link to={link.link} style={{paddingLeft: "0 20px"}}>
                    {link.name}
                  </Link>
                  </div>
              ))}
            </LinksContainer>
          </nav>
        </div>
      </FlexContainer>
    </HeaderDiv>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header