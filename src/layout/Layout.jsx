import React from "react";
import Navbar from "../Components/shared/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const token = localStorage.getItem("authToken");

  return (
    <div>
      <Navbar />
      <div>{token && <Outlet />}</div>
    </div>
  );
};

export default Layout;
