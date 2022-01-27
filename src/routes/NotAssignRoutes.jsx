import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth";


const NotAssignRoutes = () => {
  var { signed, loading } = useAuth();
  if(loading)
    return <h1>Carregando...</h1>
  return !signed ? <Outlet /> : <Navigate to="/" />;
};

export default NotAssignRoutes;