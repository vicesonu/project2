import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import AllCards from './Components/AllCards';
import CardBody from './Components/CardBody';

function App() {
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
