import styled from 'styled-components'
import { fontSize, margin, padding, colors } from '../theme'

const DefaultButton = styled.button`
  color: black;
  background-color: white;
  border: 2px solid black;
  border-radius: 5px;
  padding: ${padding.small};
  font-size: ${fontSize.small};
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  width: 100%;
  margin-right: ${margin.small};

  &:hover {
    border-color: ${colors.red85};
    color: ${colors.red85};
  }

  &:focus {
    background-color: black;
    color: white;
    border-color: black;
  }
`

export default DefaultButton
