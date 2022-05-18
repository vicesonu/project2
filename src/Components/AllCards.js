import React, { useState, useEffect } from 'react';



function AllCards(props) {
        const [cardsList, setCardsList] = useState(null);
        const [pickedCards, setPickedCards] = useState('')
    
    useEffect(()=> {
      fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`)
      .then((res) => res.json())
      .then((data) => {
        setCardsList(data.results);
         setPickedCards(data)
         console.log(data.cards[0].images)

  });
 }, []);  

 const handleCardClick = (name) => {
    setPickedCards(name);
  }
  let cardsListHtml
 if (cardsList != null){
    cardsListHtml = cardsList.map((card) => {
        return <p onClick={() => {handleCardClick(card.name)}}>{card.name}</p>;
       }); 
 }

//   const cardsListHtml = cardsList.map((card) => {
//         return <p onClick={() => {handleCardClick(card.name)}}>{card.name}</p>;
//        });
    
    return (
        <div className='AllCards'>
    <h1>World of Cards</h1>
    {cardsListHtml}
    {/* <CardGameBoard /> */}
    {/* <EachCard name={pickedCards} addCardToDeck={props.addCardToDeck}/> */}
    </div>
    );
}
export default AllCards;