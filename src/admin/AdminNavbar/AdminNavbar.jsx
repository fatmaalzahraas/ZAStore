import React from "react";
import {
  AdminMenu,
  AdminMenuWrapper,
  Container,
  Li,
  Ul,
  NavLinks
} from "./AdminNavbar.style";
const admin_menu = [
  {
    display: "Dashboard",
    path: "/dashboard"
  },
  {
    display: "All-Products",
    path: "/dashboard/all-products"
  },
  {
    display: "Add-Product",
    path: "/dashboard/add-products"
  }
]
const AdminNavbar = () => {
  return (
    <>
    <AdminMenu>
      <Container>
        <AdminMenuWrapper>
          <Ul>
            {admin_menu.map((el, index) => (
              <Li key={index}>
                <NavLinks to={el.path}>{el.display}</NavLinks>
              </Li>
            ))}
          </Ul>
        </AdminMenuWrapper>
      </Container>
    </AdminMenu>
    </>
  );
};

export default AdminNavbar;
