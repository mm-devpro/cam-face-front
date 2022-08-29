import React from "react";
import {Route, Routes} from "react-router";
import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';
import ProtectedRoute from "../protected-route/ProtectedRoute.component";
import Home from "../../pages/home/HomePage.component";
import Login from "../../pages/auth/LoginPage.component";
import NotFound from "../../pages/not-found/NotFound.component";


const RouteHandler = () => {
  const {user} = useSelector(state => state.user)

  return (
    <Routes>
      {/*<Route index element={<ProtectedRoute user={user}><Home/></ProtectedRoute>}/>*/}
      <Route index element={<Home/>}/>
      {/*<Route exact path="/home" element={<ProtectedRoute user={user}><Home/></ProtectedRoute>}/>*/}
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/login" element={
        <div>
          {
            !user
              ? <Login/>
              : <Navigate to="/home" />
          }
        </div>
      }/>
      <Route exact path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default RouteHandler
