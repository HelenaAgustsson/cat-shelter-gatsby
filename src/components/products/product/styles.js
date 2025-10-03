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
  width: 100%;
  display: flex;
  margin-top: ${margin.medium};
`

export const ProductDetails = styled.div`
  padding: 0 ${padding.medium};
`

export const ProductTitle = styled.h2`
  margin-top: 0;
`
