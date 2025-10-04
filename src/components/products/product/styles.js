import styled from 'styled-components'
import { Link } from 'gatsby'
import { breakpoint, padding, margin, width } from '../../theme'

export const ProductContainer = styled.div``

export const LinkContainer = styled.div``

export const BackLink = styled(Link)`
  text-decoration: underline;
  margin-left: 10px;
`

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
`
