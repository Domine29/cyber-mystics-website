import { useLoaderData } from "react-router-dom";
import "./Readings.css";
import SpreadShuffle from "../components/SpreadShuffle";
import SelectSpread from "../components/SelectSpread";
import { Row, Col } from "react-bootstrap";
import React, { useState } from "react";

export default function ReadingsPage() {
  const { cards } = useLoaderData();
  const [isShuffled, setIsShuffled] = useState(0)

  return (
    <>
      <Row className="readings-row">
        <Col xs={6} className="shuffle-col">
          <SpreadShuffle cards={cards} isShuffled={isShuffled} />  
        </Col>
        <Col xs={3}>
          {isShuffled 
            ? <></>
            : <SelectSpread className="selector-col" setIsShuffled={setIsShuffled}/>}
          
        </Col>
      </Row>
    </>
  );
}
