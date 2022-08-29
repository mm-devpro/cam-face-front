import React, {useEffect} from 'react';
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
        <RouteHandler/>
      </div>
    </div>
  );
}

export default App;
