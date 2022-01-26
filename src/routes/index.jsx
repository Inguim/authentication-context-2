import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PublicRoutes from "./PublicRoutes";

const RoutesElements = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route index path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/" element={<PrivateRoutes />}>
          <Route index path="" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesElements;
