import React from "react";
import {Link} from "react-router-dom"

const Home = () => {

  return (
    <>
      <div className="homepage">
        <h1>It's the homepage</h1>
        <nav>
          <Link to="/admin/workers">Admin site</Link>
          <Link to="/stream/0">Specific camera</Link>
        </nav>
      </div>
    </>
  )
}

export default Home
