import React, { useState } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";

const AuthState = ({ children }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const loginForm = async () => {
    try {
      const response = await axios.post(
        "http://62.72.42.129:7777/api/v1/en/user/login",
        formData
      );

      if (response.data?.token) {
        console.log("Login successfully");
        const token = response.data.token;
        localStorage.setItem("token", token);
        console.log("Token saved in localStorage:", token);
      } else {
        console.log("No token received.");
      }
    } catch (error) {
      console.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  const signupForm = async () => {
    try {
    } catch (error) {}
  };

  return (
    <AuthContext.Provider value={{ formData, setFormData, loginForm }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
