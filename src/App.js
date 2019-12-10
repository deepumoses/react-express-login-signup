import React from "react";
import "./App.css";
import Nav from "react-bootstrap/Nav";
import Routes from "./Routes";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function App(props) {
  const isAuth = useSelector(state => state.isAuthenticated);
  const dispatch = useDispatch();

  const handleLoginStatus = () => {
    dispatch({
      type: "LOGOUT"
    });
  };

  return (
    <div className="App container">
      <Nav
        activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <Link to="Login" className="nav-link" onClick={handleLoginStatus}>
          {isAuth ? "Logout" : "Login"}
        </Link>
        <Link to="SignUp" className="nav-link">
          SignUp
        </Link>
      </Nav>
      <Routes />
    </div>
  );
}

export default App;
