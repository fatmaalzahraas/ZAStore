import styled, { css } from "styled-components";
import { BtnLink, H3, TextWrapper } from "../../globalStyles/Global.styles";
import { RiMapPinLine, RiPhoneLine, RiMailLine } from "react-icons/ri";

const styles = css`
  color: rgba(255, 255, 255, 0.735);
  margin-bottom: 1rem;
  font-size: 0.8rem;
  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;
export const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colors.primaryColor};
  padding: 60px 0 30px 0;
`;
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 1rem;
  }
`;
export const FooterContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) and (max-width: 991px) {
    flex: 48%;
  }
  @media (min-width: 992px) {
    flex: 23%;
  }
`;
export const FooterLogo = styled(H3)`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 1.1rem;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;
export const FooterText = styled(TextWrapper)`
  ${styles};
  line-height: 30px;
`;

export const FooterHeading = styled(H3)`
  color: #fff;
  margin-bottom: 1.1rem;
  font-weight: 500;
  font-size: 0.9rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;
export const FooterLinks = styled(BtnLink)`
  ${styles}
`;

export const ContactInfo = styled.p`
  ${styles}
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;
export const AddressIcon = styled(RiMapPinLine)``;
export const PhoneIcon = styled(RiPhoneLine)``;
export const MailIcon = styled(RiMailLine)``;
export const ContactData = styled.span``;
export const CopyRightsContent = styled.span`
  flex: 100%;
  color: rgba(255, 255, 255, 0.735);
  font-size: 0.7rem;
  margin-top: 1.5rem;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;
