import './App.css';
import '../src/components/card.css';
import '../src/components/cardform.css';
import '../src/components/cardstack.css';

import AddCard from '../src/views/AddCard'
import Home from './views/Home';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [cards, setCards] = useState([])

  function addNewCard(card){
    setCards((oldCards) => {
      oldCards.push(card)
      return oldCards;
    })
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={ <Home cards={cards}/>}/>
        <Route path='/addcard' element={ <AddCard setCards={addNewCard}/>}/>
      </Routes>
    </div>
  );
}

export default App;
