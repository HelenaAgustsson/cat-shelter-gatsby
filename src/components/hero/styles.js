import styled from 'styled-components'
import { breakpoint, fontSize, margin, padding, sizes } from '../theme'

export const HeroContainer = styled.div``

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
`

export const BackgroundContainer = styled.div`
  width: ${sizes.desktopWide}px;
  margin: 0 auto;
`

export const TitleContainer = styled.div`
  margin: ${margin.small} 0;
  align-self: start;
  -webkit-box-pack: start;
  justify-content: flex-start;
  display: none;
  border-radius: 5px;

  ${breakpoint.tablet`
    display: flex;
    padding: 0 ${padding.large};
  `}

  ${breakpoint.monitor`
    padding: 0;
  `}
`

export const Title = styled.h1`
  font-size: ${fontSize.large};
  padding: 0;

  ${breakpoint.tablet`
    background-color: #ffffff;
    padding: ${padding.large};
    border-radius: 5px;
  `}
`

export const MobileTitle = styled.div`
  padding-left: ${padding.medium};
  ${breakpoint.tablet`
    display:none;
  `};
`
