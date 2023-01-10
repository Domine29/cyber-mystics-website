import '../pages/Home.css';
import SpreadShuffle from "./SpreadShuffle";

export default function Readings(props) {

  return (
    <>
        {<SpreadShuffle cards={props.cards} user={props.user} setSpreadData={props.setSpreadData}/> 
        }
           
       
        {/* <Col xs={3}>        future feature for three card spreads
          {isShuffled 
            ? <></>
            : <SelectSpread className="selector-col" setIsShuffled={setIsShuffled}/>}
          
        </Col> */}
    </>
  );
}
