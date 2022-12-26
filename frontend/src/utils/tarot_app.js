import axios from 'axios'

export async function getAllCards(response) {
  const cards = await axios.get('api/')
  return cards 
}

export async function getAllUserNotes(response) {
  const cards = await axios.get('api/notes')
  return cards 
}