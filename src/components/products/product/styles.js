import styled from 'styled-components'
import { breakpoint, padding, margin, fontWeight } from '../../theme'

export const FlexContainer = styled.div`
  margin-top: ${margin.medium};
  width: 100%;
  display: flex;
  flex-direction: column;

  ${breakpoint.tablet`
    flex-direction:row;
  `}
`

export const ImageContainer = styled.div`
  width: 80%;

  ${breakpoint.tablet`
      width:300px; 
  `}
`

export const ProductDetails = styled.div`
  padding: ${padding.medium} 0;

  ${breakpoint.tablet`
    padding: 0 ${padding.medium};
  `}
`

export const ProductTitle = styled.h2`
  margin-top: 0;
  font-weight: ${fontWeight.medium};
`
