// import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect } from 'react';


function AllCards() {
        const [cardsList, setCardsList] = useState([]);
        const [pickedCards, setPickedCards] = useState('')

        const [guess, setGuess] = useState("lower");
        
        // code block
    //     const updateCardList = (event) => { 
    //          setCardsList(event.target.value)
    //     }
    // const handleSubmit = (event) => {
    //     event. preventDefault()
    // }
    const updateCardList = (e) => {
        e.preventDefault();
        getCards();
        //  setCardsList((cardsList) => cardsList.slice(0,cardsList.length -1));
        setPickedCards((pickedCards) => [...pickedCards,cardsList[cardsList.length -1]]);
      if (pickedCards < cardsList) {
        console.log("low")
    }else {
        console.log(cardsList)
    }
        setPickedCards((pickedCards) => [...pickedCards,cardsList[cardsList.length -1]]);
    }; 
    const getCards = () => {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`)
        .then((res) => res.json())
        .then(data => setCardsList(data.cards))
        .catch(error => console.log(cardsList));
    }

    useEffect(()=> {
      getCards();
      
 }, []);  

 const displayCards = cardsList.map((card ) => <img src={card.image} />)
 
    return (
        <div className='AllCards'>
    <h1 style={{color: "green"}}>World of Cards !</h1>
    <form onSubmit={updateCardList}>
        <select value={guess} onChange={(e) => setGuess(e.target.value)}>
          <option>lower</option>
          <option>higher</option>
        </select>
        <button type="submit">guess</button>
        <div> YOU Computer </div>
      </form>
     
    {displayCards}
    
    </div>
    );
}
export default AllCards;