import styled from 'styled-components';
import { breakpoint } from '../theme';

export const Section = styled.section`
    margin: auto;
    width: 100%;
    ${breakpoint.desktopWide`
        width: 1170px;
  ` };
`;

export const Container = styled.div`
    text-align:center;
    display: flex;
    flex-wrap:wrap;
    gap: 40px;
`;

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LinkTitle=styled.div`

`