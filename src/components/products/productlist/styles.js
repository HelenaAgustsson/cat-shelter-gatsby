import styled from 'styled-components'
import { padding, fontSize } from '../../theme'

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const LinkTitle = styled.div`
  font-size: ${fontSize.small};
  padding-top: ${padding.small};
`
