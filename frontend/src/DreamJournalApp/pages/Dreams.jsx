import JournalComponent from "../components/JournalComponent";
import JournalHeader from "../components/JournalHeader";
import Card from "react-bootstrap/Card";
import "./Dreams.css";

export default function DreamsPage() {
  return (
    <Card className="journal-card">
      <JournalHeader />
      <h2>Description</h2>
      <JournalComponent />
      <h2>Association</h2>
      <JournalComponent />
      <h2>Inner Dynamics</h2>
      <JournalComponent />
    </Card>
  );
}
