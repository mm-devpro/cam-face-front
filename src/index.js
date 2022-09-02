import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';
import {CookiesProvider} from "react-cookie";
import store from "./store";

import App from './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById("root")

// create a root
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <CookiesProvider>
      <Router>
        <App/>
      </Router>
    </CookiesProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
