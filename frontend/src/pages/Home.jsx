import React, { useEffect, useRef, useState } from "react";
import { getAllCards } from "../utils/tarot_app";
import { useLoaderData } from "react-router-dom";
import CardCarousel from "../components/CardCarousel";
import { Row, Col, Button } from "react-bootstrap";
import Readings from "../components/Readings";
import SpreadNote from "../components/SpreadNote";
import axios from "axios";

export async function loader() {
  const cards = await getAllCards();
  return { cards };
}

export default function HomePage(props) {
  const { cards } = useLoaderData();
  const [isShuffled, setIsShuffled] = useState(0);
  const [spreadData, setSpreadData] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);

  const getUser = async () => {
    let res = await axios.get("api/user");
    let user = res.data;
    if (user) {
      setCurrentUser(user);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="main">
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
            <p style={{color: 'red'}}>
              First create an account and login to get your Daily Tarot. Then,
              come to know yourself.
            </p>
            {currentUser && (
              <Button
                className="daily-tarot"
                onClick={() => setIsShuffled(16)}
                type="submit"
                placeholder="Shuffle"
                name="Shuffle"
              >
                Daily Tarot
              </Button>
            )}
          </Col>
        </Row>
      ) : spreadData ? (
        <SpreadNote spreadData={spreadData} />
      ) : (
        <Readings
          user={props.user}
          isShuffled={isShuffled}
          cards={cards}
          setIsShuffled={setIsShuffled}
          setSpreadData={setSpreadData}
        />
      )}
    </div>
  );
}
