import React from "react";
import { Template } from "../components/Template";
import loginImage from "../assets/login.png";

export const Login = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const templateData = {
    title: "Welcome Back",
    desc1: "Build Skills for Today, Tomorrow. and Beyond.",
    desc2: "Education to future-proof your Career",
    formType: "login",
  };
  return (
    <Template
      data={templateData}
      image={loginImage}
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};
