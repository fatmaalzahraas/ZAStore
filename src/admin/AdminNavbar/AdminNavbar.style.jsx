import styled, { css } from "styled-components";
import {
  H3,
  MainContainer,
  Menu,
  MenuLink,
} from "../../globalStyles/Global.styles";
import {
  RiSearchLine,
  RiNotification3Line,
  RiSettings2Line,
} from "react-icons/ri";
const iconStyles = css`
  color: whitesmoke;
  cursor: pointer;
  font-size: 1.1rem;
`;
export const AdminHeader = styled.header`
  width: 100%;
  padding: 15px 0;
  background-color: ${(props) => props.theme.colors.primaryColor};
`;
export const Container = styled(MainContainer)``;
export const TopNav = styled.div`
  width: 100%;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 3rem;
  @media (max-width: 576px) {
    column-gap: 1.4rem;
    flex-wrap: wrap;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 10%;
  @media (max-width: 576px) {
    flex: 40%;
  }
`;
export const Logo = styled(H3)`
  color: whitesmoke;
  font-size: 1.18rem;
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;
export const SearchBox = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 576px) {
   order: 3;
   margin-top: 15px;
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  border: none;
  &:focus {
    outline: none;
    border: none;
  }
  @media (max-width: 576px) {
    padding: 8px;
  }
`;
export const SearchIcon = styled(RiSearchLine)``;
export const TopNavRight = styled.div`
  flex: 10%;
  display: flex;
  align-items: center;
  column-gap: 2rem;
  @media (max-width: 576px) {
    column-gap: 1rem;
    flex: 20%;
  }
`;
export const NotificationIcon = styled(RiNotification3Line)`
  ${iconStyles}
`;
export const SettingIcon = styled(RiSettings2Line)`
  ${iconStyles}
`;
export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  cursor: pointer;
`;
export const AdminMenu = styled.section`
  padding: 0;
  background-color: ${(props) => props.theme.colors.heroBg};
  height: 70px;
  line-height: 70px;
  @media (max-width: 576px) {
    height: auto;
    line-height: auto;
  }
`;
export const AdminMenuWrapper = styled.div``;
export const Ul = styled(Menu)`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 3rem;
  @media (min-width: 577px) and (max-width: 767px) {
    column-gap: 0.9rem;
  }
  @media (max-width: 576px) {
    flex-wrap: wrap;
    padding: 15px 0;
    column-gap: 0.9rem;
  }
`;
export const Li = styled.li`
  @media (max-width: 576px) {
    line-height: 0;
    margin: 20px 0;
  }
`;
export const NavLinks = styled(MenuLink)`
  color: ${(props) => props.theme.colors.primaryColor};
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 5px;
  &.active {
    background-color: whitesmoke;
  }
  @media (max-width: 767px) {
    font-size: 0.99rem;
    padding: 7px 10px;
  }
`;
