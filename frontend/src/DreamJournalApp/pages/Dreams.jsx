import DreamDescription from "../components/DreamDescription";
import DreamPageHeader from "../components/DreamPageHeader";
import "./Dreams.css";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { useRef, useState } from "react";
import axios from "axios";

export default function DreamsPage() {
  const [show, setShow] = useState(false);
  const description = useRef("");
  const association = useRef("");
  const innerDynamics = useRef("");
  const ritual = useRef("");
  const interpretation = useRef("");

  function saveDreamEntry() {
    const saveEntry = async () => {
      const response = await axios.post("api/dream", {
        params: {
          description: description.current.value,
          association: association.current.value,
          inner_dynamics: innerDynamics.current.value,
          interpretation: interpretation.current.value,
          ritual: ritual.current.value,
        },
      });
      if (response.data.success) {
        window.location = "/journal";
      }
      console.log(response.data);
    };
    saveEntry();
  }

  return (
    <Card className="journal-card">
      <DreamPageHeader />
      <br />
      <h5 className="headers">Description</h5>
      <DreamDescription text={description} />
      <h5 className="headers">Association</h5>
      <DreamDescription text={association} />
      <h5 className="headers">Inner Dynamics</h5>
      <DreamDescription text={innerDynamics} />
      {show ? (
        <>
          <h5 className="headers">Interpretation</h5>
          <DreamDescription text={interpretation} />
          <h5 className="headers">Ritual</h5>
          <DreamDescription text={ritual} />
        </>
      ) : null}
      {show ? (
        <>
          <Button onClick={() => saveDreamEntry()}>Save</Button>
          <Button onClick={() => setShow(!show)}>Back</Button>
        </>
      ) : (
        <Button onClick={() => setShow(!show)}>Next</Button>
      )}
    </Card>
  );
}
