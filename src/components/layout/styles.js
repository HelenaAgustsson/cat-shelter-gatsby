import styled from 'styled-components'
import { breakpoint, fontSize, margin, padding, width } from '../theme'

export const LayoutDiv = styled.div`
  margin: ${margin.xsmall};

  ${breakpoint.tablet`
     margin:0;
  `}
`
export const ContentContainer = styled.main`
  min-height: 100vh;
  position: relative;
  margin: 20px;
  width: 100%;

  ${breakpoint.desktopWide`
      width: ${width.large};
      margin: ${margin.medium} auto;
  `};
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
