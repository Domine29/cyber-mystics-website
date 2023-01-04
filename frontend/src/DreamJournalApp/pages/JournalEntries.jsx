import { useState } from "react";
import Card from "react-bootstrap/Card";

import Dreams from "./Dreams";
import "./JournalEntries.css";

export default function JournalToC() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <h2 className="journal-toc">Table of Contents</h2>
      </div>
      <Card className="journal-entry" onClick={() => setShow(!show)}>
        <Card.Header>11 November, 2022 --- Flying Red Car</Card.Header>
        {show ? (
          <Card.Body>
            <Dreams />
          </Card.Body>
        ) : null}
      </Card>
    </>
  );
}
