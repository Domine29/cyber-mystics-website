import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-forms">
        <Tabs defaultActiveKey="login" id="login-tabs" className="mb-3">
          <Tab eventKey="login" title="LogIn">
            <LoginForm />
          </Tab>
          <Tab eventKey="signup" title="Sign Up">
            <SignUpForm />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
