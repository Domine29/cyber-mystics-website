import '../pages/Home.css';
import SpreadShuffle from "./SpreadShuffle";
import { Row, Col } from "react-bootstrap";

export default function Readings(props) {

  return (
    <>
      <Row className="readings-row">
        {
          props.isShuffled 
          ? <SpreadShuffle cards={props.cards} isShuffled={props.isShuffled} setIsShuffled={props.setIsShuffled}/> 
          : <></>
        }
           
       
        {/* <Col xs={3}>        future feature for three card spreads
          {isShuffled 
            ? <></>
            : <SelectSpread className="selector-col" setIsShuffled={setIsShuffled}/>}
          
        </Col> */}
      </Row>
    </>
  );
}
