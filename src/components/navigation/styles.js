import styled from 'styled-components'
import { breakpoint, fontSize, margin, padding, width } from '../theme'

export const NavContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  font-size: ${fontSize.small};
  font-weight: bold;
  padding: ${padding.medium};

  ${breakpoint.desktopWide`
    width: ${width.large};
    padding: ${padding.medium} auto;
  `};
`

export const LogoContainer = styled.div`
  display: block;
  padding: 0;
  margin: 0;

  ${breakpoint.tablet`
    padding-bottom: ${padding.small};
    margin-bottom: ${margin.small};
    padding-top: ${padding.small};
    margin-top: ${margin.small};
  `}
`

export const BarsContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 30px;
  padding-right: 10px;

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
  text-align: center;

  ${breakpoint.tablet`
    display:none
  `}
`

export const MenuLink = styled.div`
  padding: ${padding.small};
  margin: ${margin.small};
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ButtonContainer = styled.div`
  margin: ${margin.small};
`
