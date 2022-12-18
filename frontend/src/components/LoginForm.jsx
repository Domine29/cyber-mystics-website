import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

export default function LoginForm() {

  function loginUser(event, response) {
    event.preventDefault()
    const form = event.target
    const email = form.elements.email.value
    const password = form.elements.password.value
    
    axios.post('/api/login', {'email': email, 'password': password})
      .then(response => {
        if(response.data){
          window.location.reload()
        }
      } )
   }

  return (
    <>
      <Form onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email'/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password'/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </>
  )
}
