import _ from "lodash";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import axios from 'axios'

export default function SpreadShuffle(props) {

  // const cards = document.querySelectorAll(".tarot-shuffle");
  // const [isHover, isSetHover] = useState(0); need to figure a way to give the user feedback on which card their mouse is on and which ones they have selected.

  const shuffledItems = _.shuffle(props.cards.data);
  const [cardOrientation, setcardOrientation] = useState(false) // false is upright in this case. 


  async function handleOnClick(e) {
    const cardName = e.target.alt
    const reversed = Boolean(e.target.id)

    if(!reversed){
      reversed = false
    }
    
    const res = await axios.post('/api/reading', {card: cardName, orientation: reversed})
    console.log(res)
  }


  return (
    <>
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
    </>
  );
}
