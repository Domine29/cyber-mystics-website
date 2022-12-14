import React from 'react'
import { Form } from 'react-bootstrap';


export default function SelectSpread(props) {
  return (
    
    <div className='spread-selector.'>
      <Form className='select-spread-form'>
        <Form.Group>
          <Form.Check
            type="radio"
            label="Single Card"
            name="radio-select"
            id="radio-1"
          />
          <Form.Check
            type="radio"
            label="Three Card Spread"
            name="radio-select"
            id="radio-2"
          />
        </Form.Group>
        <button onClick={()=> props.setIsShuffled(30)}type='submit' placeholder='Shuffle' name='Shuffle'>Shuffle</button>
      </Form>   
    </div>
)}
