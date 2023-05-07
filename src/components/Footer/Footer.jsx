import React from "react";
import { MainContainer } from "../../globalStyles/Global.styles";
import {
  AddressIcon,
  ContactData,
  ContactInfo,
  CopyRightsContent,
  FooterContent,
  FooterContentInfo,
  FooterHeading,
  FooterLinks,
  FooterLogo,
  FooterText,
  FooterWrapper,
  MailIcon,
  PhoneIcon,
} from "./Footer.style";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterWrapper>
      <MainContainer>
        <FooterContent>
          <FooterContentInfo>
            <FooterLogo>ZAStore</FooterLogo>
            <FooterText>
              Lorem Irure cillum esse esse commodo minim quis Lorem Lorem magna.
              Cillum elit mollit ullamco laboris irure?
            </FooterText>
          </FooterContentInfo>
          <FooterContentInfo>
            <FooterHeading>Top Categories</FooterHeading>
            <FooterLinks to="#">Mobile Phones</FooterLinks>
            <FooterLinks to="#">Modern Sofa</FooterLinks>
            <FooterLinks to="#">Arm Chair</FooterLinks>
            <FooterLinks to="#">Smart Watches</FooterLinks>
          </FooterContentInfo>
          <FooterContentInfo>
            <FooterHeading>Useful Links</FooterHeading>
            <FooterLinks to="shop">shop</FooterLinks>
            <FooterLinks to="cart">Cart</FooterLinks>
            <FooterLinks to="login">Login</FooterLinks>
            <FooterLinks to="#">Privacy Policy</FooterLinks>
          </FooterContentInfo>
          <FooterContentInfo>
            <FooterHeading>Contact</FooterHeading>
            <ContactInfo>
              <AddressIcon />
              <ContactData>123 ZindaBazar, Sylhet, Bangladesh</ContactData>
            </ContactInfo>
            <ContactInfo>
              <PhoneIcon />
              <ContactData>+0881234567890</ContactData>
            </ContactInfo>
            <ContactInfo>
              <MailIcon />
              <ContactData>example123@gmail.com</ContactData>
            </ContactInfo>
          </FooterContentInfo>
          <CopyRightsContent>
            Copyright {year} developed by Fatma Alzahraa.All rights reserved.
          </CopyRightsContent>
        </FooterContent>
      </MainContainer>
    </FooterWrapper>
  );
};

export default Footer;
