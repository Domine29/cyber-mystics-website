import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function JournalHeader() {
  return (
    <Card>
      <Card.Header className="journal-card-header">
        Dramatis Personae
      </Card.Header>
      <Card.Body>
        <span>
          <input type="text" placeholder="Image Name"></input>
          <input type="file"></input>
        </span>
        <Button className="guidance-button">Guidance</Button>
      </Card.Body>
    </Card>
  );
}
