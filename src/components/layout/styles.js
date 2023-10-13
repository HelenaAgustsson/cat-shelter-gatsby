import styled from 'styled-components';
import { breakpoint, sizes } from '../theme';

export const HeaderDiv = styled.div`
    font-weight: bold;
    border-bottom: 1px solid;
`;

export const FlexContainer = styled.div`
    margin: 0 auto;
    max-width: 80%;
    display: flex;
    justify-items: space-between;
    align-items: center;
`;

export const LogoContainer = styled.div`
    margin: 0; 
    flex: 1;
`;

export const LinksContainer = styled.ul`
    display: flex;
    flex: 1;
`;

export const TopContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin: 30px 0;

    ${breakpoint.desktop`
        flex-direction: row;
  ` };
`

export const HeroContainer = styled.div`

`

export const TitleContainer = styled.div`
    padding: 30px;
    font-size: 1.2em;
`;
