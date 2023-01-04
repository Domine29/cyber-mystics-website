import JournalComponent from "../components/DreamDescription";
import JournalHeader from "../components/DreamPageHeader";
import Card from "react-bootstrap/Card";
import "./Dreams.css";

export default function DreamsPage() {
  return (
    <Card className="journal-card">
      <JournalHeader />
      <br />
      <h5>Description</h5>
      <JournalComponent />
      <h5>Association</h5>
      <JournalComponent />
      <h5>Inner Dynamics</h5>
      <JournalComponent />
    </Card>
  );
}
