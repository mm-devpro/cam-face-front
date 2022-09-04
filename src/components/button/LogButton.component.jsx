import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {logout} from "../../store/reducers/auth";
import {useNavigate, useLocation} from "react-router-dom";
import {ImSwitch} from "react-icons/im";

const LogButton = () => {
  const {isLoggedIn} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="log-button" onClick={() => {
      isLoggedIn ?
        (dispatch(logout()) && navigate('/auth/login'))
        : location.pathname === '/auth/login' ? navigate('/auth/signup') : navigate('/auth/login')
    }} style={{cursor: "pointer", display:"inline-block"}}>
      <ImSwitch size="1.5em" style={{color:"white", backgroundColor: "black", borderRadius:"100px", padding: "10px"}}/>
    </div>
  );
};

export default LogButton;
