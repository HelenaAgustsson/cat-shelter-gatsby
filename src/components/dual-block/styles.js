import styled from 'styled-components'
import { colors, padding, fontSize } from '../theme'

export const DualContainer = styled.div`
  height: 400px;
  display: flex;
  background-color: ${colors.teal};
`

export const TextContainer = styled.div`
  width: 50%;
  padding: ${padding.xlarge} ${padding.large};
  color: ${colors.white};
  font-size: ${fontSize.medium};
`

export const ImageContainer = styled.div`
  width: 50%;
  background-image: ${({ $image }) => `
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        image-set(
            url(${$image}) type("image/jpeg")
        )`};
  background-position: center;
  background-size: cover;
`

export const Header = styled.h2`
  font-weight: bold;
`
