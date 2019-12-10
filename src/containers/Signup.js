import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as actions from "../store/actions/actions";
import "./Signup.css";

export default function Signup() {
  const [signup, setSignup] = useState({
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    gender: "Male",
    country: "Australia"
  });
  const dispatch = useDispatch();

  function validateName(nameLength) {
    return nameLength > 3;
  }

  function validateEmail(email) {
    let validEmail = email.match(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );

    return validEmail;
  }

  function validatePassword(password) {
    let validPassword = password.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    );
    return validPassword;
  }

  function validateForm() {
    return (
      validateName(signup.username.length) &&
      validateName(signup.first_name.length) &&
      validateName(signup.last_name.length) &&
      validateEmail(signup.email) &&
      validatePassword(signup.password)
    );
  }

  function handleGenderChange(event) {
    setSignup({
      ...signup,
      gender: event.target.value
    });
  }

  function handleSelect(event) {
    setSignup({
      ...signup,
      country: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      dispatch(actions.postData(signup));
    }
  }
  return (
    <div className="Signup">
      <Form noValidate validated={validateForm()} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={signup.username}
            required
            onChange={event =>
              setSignup({ ...signup, username: event.target.value })
            }
          />
          <Form.Text className="text-muted">
            Username must have a minimum of 3 characters
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={signup.password}
            required
            onChange={event =>
              setSignup({ ...signup, password: event.target.value })
            }
          />
          <Form.Text className="text-muted">
            The password should have atleast 1 uppercase,1 lowercase, 1 special
            character and a minimum of 8 characters
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={signup.email}
            required
            onChange={event =>
              setSignup({ ...signup, email: event.target.value })
            }
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicFirstname">
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            value={signup.first_name}
            required
            onChange={event =>
              setSignup({ ...signup, first_name: event.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            value={signup.last_name}
            required
            onChange={event =>
              setSignup({ ...signup, last_name: event.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formBasicGender">
          <Form.Check
            type="radio"
            value="Male"
            label="Male"
            name="gender"
            checked={signup.gender === "Male"}
            onChange={handleGenderChange}
          />
          <Form.Check
            type="radio"
            value="Female"
            label="Female"
            name="gender"
            checked={signup.gender === "Female"}
            onChange={handleGenderChange}
          />
        </Form.Group>
        <select value={signup.country} onChange={handleSelect}>
          <option value="Australia">Australia</option>
          <option value="Brazil">Brazil</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        <br />
        <br />
        <Button variant="primary" type="submit" disabled={!validateForm()}>
          Signup
        </Button>
      </Form>
    </div>
  );
}
