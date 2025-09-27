import styled from 'styled-components'
import { breakpoint, padding, margin, width } from '../../theme'

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  margin: ${margin.medium};
  ${breakpoint.desktopWide`
    width: ${width.large};
    margin: ${margin.medium} auto;
`};
`

export const ProductDetails = styled.div`
  padding: 0 ${padding.medium};
`

export const ProductTitle = styled.h2`
  margin-top: 0;
`
