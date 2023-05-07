import styled from "styled-components";
import { BtnLink, H2, H3 } from "../../globalStyles/Global.styles";
import { RiAddLine } from "react-icons/ri";

export const ProductsCategorySection = styled.section`
  margin-top: 15px;
  @media (max-width: 576px) {
    margin-top: 0;
    padding: 35px 0;
  }
`;
export const ProductsHeading = styled(H2)`
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;
export const ProductListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 0.5rem;
  }
`;
export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 1rem;
  width: 100%;
  @media (min-width: 768px) and (max-width: 991px) {
    width: 49%;
  }
  @media (min-width: 992px) {
    width: 24%;
  }
`;
export const ProductImgWrapper = styled.div`
  width: 100%;
`;
export const ProductImg = styled.img`
  width: 100%;
`;
export const ProductName = styled(H3)`
  font-size: 1.1rem;
  margin-top: 9px;
  margin-bottom: 3px;
  @media (max-width: 576px) {
    font-size: 0.95rem;
  }
`;
export const ProductLink = styled(BtnLink)`
  color: inherit;
`;
export const ProductCategory = styled.span`
  font-size: 0.9rem;
  @media (max-width: 576) {
    font-size: 0.79rem;
  }
`;
export const ProductInfo = styled.div`
  margin-top: 15px;
  position: relative;
`;
export const ProductPrice = styled.span`
  color: ${props => props.theme.colors.primaryColor};
  font-size: 1.3rem;
  font-weight: 500;
  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
`;
export const IconContainer = styled.span`
  display: inline-block;
  text-align: center;
  position: absolute;
  right: -100px;
`;
export const AddToCartIcon = styled(RiAddLine)`
  background-color: ${props => props.theme.colors.primaryColor};
  padding: 5px;
  font-size: 1.3rem;
  color: #fff;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
`;
