import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  return localStorage.getItem("jwt") ? <Outlet /> : <Navigate replace to="/" />;
}

export default ProtectedRoute;