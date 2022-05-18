import React from "react";


// creating of deck
function CardBody () {
    const {data} = fetch('new/shuffle/', {
        params: {
            deck_count: 1
        }
    });

    const {deck_id: deckId} = data;

    // getting the api/shuffle
    const {data:cardResponse} = fetch(`${deckId}/draw`, {
        params: {
            count: 1
        }
    })
 return {...cardResponse.cards[0], deckId}

//     return (
//         <div>
// <p> hi </p>
//         </div>
//     )
}
export default CardBody;