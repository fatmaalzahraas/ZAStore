import styled from "styled-components";
import { H3, H2, Button } from "../../globalStyles/Global.styles";
export const DashboardSection = styled.section``;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 670px) {
    flex-direction: column;
    row-gap: 2rem;
  }
`;
export const Div = styled.div`
  width: 250px;
  height: 200px;
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
  background-color: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 670px) {
    width: 190px;
    height: 190px;
    clip-path: circle(50% at 50% 50%);
  }
`;
export const Span = styled.span`
  font-size: 1.1rem;
  font-weight: 400;
  padding-left: 20px;
  @media (max-width: 670px) {
    padding-left: 0;
  }
`;
export const Numbers = styled(H3)`
  margin-top: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
  padding-left: 20px;
  @media (max-width: 670px) {
    padding-left: 0;
  }
`;
export const NoAuthorized = styled.div`
  padding: 130px 0;
  background-color: ${(props) => props.theme.colors.cartBg3};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 576px) {
    padding: 60px 0;
  }
`;
export const NoAuthorizedTitle = styled(H2)`
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;
export const BackBtn = styled(Button)`
  margin-top: 1.5rem;
  width: fit-content;
  padding: 8px 10px;
  font-size: 0.9rem;
  background-color: transparent;
  color: ${(props) => props.theme.colors.primaryColor};
  border: 1px solid ${(props) => props.theme.colors.primaryColor};
  font-weight: 600;
`;
