import React from "react";
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {

  if (!user || !user.email) {
    // worker is not authenticated
    return <Navigate to="/"/>;
  }
  // worker is authenticated
  return children;
};

export default ProtectedRoute
