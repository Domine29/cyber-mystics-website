import _ from "lodash";
import { CSSTransition } from "react-transition-group";

export default function SpreadShuffle(props) {
  const shuffledItems = _.shuffle(props.cards.data);
  const cards = document.querySelectorAll(".tarot-shuffle");
  // const [isHover, isSetHover] = useState(0); need to figure a way to give the user feedback on which card their mouse is on and which ones they have selected.x

  async function handleOnClick(e) {
    const card = e.target.alt
    res = axios.post('api/reading', {"card": card})
  }

  return (
    <>
      <br />
      <CSSTransition
        in={true}
        timeout={1000}
        classNames="card-shuffle"
        unmountOnExit
      >
        <div className="cards-container">
          {props.cards &&
            shuffledItems.map((card, index) => {
              
              return (
                    <img
                      src="/static/images/tarot_back.png"
                      alt={card.fields.name}
                      onClick={handleOnClick}
                      className="tarot-shuffle"
                      style={{ transform: `translateX(${index * props.isShuffled}px)` }}
                    />
              );
            })}
        </div>
      </CSSTransition>
    </>
  );
}
