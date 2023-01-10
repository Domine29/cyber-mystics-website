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
      <div className="guidance">
        <p className="guidance-subtitles">Keywords</p>
        <div className="guidance-content-wrapper">
        <div className="guidance-content">
          <br/>
          {props.spreadData.keywords.map((word) => (
            <p>{word}</p>
          ))}
        </div>
        </div>
        <br/>
        <p className="guidance-subtitles">Questions to Ask</p>
        <div className="guidance-content-wrapper">
        <div className="guidance-content">
          <br/>
          {props.spreadData.questions_to_ask.map((question) => (
            <p>{question}<br/></p>
          ))}
        </div>
        </div>
        <br/>
      </div>
        {/* <Button onClick={getInspiration} className="ask-the-oracle">Ask the Oracle</Button> */}
        <div className="cta-btns">
          <a className="ask-oracle-btn" onClick={getInspiration}>Ask the Oracle</a>
        </div>
        <ApiModal show={apiData} onHide={() => setApiData(false)} apiData={apiData}/>
        <br/>
        {props.handleClick && <Button onClick={props.handleClick} className="delete-reading-btn" variant="danger">Delete Reading</Button>}
    </>
  );
}
