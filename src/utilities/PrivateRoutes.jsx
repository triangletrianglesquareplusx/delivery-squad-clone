import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import auth from "../firebase/firebase-config";

function PrivateRoutes() {
  const token = auth.currentUser;
  console.log(token);
  return token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
