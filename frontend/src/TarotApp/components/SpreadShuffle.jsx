import _ from "lodash";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import axios from 'axios'

export default function SpreadShuffle(props) {

  const shuffledItems = _.shuffle(props.cards.data);

  async function handleOnClick(e) {
    const cardName = e.target.alt
    let isReversed = Boolean(e.target.id)

    if(!isReversed){
      isReversed = false
    }
    
    const res = await axios.post('/api/reading', {card: cardName, reverse: isReversed})
    props.setSpreadData(res.data)
  }


  return (
    <div className="pick-card-container">
      <h1 className ="daily-tarot-title">Daily Tarot Card</h1>
      <p className ="daily-tarot-select-a-card">select a card to continue</p>
      <br />
      <CSSTransition
        in={true}
        timeout={1000}
        className="card-shuffle"
        unmountOnExit
      >
        <div className="cards-container">
          {props.cards &&
            shuffledItems.map((card, index) => {
              
              return (
                    <img
                      src="/static/images/tarot_back.png"
                      alt={card.fields.name}
                      id={[true,false][Math.round(Math.random())] && 'card-orientation'}
                      onClick={handleOnClick}
                      className="tarot-shuffle"
                      style={{ transform: `translateX(${index * props.isShuffled}px)` }}
                    />
              );
            })}
        </div>
      </CSSTransition>
    </div>
  );
}
