import axios from 'axios';
import React, { useState } from 'react';
import { Card, Form, Button, Alert, Modal,InputGroup } from 'react-bootstrap';
import { useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
function ForgotPassword() {
  const { register, formState: { errors }, handleSubmit } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });
  const [showOTP,setShowOTP]=useState(false)
  const [OTP,setOTP]=useState(false)
  const [showPasswordModal,setShowPaswordModal]=useState(false)
  const navigate = useNavigate();

  function getOTP(data){
        setShowOTP(true)
        axios.post('/api/2fa',{phoneNumber:data["phoneNumber"]}).then(
        (response)=>{setShowOTP(true);setOTP(response.data['OTP'])}
      )
  }

  function sumbitNewPassword(password,phoneNumber){
    axios.put('/api/set_password',{password:password,phoneNumber:phoneNumber})
    .then((response)=> {alert(response.data["message"]);	
    navigate('/');
    window.location.reload()})
    .catch((error) => {
        console.log(error.response.data["message"]);
      });
  }

  return (<div className='forgot-password-body'>
    <Card id='forgot-password-card' className="mx-auto w-50 bg-light shadow rounded mb-4">
        <Card.Header className="text-center">IDENTITY VERIFICATION</Card.Header>
      <Card.Body>
       {errors.phoneNumber && <Alert variant="danger">A valid phone number is required</Alert>}
        
        <Form id='forgot-password-form' onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label className="w-70"> YOUR PHONE NUMBER </Form.Label>
            <Form.Control className="w-70" type="tel"  {...register("phoneNumber", {pattern:/^[0-9]{10}$/})} />
            
          </Form.Group>
          <div className="d-grid">
          <Button id='reset-button' size="lg"  onClick={handleSubmit((data)=> getOTP(data))}>Get Verification Code</Button>
          </div>
        </Form >
        
        <Modal show={showOTP} onHide={()=>setShowOTP(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Your The Code <br/> Sent to Your Cellphone</Modal.Title>
        </Modal.Header>
          <Modal.Body>
             <Form.Group>
              <InputGroup>
            <Form.Control {...register('OTP')} maxLength={6}>
            </Form.Control>
             <Button id='check-code-button' onClick={handleSubmit((data) => {
                            if (data['OTP'] == OTP) {
                                                    setShowOTP(false);
                                                    setShowPaswordModal(true);
                          } else {alert("you entered an invalid code")}})}>
                            Check Code</Button>
            </InputGroup>
            </Form.Group>
            </Modal.Body>
        </Modal> 
        <Modal show={showPasswordModal} onHide={()=>setShowPaswordModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Your New Password</Modal.Title>
        </Modal.Header>
          <Modal.Body>
             <Form.Group>
              <InputGroup>
            <Form.Control {...register('password')}>
            </Form.Control>
             <Button onClick={handleSubmit((data)=>{sumbitNewPassword(data['password'],data['phoneNumber'])})}>Submit New Password</Button>
            </InputGroup>
            </Form.Group>
            </Modal.Body>
        </Modal> 
      </Card.Body>
    </Card>
    </div>
  );
}

export default ForgotPassword;




