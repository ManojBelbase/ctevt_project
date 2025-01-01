import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/shared/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
