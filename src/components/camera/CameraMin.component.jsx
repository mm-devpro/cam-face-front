import React from 'react';

import './Camera.styles.scss'

const CameraMin = ({data}) => {
  const {url, name, startTime, camNum} = data
  return (
    <div className="camera-min-container">
      <img
        className="camera-min-img"
        src={url}
        alt={`video surveillance ${camNum}`}/>
      <div className="camera-min-infos">
        <p className="start-time">{startTime}</p>
        <p className="name">{name}</p>
      </div>
    </div>
  );
};

export default CameraMin;
