import React from 'react';
import {useParams} from "react-router-dom";

import "./CameraPage.styles.scss"

const CameraActions = () => {
  const {url} = useParams()
  return (
    <div className="camera-actions-container">
      <div className="left-side-container">
        <div className="infos-container">
          Infos
        </div>
        <div className="actions-container">
          actions
        </div>
      </div>
      <div className="right-side-container">
        <img src={`http://localhost:5000/api/v1/stream/${url}`} alt={`http://localhost:5000/api/v1/stream/${url}`}/>
      </div>
    </div>
  );
};

export default CameraActions;
