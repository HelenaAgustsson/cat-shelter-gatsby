import styled from 'styled-components'
import { breakpoint, width } from '../theme'

export const MainContainer = styled.main`
  width: 100%;

  ${breakpoint.desktopWide` 
    max-width: ${width.large};
    margin: auto;
  `};
`
