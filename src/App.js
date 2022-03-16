import './App.css';


import AddCard from '../src/views/AddCard'
import Home from './views/Home';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {

  const [cards, setCards] = useState([])


//Här nedanför är början på VG-uppgiften, men jag fick det inte att fungera. Sakerna hamnade i localstorage,
//men av någon anledning försvann det vid sidladdning ändå.
/*   useEffect(() =>{
    console.log(cards)
    localStorage.setItem('card', JSON.stringify(cards))
  },[cards])

  useEffect(()=> {
    let allCards = JSON.parse(localStorage.getItem('card'));
    console.log(allCards)

        if (allCards.length < 0) {
            setCards(allCards)
        }
},[]) */


  function addNewCard(card){
    setCards((oldCards) => {
      oldCards.push(card)
      return oldCards;
    })
  }


  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={ <Home cards={ cards } setCards={ setCards }/>}/>
        <Route path='/addcard' element={ <AddCard setCards={ addNewCard }/>}/>
      </Routes>
    </div>
  );
}

export default App;
