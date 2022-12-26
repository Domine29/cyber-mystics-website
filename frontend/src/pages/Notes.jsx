import { getAllUserNotes } from "../utils/tarot_app";
import Pagination from 'react-bootstrap/Pagination';
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const notes = await getAllUserNotes();
  return { notes };
}

export default function NotesPage() {
  const { notes } = useLoaderData();
  console.log(notes)

  return (
    <div>
       {/* <Pagination size="lg">{items}</Pagination> */}
    </div>
  )
}
