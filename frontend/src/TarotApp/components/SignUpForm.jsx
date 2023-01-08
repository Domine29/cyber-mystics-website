import React, { useState } from "react";
import { Button, Modal,InputGroup} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function SignUpForm() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [error, setError] = useState("");
  const [firstNameError,setFirstNameError]=useState(false)
  const [lastNameError,setLastNameError]=useState(false)
  const [showOTP,setShowOTP]=useState(false)
  const [OTP,setOTP]=useState(false)
  const {register,handleSubmit}= useForm();

    function checkSignUpNames(e){
    const regex = /^[a-zA-Z]+$/;
    let id=(e.target.getAttribute('id'))
    let errorHandler=null
    if (id=="form-signup-first-name"){
       errorHandler=setFirstNameError
    }
    else if (id=="form-signup-last-name"){
      errorHandler=setLastNameError
    }
    if(!regex.test(e.target.value)){
      errorHandler(true)
    }
    else{
      errorHandler(false)
    }
  }
  function checkSignUp(first_name, last_name) {
    const regex = /^[a-zA-Z]+$/;
    for (const argument in arguments) {
      if (!regex.test(arguments[argument])){
        return false
      }
      else{
        return true
      };
    }
  }
 function signUpUserStep1(data) {
    if(!checkSignUp(data['firstName'],data['lastName'])){
      return console.log("failed sign up")
    }
    else{
      setShowOTP(true)
      axios.post('/api/2fa',{phoneNumber:data['phoneNumber']}).then(
        (response)=>{setShowOTP(true);setOTP(response.data['OTP'])}
      )
    }}

  function signUpUserStep2(data){
      axios.post("/api/signUp", {email: data["email"], 
                            password: data["password"],
                            firstName:data["firstName"],
                            lastName:data["lastName"],
                            phoneNumber:data["phoneNumber"] })
      .then((response) => {
        setIsSignedUp(Boolean(response.data.success));
      }).then(response => window.location.reload())
      .catch((error) => setError(error.response.data));}
  
  

  return (
    <>
      <Form id="signup-form" name="signup-form">
        <Form.Group className="mb-3" controlId="form-signup-Email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control {...register("email")} type="email" placeholder="Enter email" name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="form-signup-cell">
          <Form.Label>Cell Phone Number</Form.Label>
          <Form.Control {...register("phoneNumber")}  type="tel" pattern="[0-9]{10}" placeholder="Enter a cell phone number" name="phoneNumber" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="form-signup-first-name">
          <Form.Label>First Name</Form.Label>
          <Form.Control {...register("firstName")}  onChange={(e)=>checkSignUpNames(e)} type="text" placeholder="Enter first name" name="firstName" />
          {firstNameError?<Form.Text className="text-danger">Name can only contain letters</Form.Text>:<></>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="form-signup-last-name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control {...register("lastName")} onChange={(e)=>checkSignUpNames(e)}  type="text" placeholder="Enter last name" name="lastName" />
          {lastNameError?<Form.Text className="text-danger">Name can only contain letters</Form.Text>:<></>}
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
            {...register("password")}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit((data)=>signUpUserStep1(data))}>
          Sign Up
        </Button>
        </Form>

        <Modal show={showOTP} onHide={()=>setShowOTP(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Your OTP</Modal.Title>
        </Modal.Header>
          <Modal.Body>
             <Form.Group>
              <InputGroup>
            <Form.Control {...register('OTP')} maxLength={6}>
            </Form.Control>
             <Button onClick={handleSubmit((data)=>{if(data['OTP']==OTP){signUpUserStep2(data)}})}>Check Code</Button>
            </InputGroup>
            </Form.Group>
            
            </Modal.Body>
        </Modal> 
        </>
  );
}


            

      
