import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  //   console.log(isAuth)
  const navigate = useNavigate();
  if (isAuth) {
    return <NavLink to="/login" />;
  }
  // console.log(isAuth)
  return children;
};

export default RequireAuth;
