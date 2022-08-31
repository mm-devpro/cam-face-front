import React, {useEffect} from 'react';
import Header from "./components/header/Header.component";
import NavigationBar from "./components/navbar/NavigationBar.component";
import RouteHandler from "./components/route-handler/RouteHandler.component";

import './App.scss';

const App = () => {

  return (
    <div className="app">
      <div className="nav-side">
        <NavigationBar/>
      </div>
      <div className="main-side">
        <Header/>
        <div className="main-container">
          <RouteHandler/>
        </div>
      </div>
    </div>
  );
}

export default App;
