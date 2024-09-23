import React from "react";
import "./home.css";
import useVisitCounter from "./visitCounter";

const HomePage = () => {
  const  visits  = useVisitCounter();
  return (
  
      <div className="dashboard-container">
        <h1>Dashboard </h1>
        <div className="grid-container">
          <div className="grid-item item1">
            <h3>Overview</h3>

            <p>Some summary or overview data here.</p>
          </div>
          <div className="grid-item item2">
            <h3>Status</h3>
            <p>Graph or statistics preview here.</p>
            <p>Total Visits: <strong>{visits}</strong></p>

          </div>
          <div className="grid-item item3">
            <h3>Recent Activity</h3>
            <p>List of recent actions or activities.</p>
          </div>
          <div className="grid-item item4">
            <h3>Settings</h3>
            <p>Access account or system settings.</p>
          </div>
        </div>
     
      </div>

  
  );
};

export default HomePage;
