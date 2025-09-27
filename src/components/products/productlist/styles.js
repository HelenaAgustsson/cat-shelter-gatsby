import styled from 'styled-components'
import { breakpoint, padding, fontSize, width } from '../../theme'

export const Section = styled.section`
  width: 100%;
  margin: auto;
  text-align: center;
  ${breakpoint.desktopWide`
        width: ${width.large};
  `};
`

export const SectionTitle = styled.h3`
  font-size: ${fontSize.medium};
`

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
