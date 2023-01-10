import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Nav } from "react-bootstrap";

export default function LoginForm() {
  const [error, setError] = useState('')

  function loginUser(event, response) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    axios
      .post("/api/login", { email: email, password: password })
      .then((response) => {
        if (response.data.success) {
          window.location.replace("/");
        }
      })
      .catch(error => setError(error.response.data));
  }

  return (
    <>
      <Form onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          {error && <p style={{color: 'red'}}>{error}</p>}
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control style={{ backgroundColor: 'white' }} 
            type="password"
            placeholder="Password"
            name="password"
          />
          
        </Form.Group>
        <Form.Group>
        <Button className="primary-cta" variant="primary" type="submit">
          Login
        </Button>
        <Nav.Link style={{display: "inline", marginLeft: 10, color:"blue",textTransform:"lowercase"}} href="/forgotpassword/">Forgot Password?</Nav.Link>
        </Form.Group>
      </Form>
    </>
  );
}
