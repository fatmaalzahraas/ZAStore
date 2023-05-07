import React from 'react'
import { useRouteError, useNavigate } from "react-router-dom";
import styled, {ThemeProvider} from 'styled-components';
import { theme, Button, H1} from '../globalStyles/Global.styles';
const Div = styled.div`
  height: 100vh;
  background-color:${props => props.theme.colors.cartBg3};
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled(H1)`
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
  @media(max-width: 767px) {
    font-size: 2.2rem;
  }
`
const P = styled.p`
  color: ${props => props.theme.colors.primaryColor};
    margin-bottom: 0.6rem;
    font-size: 1.1rem;
    font-weight: 500;
    text-align: center;
    @media(max-width: 576px) {
      font-size: 0.9rem;
    }
`;
const BackBtn = styled(Button)`
   margin-top: 1.5rem;
  width: fit-content;
  padding: 8px 10px;
  font-size: 0.9rem;
  font-weight: 500;
`
const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    return (
      <ThemeProvider theme={theme}>
      <Div id="error-page">
        <Title>Oops!</Title>
        <P>Sorry, an unexPected error has occurred.</P>
        <P>
          <i>{error.statusText || error.message}</i>
        </P>
        <BackBtn variant="link" onClick={() => navigate("/", {replace: true})}>Back to home</BackBtn>
      </Div>
      </ThemeProvider>
    );
}

export default ErrorPage