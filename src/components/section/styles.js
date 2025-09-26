import styled from 'styled-components'
import { breakpoint } from '../theme'

export const SectionDiv = styled.div`
  margin: 0 20px;

  ${breakpoint.desktopWide`
    width: 1170px;
    margin: auto;
  `};
`
