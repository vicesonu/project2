// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import AllCards from './Components/AllCards';
import CardBody from './Components/CardBody';
// import { useState } from "react"
import EachCard from './Components/EachCard';
import React, {useEffect, useState } from "react";



const suits = ["diamonds", "clubs", "hearts", "spades"];
const values = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10];
const initCards = [];
for (const s of suits) {
  for (const v of values) {
    initCards.push(`${s}_${v}`);
  }
}







     // Another
  
// function App() {
//   const [bunchOfCards, setBunchOfCards] = useState([]);

//   const addCards = (card) => {
//     console.log(card);

//     setBunchOfCards([...bunchOfCards, card]);
//      };

//      const removeCardFromDeck = (indexToRemove) => {
//         console.log(indexToRemove);
    
//         let newCard = bunchOfCards.filter((rank, index) => {
//              return index !== indexToRemove
//     })
//     setBunchOfCards(newCard)

//   }

//   console.log(bunchOfCards);
//   return (
//     <div className="App">
//       <nav>
//    <Link to="/">Card Sorter
//     </Link>
//    <Link to="/CardBody">Card Body
//    </Link>
//    </nav>
   

//         <Routes>
//           <Route exact path='/' element={<AllCards />} />
//           <Route exact path='/CardBody' element={<CardBody />} />
//           {/* <Route exact path='/about1' element={<CardSorter />} />
//           <Route exact path='/about2' element={<CardBody />} /> */}
//         </Routes>
   
//     </div>
//   );
// }

