import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";
import {H2} from '../../globalStyles/Global.styles';

export const ShopSection = styled.section`
    margin-bottom: 2.5rem;
`;
export const FilteringWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.9rem;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;
export const FilterBox = styled.div`
  flex: 40%;
  @media (max-width: 767px) {
      flex: 100%;
      margin-bottom: 1.5rem;
  }
`;
export const SelectBox = styled.select`
  font-size: 0.95rem;
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: #fff;
  padding: 7px 18px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.primaryColor};
  cursor: pointer;
  &:focus {
    outline: none;
  }
  @media (min-width: 1200px) {
    width: 50%;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 70%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 90%;
  }
  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;
export const Option = styled.option`
  font-size: 0.9rem;
  font-weight: 500;
  
  &:disabled {
    font-size: 0.8rem;
    color: coral;
  }
  @media (max-width: 767px) {
    font-size: 0.7rem;
  }
`;
export const SearchFilter = styled.div`
  flex: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.primaryColor};
  padding-right: 12px;
  padding-left: 2px;
  border-radius: 5px;
  @media (max-width: 767px) {
    flex: 100%;
    margin-bottom: 1rem;
  }
`;
export const SearchInput = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "Search.......",
}))`
  width: 100%;
  padding: 7px 10px;
  outline: none;
  border: none;
  ::placeholder {
  }
`;
export const SearchIcon = styled(RiSearchLine)`
  cursor: pointer;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.primaryColor};
`;
export const FilterDataSection = styled.section`
  padding-bottom: 0;
`;
export const FilterHeading = styled(H2)`
    text-align: center;
`;
