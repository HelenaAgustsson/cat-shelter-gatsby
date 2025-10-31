import styled from 'styled-components'
import { padding, fontSize, fontWeight } from '../theme'

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ItemTitle = styled.div`
  font-size: ${fontSize.small};
  padding-top: ${padding.small};
  font-weight: ${fontWeight.medium};
`
