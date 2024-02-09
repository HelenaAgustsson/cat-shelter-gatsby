import styled from 'styled-components'
import { breakpoint } from '../theme'

export const LayoutDiv = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 10px;

  ${breakpoint.tablet`
        margin:0;
    `}
`

export const HeaderContainer = styled.header`
  width: 100%;
  margin: 0 auto;
  font-weight: bold;
  border-bottom: 1px solid #f1f1f1;
  padding-top: 30px;
  padding-bottom: 30px;
  flex-shrink: 0;

  ${breakpoint.desktopWide`
        width: 1170px;
  `};
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.div`
  margin: 0;
`

export const Nav = styled.div`
  display: flex;
`

export const MenuLink = styled.div`
  padding-left: 20px;
`

export const ContentContainer = styled.main`
  flex-grow: 1;
  flex-shrink: 0;
  min-height: 100vh;
  position: relative;
`

export const FooterDiv = styled.footer`
  flex-shrink: 0;
  width: 100%;
  margin: 0 auto;
  border-top: 1px solid rgb(204, 204, 204);
  padding: 40px 0;
  font-size: 0.8em;

  ${breakpoint.desktopWide`
    width: 1170px;
`};
`
