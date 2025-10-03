import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import {
  NavContainer,
  FlexContainer,
  LogoContainer,
  BarsContainer,
} from './styles'
import Menu from './menu'
import MobileMenu from './mobilemenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const SiteNav = ({ siteTitle, menuLinks }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <NavContainer>
      <FlexContainer>
        <LogoContainer>
          <Link to="/">{siteTitle}</Link>
        </LogoContainer>
        <Menu links={menuLinks} />
        <MobileMenu links={menuLinks} isOpen={isOpen} />
      </FlexContainer>
      <BarsContainer>
        <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
      </BarsContainer>
    </NavContainer>
  )
}

SiteNav.propTypes = {
  siteTitle: PropTypes.string,
}

SiteNav.defaultProps = {
  siteTitle: ``,
}

export default SiteNav

/*
 {isOpen ? (
          <Menu menuLinks={menuLinks} isOpen={isOpen} type="mobile" />
        ) : null}
*/
