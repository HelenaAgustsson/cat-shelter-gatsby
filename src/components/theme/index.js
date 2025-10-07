import { css } from 'styled-components'

export const colors = {
  grey85: '#262626',
  grey80: '#333333',
  grey73: '#454545',
  grey60: '#666666',
  grey42: '#949494',
  grey40: '#999999',
  grey20: '#cccccc',
  grey10: '#e6e6e6',
  grey05: '#f2f2f2',
  white: '#fff',

  red: '#eb001f',
  red85: '#c8001a',
  red110: '#ff4760',

  teal: '#008181',
  teal85: '#046b6b',

  pink: '#f750a0',
  pink150: '#fz99a5',

  blue: '#2462f5',
  blue80: '#0079d0',
  blue120: '#269af2',
  blue150: '#1fa2ff',

  purple: '#660099',
  purple200: '#c95cff',

  orange: '#f06424',
  orange110: '#fce0d3',

  green: '#62b33c',
  green150: '#e6f8e7',

  amber: '#ffbc3d',
  disabled: '#949494',
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

// sensible default device breakpoints exported for chromatic VRT
// these can be swapped out in stories for other viewport targetting
export const chromaticViewports = [320, 834, sizes.desktop]

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
