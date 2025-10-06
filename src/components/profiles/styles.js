import styled from 'styled-components'
import { padding, fontSize } from '../theme'

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
`

export const ImageContainer = styled.div`
  border-radius: 5px;
  overflow: hidden;
`

export const TitleContainer = styled.div`
  font-size: ${fontSize.small};
  padding-top: ${padding.small};
`
