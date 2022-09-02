import React from 'react';
import {Outlet} from 'react-router-dom';

const BaseContainer = () => {
  return (
    <div className="base-container">
      <Outlet />
    </div>
  );
};

export default BaseContainer;
