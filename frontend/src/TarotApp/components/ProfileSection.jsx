import { Col,Row,Button, Modal,InputGroup,Form } from "react-bootstrap"
import { useState,useEffect } from "react";
import axios from "axios";
import CellModal from "./CellModal";
export default function ProfileSection(){
    const [accountDetails,setAccountDetails]=useState('')
    const [show,setShow]=useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function getAccountDetails(){
        axios.get('/api/user/account')
        .then((response)=>{setAccountDetails(response.data); console.log(response)})
    }
useEffect(()=>{
    getAccountDetails()
},[])
    return(
<Col id="profile-section" xs={12} lg={{span: 8 ,offset:2}}>
    <Row>

        <Col xs={12}>
            <h4>Profile</h4>
        </Col>

        <Col sm={12} lg={6} >
            <h5>First Name</h5>
            <p>{accountDetails.first_name}</p>
        </Col>

        <Col sm={12} lg={6}>
            <h5>Last Name</h5>
            <p>{accountDetails.last_name}</p>
        </Col>
    
        <Col xs={12}>
            <h5>Email</h5>
            <p>{accountDetails.email}</p>
        </Col>

        <Col xs={12}>
            <h5>Cell <Button onClick={handleShow}>Edit</Button></h5>
            <p>{accountDetails.cell}</p>
            <CellModal show={show} handleClose={handleClose}/>
        </Col>

    </Row>

</Col>)}