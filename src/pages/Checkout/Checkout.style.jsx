import styled from "styled-components";
import { Button, H3 } from "../../globalStyles/Global.styles";
export const CheckoutSection = styled.section``;
export const CheckoutContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
    column-gap: 1.2rem;
  }
`;
export const LeftContainer = styled.div`
  flex: 100%;
  @media (min-width: 992px) {
    flex: 65%;
  }
`;
export const BillingTitle = styled(H3)`
  margin-bottom: 0.9rem;
  font-weight: bold;
`;
export const Form = styled.form``;
export const FormGroup = styled.div``;
export const Input = styled.input`
  border: 1px solid ${(props) => props.theme.colors.cartBg2};
  width: 100%;
  padding: 8px 15px;
  margin-bottom: 1rem;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;
export const RightContainer = styled.div`
  flex: 100%;
  background-color: ${(props) => props.theme.colors.primaryColor};
  height: fit-content;
  padding: 15px;
  border-radius: 5px;
  margin-top: 2rem;
  @media (min-width: 992px) {
    flex: 25%;
    margin-top: 0;
  }
`;
export const CheckoutCart = styled.div``;
export const CheckoutCartData = styled(H3)`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  &:last-of-type {
    border-top: 1px solid rgba(221, 221, 221, 0.25);
    font-size: 1.2rem;
    padding-top: 1rem;
  }
`;
export const Span = styled.span``;
export const PlaceOrderBtn = styled(Button)`
  background-color: #fff;
  color: ${(props) => props.theme.colors.primaryColor};
  width: 100%;
  font-weight: 700;
  margin-top: 1rem;
  font-size: 0.95rem;
`;
