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

export const ImageContainer = styled.div`
    width: 800px;
    height: 300px;
    background-image: ${({ image, }) => `
        image-set(
            url(${image}?fm=avif) type("image/avif"),
            url(${image}) type("image/jpeg")
        )`};
    background-position: center;
    background-size: cover;
    `;
