import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useState } from 'react';
import NoteUpdateModal from './NoteUpdateModal';

export default function NoteForm(props) {
  const [modalShow, setModalShow] = useState(false)

  const saveNote = async(e) => {
    e.preventDefault()
    const form = e.target
    const description = form.elements[0].value
    const interpretation = form.elements[1].value
    const res = await axios.put('/api/note', {'description': description, 'interpretation': interpretation, 'note_id': props.spreadData.note_id})
    setModalShow(res.data.success)
    
  }

  return (
    <Form onSubmit={saveNote}>
        {Boolean(props.spreadData.note_description) && <p> Description: {props.spreadData.note_description}</p>}
        <Form.Group className="note-form" controlId="formDescription">
          <Form.Control  as='textarea' type="description" placeholder="Description" style={{ height: '200px' }}/>
        </Form.Group>

        {Boolean(props.spreadData.note_description) && <p> Interpretation: {props.spreadData.note_interpretation}</p>}
        <Form.Group className="note-form" controlId="formInterpretation">
          <Form.Control as='textarea' type="interpretation" placeholder="Interpretation" style={{ height: '200px' }}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
        <NoteUpdateModal show={modalShow} onHide={() => setModalShow(false)}/>
      </Form>
  )
}
