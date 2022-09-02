import React from 'react';
import {useParams} from "react-router-dom";

const CameraDetails = () => {
  const {url} = useParams()
  return (
    <div>
      <img src={`http://localhost:5000/api/v1/stream/{url}`} alt={`http://localhost:5000/api/v1/stream/{url}`}/>
    </div>
  );
};

export default CameraDetails;
