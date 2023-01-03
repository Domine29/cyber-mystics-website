import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup';

export default function JournalHeader() {
  return (
    <Card>
      <Card.Header className="journal-card-header">
        Dramatis Personae
      </Card.Header>
      <Card.Body>
        <ListGroup horizontal className="dream-imgs">
          <ListGroup.Item>Dream Image</ListGroup.Item>
          <ListGroup.Item>Add Dream Image</ListGroup.Item>
        </ListGroup>
        <Button className="guidance-button">Guidance</Button>
      </Card.Body>
    </Card>
  );
}
