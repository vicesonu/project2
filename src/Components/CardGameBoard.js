import { render } from "@testing-library/react";
import React from "react";
import {createDeckAndDraw} from './api';


function CardGameBoard () {

    state = {
    cardImageUrl: null,
    cardaValue : null,
    deckId : null
    }
  
function componentDidMount() {
const {deckId, value, image} = createDeckAndDraw();
 this.setState({
     deckId,
     cardaValue: value,
     cardImageUrl: image
 })

}

render() 
    return (
        <div>
            <img src={this.state.cardImageUrl} alt="your card"/>
        </div>
    )
 }

 export default CardGameBoard;



