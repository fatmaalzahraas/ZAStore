import styled from 'styled-components';
import { H1 } from '../../globalStyles/Global.styles';
import pageUi from '../../assets/imgs/page-ui.jpg';

export const ContentWrapper = styled.div`
    background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${pageUi}) no-repeat right bottom;
    background-size: cover;
    height: 350px;
    display: flex;
    align-items: center;
    @media (max-width: 767px) {
        height: 230px;
    }
`;
export const HeadingTitle = styled(H1)`
    color: #fff;
    text-align: center;
    @media (max-width: 767px) {
        font-size: 1.3rem;
    }
`;

