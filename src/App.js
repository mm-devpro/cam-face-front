import React, {useEffect} from 'react';
import {Routes, Route} from "react-router";
import {useSelector} from "react-redux";
import {useCookies} from "react-cookie";
import AuthContainer from "./components/page-container/AuthContainer.component";
import BaseAdminContainer from "./components/page-container/BaseAdminContainer.component";
import BaseContainer from "./components/page-container/BaseContainer.component";
import FrontAppContainer from "./components/page-container/FrontAppContainer.component";
import ProtectedRoute from "./components/protected-route/ProtectedRoute.component";
import WorkerPage from "./pages/worker/WorkerPage.component";
import CameraPage from "./pages/camera/CameraPage.component";
import Home from "./pages/home/HomePage.component";
import LockerPage from "./pages/locker/LockerPage.component";
import LogPage from './pages/logs/LogPage.component';
import Login from "./pages/auth/LoginPage.component";
import NotFound from "./pages/not-found/NotFound.component";
import CameraDetails from "./pages/camera/CameraAction.component";
import SettingPage from './pages/settings/SettingPage.component';
import SignUpPage from './pages/auth/SignUpPage.component';
import './App.scss';

const App = () => {
  let {isLoggedIn, isInAdmin} = useSelector(state => state.auth)
  let [cookie, setCookie] = useCookies(['user'])

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<BaseContainer/>}>
          <Route index element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path="admin" element={<ProtectedRoute><BaseAdminContainer/></ProtectedRoute>}>
            <Route exact path="workers" element={<WorkerPage/>}/>
            <Route exact path="streams" element={<CameraPage/>}/>
            <Route exact path="lockers" element={<LockerPage/>}/>
            <Route exact path="logs" element={<LogPage/>}/>
            <Route exact path="settings" element={<SettingPage/>}/>
          </Route>
          <Route path="auth" element={<AuthContainer/>}>
            <Route exact path="login" element={<Login/>}/>
            <Route exact path="signup" element={<SignUpPage/>}/>
          </Route>
          <Route exact path="stream" element={<ProtectedRoute><FrontAppContainer/></ProtectedRoute>}>
            <Route path=":url" element={<CameraDetails/>}/>
          </Route>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
