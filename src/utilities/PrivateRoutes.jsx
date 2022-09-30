import React, { useMemo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoutes() {
  const token = useSelector((state) => state.auth.userEmail);
  console.log("render");

  return token ? <Outlet /> : <Navigate to="/login" />;
}

export default React.memo(PrivateRoutes);
