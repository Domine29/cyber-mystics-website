import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ApiModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cat of Delphi, what wisdom do you bring
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.apiData.quote}</h4>
        <img src={props.apiData.cat} className="cat-img"/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
