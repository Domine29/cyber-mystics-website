import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

import "./JournalEntries.css";

export default function JournalToC() {
  const [show, setShow] = useState(false);
  const [userEntries, setUserEntries] = useState();

  useEffect(() => {
    const getUserJournalEntries = async () => {
      const response = await axios.get("api/dream");
      console.log(response.data);
      setUserEntries(response.data);
    };
    getUserJournalEntries();
  }, []);

  if (!userEntries) return null;
  return (
    <>
      <div>
        <h2 className="journal-toc">Table of Contents</h2>
      </div>
      <Card className="journal-entry">
        {userEntries.map((userEntry, i) => {
          return (
            <>
              <Card.Header onClick={() => setShow(!show)}>
                {userEntry.date}
              </Card.Header>
              {show ? (
                <Card.Body>
                  <h5 className="headers">Description</h5>
                  {userEntry.description}
                  <h5 className="headers">Association</h5>
                  {userEntry.association}
                  <h5 className="headers">Inner Dynamics</h5>
                  {userEntry.inner_dynamics}
                  <h5 className="headers">Interpretation</h5>
                  {userEntry.interpretation}
                  <h5 className="headers">Ritual</h5>
                  {userEntry.ritual}
                </Card.Body>
              ) : null}
            </>
          );
        })}
      </Card>
    </>
  );
}
