import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CardForm from "../components/CardForm";
import Card from "../components/Card";
import Top from "../components/Top";
import './addcard.css'


function AddCard(props){

    const emptyCard={
        cardNumber: "",
        name: "",
        valid: "",
        ccv: "",
        company: ""
    }


    const [tempCard, setTempCard] = useState(emptyCard);
    const navigate = useNavigate();
    const { setCards } = props;

    function handleSubmit(){
        
        setCards(tempCard)
        navigate('/home')
    }

    
    
    return(
        <section className="addCardContainer">
            <Top addTitle="add a new card" addText="new card"/>
            <Card card={ tempCard }/>           
            <CardForm setCard={ setTempCard }/>
            <button onClick={ handleSubmit } className="addButton">add card</button>

        </section>
    )
}

export default AddCard;