import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import ApiModal from "./ApiModal";

export default function SpreadGuidance(props) {
  const [apiData, setApiData] = useState(false);

  const getInspiration = async () => {
    const res = await axios.get('/api/third_party')
    const apiData = res.data
    setApiData(apiData);
  };

  return (
    <>
      <ul className="guidance-notes">
        <li>Keywords:</li>
        <ul className="guidance-content">
          {props.spreadData.keywords.map((word) => (
            <li>{word}</li>
          ))}
        </ul>
        <li>Questions to Ask:</li>
        <ul className="guidance-content">
          {props.spreadData.questions_to_ask.map((question) => (
            <li>{question}</li>
          ))}
        </ul>
        <li></li>
      </ul>
        <Button onClick={getInspiration}>Inspiration</Button>
        <ApiModal show={apiData} onHide={() => setApiData(false)} apiData={apiData}/>
    </>
  );
}
