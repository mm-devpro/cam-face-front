import React, {useEffect} from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const ProtectedRoute = ({ children }) => {
  const {isLoggedIn} = useSelector(state => state.auth)

  useEffect(() => {
    console.log(isLoggedIn)
  });

  if (!isLoggedIn) {
    // user is not authenticated
    return <Navigate to="/auth/login"/>;
  }
  // user is authenticated
  return children;
};

export default ProtectedRoute
