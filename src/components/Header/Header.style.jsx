import styled from "styled-components";
import {
  Menu,
  MenuLink,
  MainContainer,
  H3,
  BtnLink,
} from "../../globalStyles/Global.styles";
import { RiMenuLine, RiShoppingBasketFill } from "react-icons/ri";

export const MainHeader = styled.header`
  width: 100%;
  height: 70px;
  line-height: 70px;
  transition: 0.5s ease;
  background-color: ${props => props.theme.colors.primaryColor};
  &.sticky {
    width: 100%;
    height: 70px;
    line-height: 70px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: ${props => props.theme.colors.primaryColor};
    box-shadow: 3px 3px 8px -3px rgba(0, 0, 0, 0.5);
    transition: 0.5s ease;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 60px;
    line-height: 60px;
  }
`;
export const Wrapper = styled(MainContainer)`
  height: 100%;
`;
export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderLogo = styled(H3)`
  font-size: 1.1rem;
  color: #fff;
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;
export const Navigation = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.52);
    z-index: 9999;
    display: none;
    &.menu-active {
      display: block;
    }
  }
`;
export const NavMenu = styled(Menu)`
  display: flex;
  align-items: center;
  column-gap: 2.5rem;
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 250px;
    flex-direction: column;
    background-color: #fff;
    z-index: 99999;
    padding-top: 50px;
  }
`;
export const NavMenuItem = styled.li`
  height: 100%;
  @media (max-width: 768px) {
    height: auto;
  }
`;
export const NavMenuLink = styled(MenuLink)`
  color: #fff;
  font-weight: 400;
  cursor: pointer;
  height: 100%;
  display: block;
  &.active {
    color: #FF8A8A;
  }
  @media (max-width: 767px) {
    color: ${props => props.theme.colors.primaryColor};
  }
`;
export const NavIconsContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.3rem;
`;
export const SpanContainer = styled.span`
  display: flex;
  align-items: flex-end;
`;
export const CartBagContainer = styled(SpanContainer)`
  position: relative;
`;
export const CartBagIcon = styled(RiShoppingBasketFill)`
  font-size: 1.4rem;
  color: #fff;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const CartBagItemsNumber = styled.span`
  content: "";
  position: absolute;
  top: -8%;
  right: -20%;
  background-color: #fff;
  color: ${props => props.theme.colors.primaryColor};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-size: 0.6rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 13px;
    height: 13px;
    font-size: 0.5rem;
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  z-index: 9;
  
`;
export const UserImage = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 50%;
  vertical-align: middle;
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
export const LinksContainer = styled.div`
  position: absolute;
  background-color: #fff;
  top: 103%;
  right: 0;
  width: 150px;
  padding: 5px 7px;
  flex-direction: column;
  align-items: center;
  line-height: 30px;
  z-index: 10;
  transition: all 0.5s;
  box-shadow: 3px 3px 8px -3px #ddd;
  border: 1px solid #ddd;
  display: none;
  &.show {
    display: flex;
  }
  @media (max-width: 576px) {
    right: -40px;
    width: 115px;
    padding: 8px 15px;
  }
`;
export const Links = styled(BtnLink)`
  color: ${ props => props.theme.colors.primaryColor};
  font-weight: 400;
  width: 100%;
  text-align: center;
  &:not(:nth-of-type(2)) {
    border-bottom: 1px solid #ddd;
  }
  
`;
export const Logout = styled.span`
  cursor: pointer;
  color: ${props => props.theme.colors.primaryColor};
`;
export const MobileContainer = styled.div`
  display: block;
  @media (min-width: 769px) {
    display: none;
  }
`;
export const MobileToggleIcon = styled(RiMenuLine)`
  font-size: 1.3rem;
  color: #fff;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
