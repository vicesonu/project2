// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import AllCards from './Components/AllCards';
import CardBody from './Components/CardBody';
// import { useState } from "react"
import EachCard from './Components/EachCard';
import React, {useEffect, useState } from "react";
import About from './Components/About';


function App() {
  const [bunchOfCards, setBunchOfCards] = useState([]);

  const addCards = (card) => {
    console.log(card);

    setBunchOfCards([...bunchOfCards, card]);
     };

     const removeCardFromDeck = (indexToRemove) => {
        console.log(indexToRemove);
    
        let newCard = bunchOfCards.filter((rank, index) => {
             return index !== indexToRemove
    })
    setBunchOfCards(newCard)

  }

  console.log(bunchOfCards);
  return (
    <div className="App">
      <nav className='Top'>
   <Link className="links"to="/">Game
    </Link>

   <Link className="links"to="/CardBody">Card Body
   </Link>
   <Link className="links"to="/About">About
   </Link>
   </nav>

        <Routes>
          <Route exact path='/' element={<AllCards />} />
          <Route exact path='/CardBody' element={<CardBody />} />
          <Route exact path='/About' element={<About />} />
          {/* <Route exact path='/about1' element={<CardSorter />} />
          <Route exact path='/about2' element={<CardBody />} /> */}
        </Routes>
   
    </div>
  );
}
export default App;



