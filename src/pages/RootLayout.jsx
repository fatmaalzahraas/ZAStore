import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import {ThemeProvider} from 'styled-components';
import {theme} from '../globalStyles/Global.styles';
const RootLayout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
      <Header />
      <Outlet />
      <Footer />
      </ThemeProvider>
    </>
    
  )
}

export default RootLayout;