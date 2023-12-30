import styled from 'styled-components';
import { breakpoint, sizes } from '../theme';

export const FlexContainer = styled.div`
    margin: 30px 0;
    display: flex;
    width: 100%;
    margin: auto;
    ${breakpoint.desktopWide`
    width: 1170px;
` };
`;

export const ProductDetails = styled.div`
    padding: 0 20px;
`

export const ProductTitle = styled.h2`
    margin-top: 0;

`