import styled, { css } from "styled-components";
import {
  Button,
  H2,
  H3,
  Menu,
  TextWrapper,
} from "../../globalStyles/Global.styles";
import { RiStarSFill, RiStarHalfSLine, RiStarLine } from "react-icons/ri";
const iconStyles = css`
  color: coral;
`;
export const ProductDetailsSection = styled.section``;
export const ProductDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;
export const LeftContainer = styled.div`
  flex: 50%;
  @media (max-width: 767px) {
    flex: 100%;
    text-align: center;
  }
`;
export const ProductDetailsImg = styled.img`
  width: 90%;
`;
export const RightContainer = styled.div`
  flex: 50%;
  @media (max-width: 767px) {
    flex: 100%;
  }
`;
export const ProductDetailsInfo = styled.div`
  margin-top: 20px;
`;
export const ProductName = styled(H2)`
  margin-bottom: 10px;
  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;
export const ProductRating = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
  margin-bottom: 10px;
`;
export const RatingIconsWrapper = styled.div`
  margin-right: 15px;
`;
export const StarSpan = styled.span``;
export const FullStarIcon = styled(RiStarSFill)`
  ${iconStyles}
`;
export const StarHalfIcon = styled(RiStarHalfSLine)`
  ${iconStyles}
`;
export const StarIcon = styled(RiStarLine)`
  ${iconStyles}
`;
export const AvgRating = styled(TextWrapper)`
  margin-bottom: 10px;
  font-size: 0.9rem;
`;
export const RatingContainer = styled.span`
  color: coral;
  font-weight: 500;
  &:nth-of-type(1) {
    font-size: 0.89rem;
    @media (max-width: 767px) {
      font-size: 0.85rem;
    }
  }
`;
export const ProductPrice = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primaryColor};
  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;
export const ProductCategory = styled.span`
  margin-left: 18px;
  font-size: 0.9rem;
`;
export const Description = styled(TextWrapper)`
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 0.9rem;
  line-height: 17px;
  &:nth-of-type(1) {
    line-height: 19px;
  }
  @media (max-width: 767px) {
    font-size: 0.88rem;
  }
`;
export const AddToCartBtn = styled(Button)`
  padding: 9px 20px;
`;

export const ProductDetailsNavWrapper = styled.section``;
export const NavTabsWrapper = styled.div``;
export const NavTabsContent = styled.div`
  margin-top: 25px;
`;
export const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.3rem;
  @media (min-width: 300px) and (max-width: 577px) {
    column-gap: 0.9rem;
  }
  @media (max-width: 299px){
    column-gap: 0.2rem;
  }
`;
export const TabTitle = styled(H3)`
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  &.active {
    font-weight: 600;
  }
  @media (max-width: 767px) {
    font-size: 0.95rem;
  }
`;
export const ReviewsWrapper = styled.div``;
export const Ul = styled(Menu)``;
export const Li = styled.li``;
export const ReviewName = styled(H3)`
  font-size: 1rem;
  margin-top: 10px;
  @media (max-width: 767px) {
    font-size: 0.95rem;
  }
`;
export const ReviewText = styled(TextWrapper)`
  margin-top: 10px;
  font-size: 0.89rem;
  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;
export const ReviewsForm = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 50px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const Form = styled.form``;
export const FormText = styled(H3)`
  font-size: 1.2rem;
  margin-bottom: 30px;
  text-align: center;
  @media (min-width: 577) and (max-width: 767px) {
    font-size: 1rem;
  }
  @media (max-width: 576px) {
    font-size: 0.8rem;
    margin-bottom: 20px;
  }
`;
export const FormGroup = styled.div`
  margin-bottom: 20px;
  &:nth-child(2) {
    display: flex;
    align-items: center;
    column-gap: 1.3rem;
    @media (max-width: 767px) {
      column-gap: 0.6rem;
    }
  }
`;
const inputStyles = css`
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.primaryColor};
  border-radius: 5px;
  padding: 8px 20px;
  &:focus {
    outline: none;
  }
  ::placeholder {
    font-size: 0.89rem;
    @media (max-width: 767px) {
      font-size: 0.7rem;
    }
  }
  @media (max-width: 576px) {
    padding: 7px 18px;
  }
`;
export const Input = styled.input.attrs({
  type: "text",
})`
  ${inputStyles}
`;
export const TextArea = styled.textarea.attrs({
  type: "text",
  rows: 4,
})`
  ${inputStyles}
`;
export const Span = styled.span`
  color: coral;
  display: flex;
  align-items: center;
  column-gap: 0.2rem;
  font-size: 0.9rem;
  cursor: pointer;
  @media (max-width: 767px) {
    column-gap: 0.1rem;
    font-size: 0.8rem;
  }
`;
export const ReviewSubmit = styled(Button).attrs({
  type: "submit",
})``;
export const SimilarProducts = styled.div`
  margin-top: 60px;
  @media (max-width: 767px) {
    margin-top: 70px;
  }
`;
export const SimilarProductsTitle = styled(H2)`
  font-size: 1.3rem;
  margin-bottom: 10px;
  @media (max-width: 767px) {
    font-size: 1.19rem;
  }
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;
export const NoProduct = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.primaryColor};
  padding: 50px 0;
  font-weight: 600;
`
