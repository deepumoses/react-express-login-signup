import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "./Login.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/actions";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const userData = useSelector(state => state.userInfo);
  const dispatch = useDispatch();

  function validateForm() {
    let validPassword = password.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    );

    return username.length > 0 && password.length > 5 && validPassword;
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(
      actions.getData("http://localhost:3005/user", {
        username,
        password
      })
    );
  }

  function navigate() {
    props.history.push("/dashboard");
    localStorage.setItem("userData", userData);
  }

  return (
    <div className="Login">
      <Form noValidate validated={validateForm()} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            required
            onChange={event => setUsername(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" disabled={!validateForm()} type="submit">
          Login
        </Button>
        {validateForm() ? (
          ""
        ) : (
          <div className="error">
            Please enter a valid Username/Password
            <br />
            <br />
            The password should have atleast 1 uppercase,1 lowercase, 1 special
            character and a minimum of 8 characters
          </div>
        )}
      </Form>
      {isAuthenticated ? navigate() : ""}
    </div>
  );
}
