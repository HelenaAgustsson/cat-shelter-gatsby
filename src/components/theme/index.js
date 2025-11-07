import { css } from 'styled-components'

export const colors = {
  red: '#eb001f',
  red85: '#c8001a',
  teal: '#008181',
  teal85: '#046b6b',
  grey60: '#666666',
  grey40: '#999999',
  grey20: '#cccccc',
  white: '#fff',
  transparent: 'transparent',
}

export const sizes = {
  monitor: 1210,
  desktopWide: 1170,
  desktop: 992,
  tablet: 641,
  mobileLand: 512,
  mobile: 359,
}

export const fontSize = {
  xsmall: '18px',
  small: '20px',
  medium: '22px',
  large: '40px',
}

export const fontWeight = {
  medium: '600',
}

export const padding = {
  xsmall: '5px',
  small: '10px',
  medium: '20px',
  large: '30px',
  xlarge: '50px',
}

export const margin = {
  xsmall: '10px',
  small: '20px',
  medium: '30px',
  large: '50px',
  xlarge: '70px',
  xxlarge: '100px',
}

export const width = {
  medium: '744px',
  large: '1170px',
}

// generate the em size of a pix value as a string with the 'em' suffix
export const emSize = (size) => `${size / 16}em`

// iterate through the sizes and create a media template
export const breakpoint = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize(sizes[label])}) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
