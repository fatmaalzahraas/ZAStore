import styled from "styled-components";
import {
  TextWrapper,
  Button,
  H1,
  BtnLink,
} from "../../globalStyles/Global.styles";

export const HeroSection = styled.section`
  background-color: ${props => props.theme.colors.heroBg};
  @media (max-width: 991px) {
    padding: 45px 0;
  }
`;
export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 820px) {
    flex-direction: row;
    column-gap: 0.5rem;
    justify-content: center;
  }
`;
export const LeftContainer = styled.div`
  @media (min-width: 820px) and (max-width: 991px) {
    flex: 54%;
  }
  @media (min-width: 992px) {
    flex: 53%;
  }
`;
export const HeroContent = styled.div``;
export const HeroText = styled(TextWrapper)`
  color: ${props => props.theme.colors.primaryColor};
  line-height: 28px;
  &:nth-child(1) {
    font-weight: 500;
  }
`;
export const HeroHeading = styled(H1)`
  margin: 20px 0;
  font-size: 1.5rem;
  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 2rem;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 2.3rem;
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1200px) {
    font-size: 2.6rem;
  }
`;
export const HeroButton = styled(Button)`
  margin-top: 40px;
`;
export const Links = styled(BtnLink)`
  color: #fff;
`;
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  flex: 100%;
  margin-top: 1rem;
  @media (min-width: 820px) and (max-width: 991px) {
    flex: 46%;
    margin-top: 0;
  }
  @media (min-width: 992px) {
    flex: 47%;
    margin-top: 0;
  }
`;
export const ImageContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 820px)  {
    width: 100%;
  }
`;
export const HeroImage = styled.img`
  width: 85%;
  @media (min-width: 820px) and (max-width: 991px) {
    width: 90%;
  }
  @media (min-width: 992px) {
    width: 75%;
  }
`;
