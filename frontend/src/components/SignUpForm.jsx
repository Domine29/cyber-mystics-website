import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

export default function SignUpForm() {

   async function signUp(event) {
    event.preventDefault()
    const form = event.target
    const email = form.elements.email.value
    const password = form.elements.password.value
    await axios.post('/api/signUp', {'email': email, 'password': password})
   }

  return (
    <>
      <Form onSubmit={signUp} id="signup-form">
        <Form.Group className="mb-3" controlId="form-signup-Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="form-signup-Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </>
  );
}
