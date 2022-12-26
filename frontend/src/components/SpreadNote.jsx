import NoteForm from "./NoteForm";
import SpreadGuidance from "./SpreadGuidance";
import Pagination from "react-bootstrap/Pagination";

export default function SpreadNote(props) {
  
  const pageItems = () => {
    let active = props.currentNote;
    let items = [];
    for (let n = 0; n < props.spreadData.number_of_notes; n++) {
      items.push(
        <Pagination.Item key={n} active={n === active} onClick={() => props.setCurrentNote(n)}>
          {n+1}
        </Pagination.Item>
      );
    }
    return items
  };

  return (
    <div>
      {props.spreadData && 
        <div className="spread-note-container">
        <img
          src={`/static/cards/${props.spreadData.img}`}
          alt={props.spreadData.tarot_name}
          className={props.spreadData.reverse ? "reversed" : "upright"}
        />
        <div className="note-content">
          <SpreadGuidance
            spreadData={props.spreadData}
            handleClick={props.handleClick}
          />
        </div>

        <div className="vertical-line" />

        <div className="note-content">
          <NoteForm spreadData={props.spreadData} />
        </div>
      </div>
      }
      
      {props.isNotesPage && <Pagination className="notes-pages">{pageItems()}</Pagination>}
    </div>
  );
}
