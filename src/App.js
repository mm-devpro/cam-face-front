import React, {useEffect} from 'react';
import {useCookies} from "react-cookie";
import Header from "./components/header/Header.component";
import NavigationBar from "./components/navbar/NavigationBar.component";
import RouteHandler from "./components/route-handler/RouteHandler.component";

import './App.scss';
import {useSelector} from "react-redux";

const App = () => {
  let {isLoggedIn} = useSelector(state => state.user)
  let [cookie, setCookie] = useCookies(['user'])

  return (
    <div className="app">
      <div className={`nav-side ${!isLoggedIn && "side-collapse"}`}>
        <NavigationBar/>
      </div>
      <div className={`main-side ${!isLoggedIn && "main-when-side-collapse"}`}>
        <Header/>
        <div className="main-container">
          <RouteHandler/>
        </div>
      </div>
    </div>
  );
}

export default App;
