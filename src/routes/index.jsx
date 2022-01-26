import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../pages/Dashboard";
import Welcome from "../pages/Welcome";
import NoMatch from "../pages/NoMatch";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotAssignRoutes from "./NotAssignRoutes";

const RoutesElements = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<NotAssignRoutes />}>
          <Route index path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/" element={<PrivateRoutes />}>
          <Route index path="" element={<Welcome />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesElements;
