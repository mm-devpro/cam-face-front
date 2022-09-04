import React from 'react';
import {Outlet} from "react-router-dom";
import Header from '../header/Header.component';

import './PageContainers.styles.scss'

const AuthContainer = () => {

  return (
    <div className="auth-container">
      <Header/>
      <div className="main-container scrollable">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthContainer;
