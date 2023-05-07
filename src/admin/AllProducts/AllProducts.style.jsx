import styled, { css } from "styled-components";
import {Button} from '../../globalStyles/Global.styles';
export const AllProductsSection = styled.section``;
export const AllProductsContent = styled.div``;
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
      font-size: 1.3rem;
      margin-top: 5px;
    }
    &:nth-child(3) {
      ${tdStyles};
      font-size: 1.1rem;
    }
    &:nth-child(4) {
      ${tdStyles};
      font-size: 1.28rem;
    }
    &:last-child {
      margin-top: 15px;
    }
  }
`;
export const ProductImg = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  @media (max-width: 767px) {
    width: 70%;
    height: 100%;
  }
`;
export const BtnWrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 0.5rem;
      @media (max-width: 767px) {
        margin-bottom: 1rem;
      }
`;
const btnStyles = css`
  cursor: pointer;
  padding: 7px 16px;
  font-size: 0.98rem;
`;
export const DeleteBtn = styled(Button)`
${btnStyles};
  background-color: #D10000;
`;
export const EditBtn = styled(Button)`
  ${btnStyles};
  background-color: #007500;
`;
export const ReadBtn = styled(Button)`
  ${btnStyles};
  background-color: blue;
`;