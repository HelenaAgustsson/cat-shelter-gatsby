import styled from 'styled-components'
import { fontSize, padding } from '../theme'

const DefaultButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background: rgb(235, 0, 31);
  padding: ${padding.small};
  font-size: ${fontSize.small};
  font-weight: bold;
  text-align: center;
  color: #ffffff;
`

export default DefaultButton
