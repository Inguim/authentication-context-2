import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";


const PublicRoutes = () => {
  var { signed } = useAuth();
  return !signed ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoutes;