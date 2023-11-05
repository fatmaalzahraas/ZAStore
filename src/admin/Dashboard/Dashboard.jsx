import React from "react";
import WithGuard from "../../components/WithGuard";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageUi from "../../components/PageBeginngUi/PageUi";
import {
  BackBtn,
  DashboardSection,
  Div,
  NoAuthorized,
  NoAuthorizedTitle,
  Numbers,
  Span,
  Wrapper,
} from "./Dashboard.style";
import { MainContainer } from "../../globalStyles/Global.styles";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux-toolkit/productsSlice";
import { useEffect } from "react";
import Loading from "../../components/Loading";
import useGetUsers from "../../customHooks/useGetUsers";
import useAuth from "../../customHooks/useAuth";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const { data, load } = useGetUsers();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const user = data?.find((el) => el.uid === currentUser?.uid);
  const { products, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
    <Loading loading={load} error={error}>
    {user?.isAdmin ? (
          <PageTitle title="dashboard">
          <AdminNavbar />
          <PageUi title="Dashboard" />
          <DashboardSection>
            <MainContainer>
              <Wrapper>
               
                  <Div
                    as={motion.div}
                    whileHover={{ scale: 1.1 }}
                    background="#fdefe6"
                  >
                    <Span>Total Sales</Span>
                    <Numbers>$7890</Numbers>
                  </Div>
                  <Div
                    as={motion.div}
                    whileHover={{ scale: 1.1 }}
                    background="#ceebe9"
                  >
                    <Span>Orders</Span>
                    <Numbers>100</Numbers>
                  </Div>
                  <Div
                    as={motion.div}
                    whileHover={{ scale: 1.1 }}
                    background="#e2f2b2"
                  >
                    <Span>Total Products</Span>
                    <Numbers>{products?.length}</Numbers>
                  </Div>
               
              </Wrapper>
            </MainContainer>
          </DashboardSection>
        </PageTitle>
        ) : (
          <NoAuthorized>
          <NoAuthorizedTitle>You Are not Authorized</NoAuthorizedTitle>
          <BackBtn onClick={() => navigate("/")}>Back to home</BackBtn>
        </NoAuthorized>
        ) 
    } 
    </Loading>
    </>
  );
};

export default WithGuard(Dashboard);
