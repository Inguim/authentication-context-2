import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";
import Login from "../pages/Login";
import Register from "../pages/Register";

const RoutesElements = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/" element={<PrivateRoutes />}>
          <Route index path="" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesElements;
