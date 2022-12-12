import React from 'react'
import AllCards from '../components/AllCards';
import { getAllCards } from '../utils/tarot_app';
import { useLoaderData } from 'react-router-dom'
import CardCarousel from '../components/CardCarousel';

export async function loader() {
  const cards = await getAllCards();
  return {cards}
}

export default function HomePage() {
  const { cards } = useLoaderData()

  return (
    <div>
      <br/>
      <CardCarousel cards={cards}/>
    </div>
  )
}

