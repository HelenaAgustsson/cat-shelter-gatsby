import styled from 'styled-components'
import { breakpoint, margin } from '../theme'

export const SectionDiv = styled.div`
  margin-top: ${margin.small};
  margin-bottom: ${margin.large};

  ${breakpoint.tablet`
    margin-top: ${margin.large};
  `}
`
