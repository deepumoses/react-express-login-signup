import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import "./Dashboard.css";

export default function Dashboard() {
  const userData = useSelector(state => state.userInfo);

  return (
    <div className="dashboard">
      <h1>DASHBOARD</h1>
      {userData.map((user, index) => (
        <React.Fragment key={index}>
          <h2>Welcome {user.username}</h2>
          <ul>
            <li>
              <b>Email address:</b> {user.email}
            </li>
            <li>
              <b>First Name: </b>
              {user.first_name}
            </li>
            <li>
              <b>Last Name: </b>
              {user.last_name}
            </li>
            <li>
              <b>Gender: </b>
              {user.gender}
            </li>
            <li>
              <b>Country: </b>
              {user.country}
            </li>
          </ul>
        </React.Fragment>
      ))}
    </div>
  );
}
