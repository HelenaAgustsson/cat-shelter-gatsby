import styled from 'styled-components'
import { fontSize, width } from '../theme'
import { breakpoint } from '../theme'

export const IntroDiv = styled.div`
  max-width: ${width.medium};
  margin: 0 auto 50px;
  font-size: ${fontSize.medium};

  ${breakpoint.tablet`
        margin-top: 50px;
  `}
`

export const IntroHeader = styled.h2``
