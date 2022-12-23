import '../pages/Home.css';
import SpreadShuffle from "./SpreadShuffle";
import { Row, Col } from "react-bootstrap";

export default function Readings(props) {

  return (
    <>
        {
          props.isShuffled 
          ? <SpreadShuffle cards={props.cards} isShuffled={props.isShuffled} setIsShuffled={props.setIsShuffled} user={props.user}/> 
          : <></>
        }
           
       
        {/* <Col xs={3}>        future feature for three card spreads
          {isShuffled 
            ? <></>
            : <SelectSpread className="selector-col" setIsShuffled={setIsShuffled}/>}
          
        </Col> */}
    </>
  );
}
