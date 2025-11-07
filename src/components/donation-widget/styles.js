import styled from 'styled-components'
import { breakpoint, colors, margin, padding, fontSize } from '../theme'

export const DonationContainer = styled.div`
  min-height: 400px;
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 5px;
  background-color: black;
  color: white;

  ${breakpoint.tablet`
    grid-template-columns: 1fr 1fr;
  `}
`

export const ImageContainer = styled.div`
  min-height: 250px;
  background-image: ${({ $image }) => `
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        image-set(
            url(${$image}) type("image/jpeg")
        )`};
  background-position: center;
  background-size: cover;
`

export const TextContainer = styled.div`
  padding: ${padding.large} ${padding.large};
  font-size: ${fontSize.medium};
  border-right: none;
`

export const ButtonContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 10px;
  padding: ${padding.large} 0;
`

export const CTAContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${margin.medium};
`

export const Header = styled.h3`
  font-weight: bold;
`

export const TransparentButton = styled.button`
  color: white;
  background-color: ${colors.transparent};
  border: 2px solid white;
  border-radius: 5px;
  padding: ${padding.small};
  font-size: ${fontSize.small};
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  width: 100%;
  margin-right: ${margin.small};

  &:hover {
    background-color: white;
    color: black;
  }

  &:focus {
    background-color: white;
    color: black;
  }
`
