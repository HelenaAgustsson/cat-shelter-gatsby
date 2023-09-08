import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { HeaderDiv, FlexContainer, TitleContainer, LinksContainer } from "./styles"

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <HeaderDiv>
      <FlexContainer>
        <TitleContainer>
          <Link to="/">{siteTitle}</Link>
        </TitleContainer>
        <div>
          <nav>
            <LinksContainer>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link to={link.link}>
                    {link.name}
                  </Link>
                </li>
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