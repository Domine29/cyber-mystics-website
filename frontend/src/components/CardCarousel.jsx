import React from "react";
import { Carousel } from "react-bootstrap";
import '../pages/Home.css'
import _ from 'lodash';

export default function CardCarousel(props) {
  const shuffledItems = _.shuffle(props.cards.data);

  return (
    <Carousel
      interval={3000}
      pause={false}
      controls={false}
      fade={true}
      indicators={false}
      className="card-carousel"
    >
      {props.cards && shuffledItems.map(card => {
        return(
          <Carousel.Item>
            <img src={`/static/cards/${card.fields.img}`} alt={card.fields.name} className='tarot-imgs'/>
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}
