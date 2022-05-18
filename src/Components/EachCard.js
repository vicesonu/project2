import { useEffect, useState } from "react";

function EachCard(props) {
const [card, setCard] = useState({});

useEffect(() => {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`)
        .then((res) => res.json())
        .then((data) => {
          setCard(data);
        });
      }, [props.name]);

      let cardDetailHtml = "";
        if (card.name) {
          cardDetailHtml = (
            <div>
              <h3>{card.name}</h3>
              <button onClick={() => props.addCardToDeck(card)}>Add card to deck</button>
            </div>
          );
        }

    return (
        <div className="EachCard">
  <h1> Shuffle </h1>
  {cardDetailHtml}
        </div>
    )
}
export default EachCard;