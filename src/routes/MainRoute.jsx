import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../HOC/RequireAuth";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Patients from "../pages/Patients";
import Signup from "./../pages/Signup";

const MainRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/patients/:id" element={<Patients />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default MainRoute;
