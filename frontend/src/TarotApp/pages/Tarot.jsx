import React, { useEffect, useState } from "react";
import { getAllCards } from "../utils/tarot_app";
import { useLoaderData } from "react-router-dom";
import CardCarousel from "../components/CardCarousel";
import { Row, Col, Button } from "react-bootstrap";
import Readings from "../components/Readings";
import SpreadNote from "../components/SpreadNote";
import SpreadShuffle from "../components/SpreadShuffle";
import axios from "axios";
import "./Tarot.css"

export async function loader() {
  const cards = await getAllCards();
  return { cards };
}

export default function TarotPage(props) {
  const { cards } = useLoaderData();
  // const [isShuffled, setIsShuffled] = useState(0);
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
    <div className="tarot-page">
      <br />
      {spreadData ? 
      (<SpreadNote spreadData={spreadData} />)
      : 
      (<Readings
          user={props.user}
          cards={cards}
          setSpreadData={setSpreadData}
      />) 
      }
    </div>
  );
}