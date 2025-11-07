import styled from 'styled-components'
import { breakpoint, colors, padding, fontSize } from '../theme'

export const DualContainer = styled.div`
  min-height: 400px;
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${colors.teal};

  ${breakpoint.tablet`
    grid-template-columns: 1fr 1fr;
  `}
`

export const ImageContainer = styled.div`
  background-image: ${({ $image }) => `
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        image-set(
            url(${$image}) type("image/jpeg")
        )`};
  background-position: center;
  background-size: cover;
  min-height: 250px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${padding.large};
  padding-top: 0;
  color: ${colors.white};
  font-size: ${fontSize.medium};

  ${breakpoint.tablet`
    padding: ${padding.xlarge};
    padding-top: 0;
  `}
`

export const Header = styled.h3`
  font-weight: bold;
`
