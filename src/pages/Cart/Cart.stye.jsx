import styled, { css } from "styled-components";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  Button,
  H3,
  TextWrapper,
  BtnLink,
} from "../../globalStyles/Global.styles";
export const CartSection = styled.section``;
export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
    column-gap: 1.5rem;
  }
`;
export const LeftContainer = styled.div`
  flex: 100%;
  margin-bottom: 1.9rem;
  @media (min-width: 992px) {
    flex: 70%;
    margin-bottom: 0;
  }
`;
export const RightContainer = styled.div`
  flex: 100%;
  @media (min-width: 992px) {
    flex: 27%;
  }
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
export const Thead = styled.thead`
  @media (max-width: 767px) {
    display: none;
  }
`;
export const Tr = styled.tr`
  border-bottom: 1px solid #ddd8d8;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 1.3rem;
  }
`;
export const Th = styled.th`
  color: ${(props) => props.theme.colors.primaryColor};
  padding-bottom: 10px;
`;
export const Tbody = styled.tbody`
  text-align: center;
`;
const tdStyles = css`
  font-weight: 600;
  margin-bottom: 15px;
`;
export const Td = styled.td`
  color: ${(props) => props.theme.colors.primaryColor};
  @media (max-width: 767px) {
    &:nth-child(2) {
      ${tdStyles};
      font-size: 1.15rem;
      margin-top: 5px;
    }
    &:nth-child(3) {
      ${tdStyles};
      font-size: 1.28rem;
    }
    &:nth-child(4) {
      ${tdStyles};
    }
    &:last-child {
      margin-top: 15px;
    }
  }
`;
export const ProductImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;
export const DeleteBtn = styled(RiDeleteBinLine)`
  color: ${(props) => props.theme.colors.primaryColor};
  cursor: pointer;
  @media (max-width: 767px) {
    font-size: 1.9rem;
    font-weight: 700;
  }
`;
export const NoItems = styled(H3)`
  text-align: center;
  padding: 30px 0;
`;
export const Div = styled.div``;
export const SubTotal = styled(H3)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 8px;
`;
export const TotalPrice = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
`;
export const ShippingText = styled(TextWrapper)`
  font-size: 0.98rem;
`;
export const BtnWrapper = styled.div`
  width: 100%;
  margin-top: 2.7rem;
`;
export const BuyBtn = styled(Button)`
  width: 100%;
  margin-bottom: 0.8rem;
  padding: 10px 20px;
  font-size: 0.98rem;
`;
export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.6rem;
  @media (max-width: 767px) {
    column-gap: 1rem;
  }
`;
export const Quantity = styled.span`
  font-size: 1rem;
  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;
export const CounterBtn = styled(Button)`
  padding: 5px 13px;
  @media (max-width: 767px) {
    padding: 6px 18px;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
export const Link = styled(BtnLink)`
  display: block;
`;
