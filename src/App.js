import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import AllCards from './Components/AllCards';
import CardBody from './Components/CardBody';
import { useState } from "react"

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
      <nav>
   <Link to="/">Card Sorter
    </Link>
   <Link to="/CardBody">Card Body
   </Link>
   </nav>
   

        <Routes>
          <Route exact path='/' element={<AllCards />} />
          <Route exact path='/CardBody' element={<CardBody />} />
          {/* <Route exact path='/about1' element={<CardSorter />} />
          <Route exact path='/about2' element={<CardBody />} /> */}
        </Routes>
   
    </div>
  );
}

export default App;
