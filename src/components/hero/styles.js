import styled from 'styled-components';
import { breakpoint, sizes } from '../theme';

export const TitleContainer = styled.div`
    padding: 30px;
    font-size: 1.2em;
`;

export const HeroContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin: 30px 0;

    ${breakpoint.desktop`
        flex-direction: row;
  ` };
`;