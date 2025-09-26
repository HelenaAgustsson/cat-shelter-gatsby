import styled from 'styled-components'
import { breakpoint, fontSize, margin, padding, width } from '../theme'

export const LayoutDiv = styled.div`
  margin: ${margin.xsmall};

  ${breakpoint.tablet`
        margin:0;
    `}
`

export const ContentContainer = styled.main`
  flex-grow: 1;
  flex-shrink: 0;
  min-height: 100vh;
  position: relative;
`

export const NavContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  font-size: ${fontSize.small};
  font-weight: bold;
  border-bottom: 1px solid #f1f1f1;
  padding: ${padding.medium};

  ${breakpoint.desktopWide`
        width: ${width.large};
  `};
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.div`
  padding: ${padding.small};
  margin: ${margin.small};
`

export const MenuLink = styled.div`
  padding: ${padding.small};
  margin: ${margin.small};
`

export const ButtonContainer = styled.div`
  margin: ${margin.small};
`

export const FooterDiv = styled.footer`
  width: 100%;
  margin: ${margin.xlarge} auto;
  flex-shrink: 0;
  font-size: ${fontSize.xsmall};
  padding: ${padding.large} 0;
  border-top: 1px solid rgb(204, 204, 204);

  ${breakpoint.desktopWide`
    width: 1170px;
`};
`
