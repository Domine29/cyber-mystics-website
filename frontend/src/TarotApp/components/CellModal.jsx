import axios from "axios"
import { useState } from "react"
import { Modal,Form,InputGroup,Button } from "react-bootstrap"
export default function CellModal(props){
    const [step,setStep]=useState(0)
    const [phoneNumber,setPhoneNumber]=useState('')
    const [auth1,setAuth1]=useState('')
    function verifyPhone(){
        let regex = /^\d{10}$/;
        let isValid = regex.test(parseInt(phoneNumber));
        return isValid
    }
    function handleClick(){
        console.log("in click")
        if (verifyPhone(phoneNumber)){
            console.log("if")
            axios.post('/api/user/cell',{"phoneNumber":phoneNumber,"code":false})
            nextStep()}
        else
            console.log("invalid")
    }
    function checkCode() {
        let code = auth1;
        console.log("in check");
        axios
          .post("/api/user/cell", { phoneNumber: phoneNumber, code: code })
          .then((response) => alert(response.data["message"]))
          .then((response)=>window.location.reload())
          .catch((error) => {
            alert(error.response.data["message"]);
          });
      }
      

    function nextStep(){
        setStep(step+1)
    }
    function resetStep(){
        setStep(0);
        props.handleClose()
    }
    return(
    <Modal show={props.show} onHide={resetStep}>
    <Modal.Header closeButton> Edit Cell</Modal.Header>
    <Modal.Body>
        {step ==0?
        
        <InputGroup className="mb-3">
            <Form.Control value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} maxLength={10} placeholder="Enter your Cell number (US ONLY!)"/>
            <Button  variant="outline-secondary" id="cell-modal-get-code-btn"  onClick={handleClick}>Get Code</Button>
        </InputGroup>:
        <InputGroup>
            <Form.Control value={auth1} onChange={(e)=>setAuth1(e.target.value)} maxLength={6}></Form.Control>
            <Button id="cell-modal-verify-code-btn" onClick={checkCode}>Check Code</Button>
        </InputGroup>}
    </Modal.Body>
</Modal>)
}