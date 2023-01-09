import axios from "axios"
import { useState } from "react"
import { Modal,Form,InputGroup,Button } from "react-bootstrap"
import {BsFillCheckSquareFill} from "react-icons/bs"
export default function NameModal(props){
    const [input,setInput]=useState('')
    function submitName(nameType){
        axios.put('/api/user/name',{[nameType]:input})
        .then(window.location.reload())
    }
    return(
        <Modal show={props.show} onHide={props.handleClose}>
    <Modal.Header closeButton> Edit Name</Modal.Header>
    <Modal.Body>
    <InputGroup className="mb-3">
        <Form.Control
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          placeholder={props.defaultValue}
        />
        <Button onClick={()=>submitName(props.nameType)} className="bg-transparent text-dark square border border-0">
        <BsFillCheckSquareFill size='2rem'/>
        </Button>
      </InputGroup>
    </Modal.Body>
</Modal>
    )
}