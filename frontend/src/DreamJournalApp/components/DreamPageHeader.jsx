import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

export default function DreamPageHeader() {
  return (
    <Card>
      <Card.Header className="journal-card-header">
        Dramatis Personae
      </Card.Header>
      <Card.Body>
        <ListGroup horizontal className="dream-imgs">
          <ListGroup.Item>Dream Image</ListGroup.Item>
          <ListGroup.Item onClick="" s style={{ cursor: "pointer" }}>
            Add Dream Image
          </ListGroup.Item>
        </ListGroup>
        <Button className="guidance-button">Guidance</Button>
      </Card.Body>
    </Card>
  );
}
