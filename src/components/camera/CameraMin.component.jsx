import React, {useEffect} from 'react';
import {getFeed} from '../../store/reducers/camera';
import {useDispatch} from 'react-redux';
import './Camera.styles.scss'

const CameraMin = ({data}) => {
  const {url, name, startTime, camNum} = data


  const dispatch = useDispatch()
  return (
    <div className="camera-min-container">
      <img
        className="camera-min-img"
        src={url}
        alt={`video surveillance ${camNum}`}/>
      <div className="camera-min-infos">
        <p className="start-time">{startTime}</p>
        <p className="name">{name}</p>
        <button onClick={() => {
          setTimeout(() => {
            dispatch(getFeed(0))
          }, 1000)
        }}>Click for feed</button>
      </div>
    </div>
  );
};

export default CameraMin;
