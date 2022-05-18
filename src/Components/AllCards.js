import React, { useState, useEffect } from 'react';


function AllCards() {
        const [cardsList, setCardsList] = useState([]);
        const [pickedCards, setPickedCards] = useState('')
    
    useEffect(()=> {
      fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`)
      .then((res) => res.json())
      .then((data) => {
        setCardsList(data.cards);
        setPickedCards(data)
         console.log(data.cards)
  });
 }, []);  
 const displayCards = cardsList.map((card ) => <img src={card.image} />)
 
    return (
        <div className='AllCards'>
    <h1>World of Cards</h1>
    {displayCards}
    {/* <CardGameBoard /> */}
    {/* <EachCard name={pickedCards} addCardToDeck={props.addCardToDeck}/> */}
    </div>
    );
}
export default AllCards;