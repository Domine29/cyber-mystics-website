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
    <div className="spread-note-wrapper">
      
      {props.spreadData && 
        <div className="spread-note-container">
          <div className="your-card">
          <h3 className="daily-tarot-subtitles">your card</h3>
          <img
            src={`/static/cards/${props.spreadData.img}`}
            alt={props.spreadData.tarot_name}
            className={props.spreadData.reverse ? "reversed" : "upright"}
          />
          </div>
          <div className="your-guidance">
          <h3 className="daily-tarot-subtitles">your guidance</h3>
          <SpreadGuidance
            spreadData={props.spreadData}
            handleClick={props.handleClick}
          />
          </div>

          <div className="your-notes">
            <h3 className="daily-tarot-subtitles">your notes</h3>
            <NoteForm spreadData={props.spreadData} />
          </div>
      </div>
      }
      
      {props.isNotesPage && <Pagination className="notes-pages">{pageItems()}</Pagination>}
    </div>
  );
}
