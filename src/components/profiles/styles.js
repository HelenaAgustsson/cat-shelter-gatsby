import styled from 'styled-components'
import { padding, fontSize, fontWeight, colors } from '../theme'

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px ${colors.grey20};
  border-radius: 5px;
`

export const ImageContainer = styled.div`
  border-radius: 5px;
  overflow: hidden;
`

export const TitleContainer = styled.div`
  font-size: ${fontSize.small};
  padding: ${padding.small} 0;
  font-weight: ${fontWeight.medium};
`
