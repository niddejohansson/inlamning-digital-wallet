import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from "../components/Card";
import Top from "../components/Top";
import CardStack from '../components/CardStack';

import './home.css'

function Home(props){
    const navigate = useNavigate();

    const emptyCard={
        cardNumber: "",
        name: "",
        valid: "",
        ccv: "",
        company: ""
    }
 
    const [selectedCard, setSelectedCard] = useState(emptyCard);

    const { cards } = props;

    useEffect(()=> {
            if(cards.length > 0){
            setSelectedCard(cards[0])
        }
    },[cards])

    return(
        <section className='homeContainer'>
            <Top nameTitle="e-wallet" addName="active card"/>
            <Card card={ selectedCard } setCard={ setSelectedCard }/>
            <CardStack cards={ cards } setCard={ setSelectedCard }/>
            <button id='homeButton' onClick={()=> {navigate('/addcard')}}>add a new card</button>
        </section>
    )
}

export default Home;