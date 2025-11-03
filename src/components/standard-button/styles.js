import styled from 'styled-components'
import { fontSize, padding, colors } from '../theme'

const DefaultButton = styled.button`
  cursor: pointer;
  border: 2px soild black;
  border-radius: 5px;
  background: ${colors.white};
  padding: ${padding.small};
  font-size: ${fontSize.small};
  font-weight: bold;
  text-align: center;
  color: #ffffff;

  &:hover {
    border-color: ${colors.red};
  }

  &:selected {
    background-color: black;
    color: white;
  }
`

export default DefaultButton
