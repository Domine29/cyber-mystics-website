import React from 'react'

export default function AllCards(props) {
  return (
    <>
      
      <img src={`/static/cards/${props.cards.data[0].fields.img}`} />;
    </>
  )
}