import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Login.css'
import { Card } from "react-bootstrap";

export default function Login() {
  const [activeKey, setActiveKey] = useState('login');
  return (
    <Card className="mx-auto w-50 bg-light shadow rounded mb-4">
      <Card.Body>
    <div className="login-forms">
      <Tabs
        defaultActiveKey="login"
        id="login-tabs"
        className="mb-3"
        activeKey={activeKey}
        onSelect={setActiveKey}
      >
        
        <Tab eventKey="login" title="LogIn" className="tab-border-glow">
          <LoginForm />
        </Tab>
        <Tab eventKey="signup" title="Sign Up" className="tab-border-glow">
          <SignUpForm />
        </Tab>
      </Tabs>
      
    </div>
    </Card.Body>
    </Card>
  );
}
