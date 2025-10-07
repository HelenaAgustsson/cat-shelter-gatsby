import styled from 'styled-components'
import { fontSize, padding, colors } from '../theme'

const DefaultButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background: ${colors.red};
  padding: ${padding.small};
  font-size: ${fontSize.small};
  font-weight: bold;
  text-align: center;
  color: #ffffff;

  &hover {
    background: ${colors.red85};
  }
`

export default DefaultButton
