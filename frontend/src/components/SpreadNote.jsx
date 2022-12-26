import NoteForm from "./NoteForm";
import SpreadGuidance from "./SpreadGuidance";

export default function SpreadNote(props) {
  
  return (
    <div className="spread-note-container">
      <img
        src={`/static/cards/${props.spreadData.img}`}
        alt={props.spreadData.tarot_name}
        className={props.spreadData.reverse ? 'reversed' : 'upright'}
      />
      <div className='note-content'>
        <SpreadGuidance spreadData={props.spreadData}/>
      </div>
    
      <div className="vertical-line"/>

      <div className="note-content"> 
        <NoteForm spreadData={props.spreadData} />
      </div>
      
    </div>
  );
}
