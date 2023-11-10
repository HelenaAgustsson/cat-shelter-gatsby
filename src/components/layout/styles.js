import styled from 'styled-components';

export const LayoutDiv = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`

export const HeaderDiv = styled.header`
    font-weight: bold;
    border-bottom: 1px solid;
    padding-top: 30px;
    flex-shrink: 0;
`;

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LogoContainer = styled.div`
    margin: 0; 
`;

export const Nav = styled.div`
    display: flex;
`;

export const MenuLink = styled.div`
    padding-left: 20px;
`;

export const ContentContainer = styled.main`
    flex-grow: 1;
    flex-shrink: 0;
`;

export const FooterDiv=styled.footer`
    flex-shrink: 0;
`;
