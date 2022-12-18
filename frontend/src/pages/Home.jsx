import React from "react";
import AllCards from "../components/AllCards";
import { getAllCards } from "../utils/tarot_app";
import { useLoaderData } from "react-router-dom";
import CardCarousel from "../components/CardCarousel";
import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import Readings from "../components/Readings";


export async function loader() {
  const cards = await getAllCards();
  return { cards };
}

export default function HomePage() {
  const { cards } = useLoaderData();
  const [isShuffled, setIsShuffled] = useState(0);

  return (
    <div>
      <br />
      {!isShuffled ? (
        <Row className="home-row">
          <Col md="auto">
            <CardCarousel cards={cards} />
          </Col>
          <Col className="d-flex flex-column">
            <p>
              Cyber Mystics are those who wish to get know themselves on another
              plane of existence.
            </p>
            <p>
              This site will not read your future but will guide you in
              describing the cards and reveal their meaning that is unique to
              you.
            </p>
            <p>
              Through this journalling site you will gain a deeper understanding
              of yourself.
            </p>
            <Button className="daily-tarot" onClick={()=> setIsShuffled(30)}type='submit' placeholder='Shuffle' name='Shuffle'>Daily Tarot</Button>
          </Col>
        </Row>
      ) : (
        <Readings isShuffled={isShuffled} cards={cards} setIsShuffled={setIsShuffled}/>
      )}
    </div>
  );
}
