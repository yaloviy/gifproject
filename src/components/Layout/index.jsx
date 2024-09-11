import React from "react";
import HeaderComponent from "../Header/index"
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
   <>
    <HeaderComponent />
    <Outlet />
    
   </>
  ) 
}

export default Layout