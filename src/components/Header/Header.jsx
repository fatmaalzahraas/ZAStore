import React, { useRef, useEffect, useState} from "react";
import {
  CartBagContainer,
  CartBagIcon,
  LogoContainer,
  MainHeader,
  Wrapper,
  MobileContainer,
  MobileToggleIcon,
  Navbar,
  NavIconsContainer,
  NavMenu,
  NavMenuItem,
  NavMenuLink,
  SpanContainer,
  UserImage,
  CartBagItemsNumber,
  HeaderLogo,
  Navigation,
  ImageContainer,
  LinksContainer,
  Links,
  Logout,
} from "./Header.style";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuth from "../../customHooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";
import UserIcon from '../../assets/imgs/user-icon-main.avif';
import useGetUsers from "../../customHooks/useGetUsers";
const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];
const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const navbarRef = useRef(null);
  const navigationRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const {data} = useGetUsers();
  const [user, setUser] = useState(false);
  const profileActions = useRef(null);
  const toggleProfileActions = () => {
    profileActions.current.classList.toggle("show");
  };
  const logout = async () => {
    await signOut(auth)
      .then(() => {
        navigate("/");
        toast.success("Logged out");
        
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const navigationMenuToggling = () => {
    navigationRef.current.classList.toggle("menu-active");
  };
  const stickyNavbar = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        navbarRef.current?.classList?.add("sticky");
      } else {
        navbarRef.current?.classList?.remove("sticky");
      }
    });
  };
  useEffect(() => {
    if (currentUser) {
      const user = data?.find(el => el.uid === currentUser.uid)
      if (user) {
        setUser(user.isAdmin === true);
      }
    }
  }, [currentUser, data])
  useEffect(() => {
    stickyNavbar();
    return () => window.removeEventListener("scroll", stickyNavbar);
  });
  return (
    <>
      <MainHeader ref={navbarRef}>
        <Wrapper>
          <Navbar>
            <LogoContainer>
              <HeaderLogo>ZAStore</HeaderLogo>
            </LogoContainer>
            <Navigation ref={navigationRef} onClick={navigationMenuToggling}>
              <NavMenu>
                {navLinks.map((link, index) => (
                  <NavMenuItem key={index}>
                    <NavMenuLink to={link.path}>{link.display}</NavMenuLink>
                  </NavMenuItem>
                ))}
              </NavMenu>
            </Navigation>
            <NavIconsContainer>
              <CartBagContainer onClick={() => navigate('cart')}>
                <CartBagIcon></CartBagIcon>
                <CartBagItemsNumber>{totalQuantity}</CartBagItemsNumber>
              </CartBagContainer>
              <ImageContainer>
                <UserImage
                  as={motion.img}
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : UserIcon}
                  alt=""
                  onClick={toggleProfileActions}
                />
                <LinksContainer ref={profileActions} onClick={toggleProfileActions}>
                  {currentUser ? (
                    <>
                      {user && <Links to="/dashboard">Dashboard</Links>}
                      <Logout onClick={logout}>LogOut</Logout> 
                    </>
                  ) : (
                    <>
                      <Links to="/login">Login</Links>
                      <Links to="/signup">Signup</Links>
                    </>
                  )}
                </LinksContainer>
              </ImageContainer>
              <MobileContainer onClick={navigationMenuToggling}>
                <SpanContainer>
                  <MobileToggleIcon></MobileToggleIcon>
                </SpanContainer>
              </MobileContainer>
            </NavIconsContainer>
          </Navbar>
        </Wrapper>
      </MainHeader>
    </>
  );
};

export default Header;
