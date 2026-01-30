import React from "react";
import { LayoutStyles } from "@/app/layouts/Layout/Layout.styles";
import Header from "@/app/layouts/Header/Header";
import SideBar from "@/app/layouts/SideBar/SideBar";
import Main from "@/app/layouts/Main/Main";



const Layout = () => {
  return (
    <LayoutStyles className="wrapper">
      <Header className="header" />
      <SideBar className="sidebar" />
      <Main className="main" />
    </LayoutStyles>
  );
};

export default Layout;
