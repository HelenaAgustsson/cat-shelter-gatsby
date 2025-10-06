import styled from 'styled-components'
import { breakpoint, fontSize, margin, padding, width } from '../theme'

export const NavContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  font-size: ${fontSize.small};
  font-weight: bold;
  padding: ${padding.medium} 0;

  ${breakpoint.tablet`
    padding: 0;  
  `}

  ${breakpoint.desktopWide`
    max-width: ${width.large};
  `};
`

export const LogoContainer = styled.div`
  display: block;
  padding: 0;
  margin: 0;

  ${breakpoint.tablet`
    padding: ${padding.small} 0;
    margin: ${margin.small} 0;
  `}
`

export const BarsContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 40px;
  padding-right: ${padding.medium};

  ${breakpoint.tablet`
    display:none;
  `}
`

export const MenuContainer = styled.div`
  display: none;

  ${breakpoint.tablet`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `}
`

export const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin-top: ${margin.small};

  ${breakpoint.tablet`
    display:none
  `};
`

export const MenuLink = styled.div`
  padding: ${padding.small};
  margin: ${margin.small};

  ${breakpoint.tablet`
    margin: ${margin.small};
  `}
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ButtonContainer = styled.div`
  margin: ${margin.small};

  ${breakpoint.tablet`
      margin-right: 0;
  `}
`
