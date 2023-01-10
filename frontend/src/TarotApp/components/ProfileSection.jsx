import { Col,Row,Button, Modal,InputGroup,Form, Card } from "react-bootstrap"
import { useState,useEffect } from "react";
import axios from "axios";
import CellModal from "./CellModal";
import {BsFillPenFill} from "react-icons/bs";
import NameModal from "./NameModal";
export default function ProfileSection(){
    const [accountDetails,setAccountDetails]=useState('')
    const [showCell,setShowCell]=useState(false)
    const [showFirstName,setShowFirstName]=useState(false)
    const [showLastName,setShowLastName]=useState(false)
    const handleClose = (type) => eval(`setShow${type}`)(false);
    const handleShow = (type) => eval(`setShow${type}`)(true);

    function getAccountDetails(){
        axios.get('/api/user/account')
        .then((response)=>{setAccountDetails(response.data); console.log(response)})
    }
useEffect(()=>{
    getAccountDetails()
},[])
    return(
        <Card id="profile-card">
            <Card.Header>Profile Details</Card.Header>
        <Card.Body>
        <Card.Text>
            <h5 class="text-decoration-underline">First Name <Button className="bg-transparent text-dark square border border-0 pt-0" onClick={() => handleShow('FirstName')}><BsFillPenFill/></Button></h5>
            {accountDetails.first_name==""?<p>N/A</p>:<p>{accountDetails.first_name}</p>}
            <NameModal defaultValue={accountDetails.first_name} nameType={"first_name"} show={showFirstName} handleClose={() => handleClose('FirstName')}/>
        </Card.Text>

        <Card.Text>
            <h5 class="text-decoration-underline">Last Name<Button className="bg-transparent text-dark square border border-0 pt-0" onClick={() => handleShow('LastName')}><BsFillPenFill/></Button></h5>
            {accountDetails.last_name==""?<p>N/A</p>:<p>{accountDetails.last_name}</p>}
            <NameModal show={showLastName} nameType={"last_name"} handleClose={() => handleClose('LastName')}/>
   
        </Card.Text>
    
        <Card.Text>
            <h5 class="text-decoration-underline">Email</h5>
            <p>{accountDetails.email}</p>
        </Card.Text>

        <Card.Text>
            <h5 class="text-decoration-underline">Cell <Button className="bg-transparent text-dark square border border-0 pt-0" onClick={() => handleShow('Cell')}><BsFillPenFill/></Button></h5>
            {accountDetails.cell_phone_number=="" || accountDetails.cell_phone_number== null?<p>N/A</p>:<p>{accountDetails.cell_phone_number}</p>}
            <CellModal show={showCell} handleClose={() => handleClose('Cell')}/>
        </Card.Text>

        </Card.Body>
        </Card>
)}