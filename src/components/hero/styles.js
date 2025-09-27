import styled from 'styled-components'
import { breakpoint, fontSize, margin, padding } from '../theme'

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Hero = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  background-image: ${({ $image }) => `
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        image-set(
            url(${$image}?fm=avif) type("image/avif"),
            url(${$image}) type("image/jpeg")
        )`};
  background-position: center;
  background-size: cover;
  background-color: #f0f0f0;
  justify-content: center;
`

export const TitleContainer = styled.div`
  padding: ${padding.large};
  margin: ${margin.small};
  background-color: #ffffff;
  align-self: start;
  -webkit-box-pack: start;
  justify-content: flex-start;
  display: none;
  border-radius: 5px;

  ${breakpoint.tablet`
        display: flex;
    `}
`

export const Title = styled.h1`
  font-size: ${fontSize.large};
`

export const MobileTitle = styled.div`
  ${breakpoint.tablet`
        display:none;
    `}
`
