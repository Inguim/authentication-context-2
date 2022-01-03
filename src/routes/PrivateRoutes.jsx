import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";


const PrivateRoutes = () => {
  var { signed } = useAuth();
  return signed ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
