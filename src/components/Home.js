import React from "react";
import { Link, Router } from "react-router-dom";
import rat from "../assets/rat.jpg";
import "../App.css";

function Home() {
  return (
    <div className="bkimage" style={{ backgroundImage: `url(${rat})` }}>
      <div className="headerContainer">
        {/* <h2 className="hometitle">
        
          <br />
          THE LEADING RAT TRACKER
        </h2>
        <Link to="/songs">
          <button>  RAT TRACKER </button>
        </Link> */}
        <br />
        <br />
      </div>
    </div>
  );
}

export default Home;
