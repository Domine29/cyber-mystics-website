import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function SignUpForm() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [error, setError] = useState("");

  function signUpUser(event, response) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    axios
      .post("/api/signUp", { email: email, password: password })
      .then((response) => {
        setIsSignedUp(Boolean(response.data.success));
      }).then(response => window.location.reload())
      .catch((error) => setError(error.response.data));
  }

  return (
    <>
      <Form onSubmit={signUpUser} id="signup-form">
        <Form.Group className="mb-3" controlId="form-signup-Email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>
        {isSignedUp ? (
          <p className="signup-welcome">Thank You for signing up!</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <></>
        )}

        <Form.Group className="mb-3" controlId="form-signup-Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </>
  );
}
