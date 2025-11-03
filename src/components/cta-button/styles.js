import styled from 'styled-components'
import { fontSize, padding, colors } from '../theme'

const RedButton = styled.button`
  cursor: pointer;
  width: 100%;
  border: none;
  border-radius: 5px;
  background: ${colors.red85};
  padding: ${padding.small};
  font-size: ${fontSize.small};
  font-weight: bold;
  text-align: center;
  color: #ffffff;

  &:hover {
    background: ${colors.red};
  }
`

export default RedButton
