import React from "react";

function CardBody() {
    let rnd = Math.round(Math.random() * 52);
    if(this.state.CardsDeck[rnd] != 0){
      this.state.CardsDeck[rnd] = 0;
      return rnd;
    }

    // To get a Card
    for(let count = rnd + 1; count < 52; count ++){
      if(this.state.CardsDeck[count] != 0){
        this.state.CardsDeck[count] = 0;
        return count;
      }
    }
    // next card
    for(let count = rnd - 1; count >= 0; count --){
      if(this.state.CardsDeck[count] != 0){
        this.state.CardsDeck[count] = 0;
        return count;
      }
    }
    // no cards in deck!
    return - 1;
  }

  export default CardBody;






// creating of deck
// function CardBody () {
//     const {data} = fetch('new/shuffle/', {
//         params: {
//             deck_count: 1
//         }
//     });

//     const {deck_id: deckId} = data;

//     // getting the api/shuffle
//     const {data:cardResponse} = fetch(`${deckId}/draw`, {
//         params: {
//             count: 1
//         }
//     })
//  return {...cardResponse.cards[0], deckId}

// //     return (
// //         <div>
// // <p> hi </p>
// //         </div>
// //     )
// }
// export default CardBody;