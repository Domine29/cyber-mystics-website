import React from "react";
import { Carousel } from "react-bootstrap";
import './CardCarousel.css'

export default function CardCarousel(props) {
  
  return (
    <Carousel
      interval={3000}
      pause={false}
      controls={false}
      fade={true}
    >
      {props.cards && props.cards.data.map(card => {
        console.log(card)
        return(
          <Carousel.Item>
            <img src={`/static/cards/${card.fields.img}`} alt={card.fields.name} className='tarot-imgs'/>
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}
