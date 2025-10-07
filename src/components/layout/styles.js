import styled from 'styled-components'
import { breakpoint, fontSize, padding, width } from '../theme'

export const LayoutDiv = styled.div`
  padding: ${padding.medium};
`
export const PageContainer = styled.main`
  min-height: 100vh;
  position: relative;
`

export const FooterDiv = styled.footer`
  width: 100%;
  margin: 200px auto 0 auto;
  flex-shrink: 0;
  font-size: ${fontSize.xsmall};
  padding: ${padding.large} 0;
  border-top: 1px solid rgb(204, 204, 204);

  ${breakpoint.desktopWide`
    width: ${width.large}
`};
`
