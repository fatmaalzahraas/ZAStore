import styled, { createGlobalStyle, css } from "styled-components";
import { NavLink, Link } from "react-router-dom";
export const theme = {
  colors: {
    primaryColor: "#0a1d37",
    textColor: "#999",
    heroBg: "#d6e5fb",
    cartBg1: "#fdefe6",
    cartBg2: "#ceebe9",
    cartBg3: "#e2f2b2",
  }
}
const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body {
        font-family: 'Montserrat', sans-serif;
    }
    section {
        padding: 60px 0;
    }
`;
const headingStyles = css`
  color: ${props => props.theme.colors.primaryColor};
  padding: 0;
  margin: 0;
  font-weight: 600;
`;
export const MainContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;

  @media screen and (max-width: 560px) {
    padding: 0 30px;
  }
`;
export const H1 = styled.h1`
  ${headingStyles}
`;
export const H2 = styled.h2`
  ${headingStyles}
  font-size: 1.5rem;
`;
export const H3 = styled.h3`
  ${headingStyles}
  font-size: 1.1rem;
`;
export const TextWrapper = styled.p`
  margin: 0;
  padding: 0;
  color: ${props => props.theme.colors.textColor};
  font-size: 1rem;
  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;
export const Menu = styled.ul`
  list-style: none;
`;
export const MenuLink = styled(NavLink)`
  text-decoration: none;
`;
export const BtnLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
export const Button = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
  background-color: ${props => props.theme.colors.primaryColor};
  @media (max-width: 767px) {
    font-size: 0.9rem;
    padding: 8px 18px;
  }
`;
export default GlobalStyle;
