//Loopa ut alla kort med en map, tex allCards.map((card) =>)
import { useNavigate } from "react-router-dom";

import Card from "./Card";

function CardStack(props){

    const { cards, setCard } = props;
    const navigate = useNavigate();

    const cardComponent = cards.map((card, index) =>{
        return <Card card={ card } key={ index } setCard={setCard} />
    })

    if(cardComponent.length > 4){
        console.log("DU HAR FÖR MÅNGA KORT")
    }

    return(
        <section className="cardStack">
            { cardComponent }
        </section>
    )
}

export default CardStack;