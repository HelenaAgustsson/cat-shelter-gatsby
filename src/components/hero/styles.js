import styled from 'styled-components'
import { breakpoint, fontSize, padding, sizes } from '../theme'

export const HeroContainer = styled.div`
  width: 100%;
  margin: auto;
  height: 400px;
`

export const BackgroundContainer = styled.div`
  width: ${sizes.desktopWide}px;
  margin: 0 auto;
`

export const TitleContainer = styled.div`
  position: absolute;
  top: 0;
  display: none;

  ${breakpoint.tablet`
    display: flex;
    padding: 0 ${padding.large};
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
