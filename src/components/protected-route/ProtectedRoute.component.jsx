import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const ProtectedRoute = ({ children }) => {
  const {user} = useSelector(state => state.user)

  if (!user || !user.email) {
    // user is not authenticated
    return <Navigate to="/login"/>;
  }
  // user is authenticated
  return children;
};

export default ProtectedRoute
