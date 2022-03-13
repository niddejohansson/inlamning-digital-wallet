import Card from "./Card";

function CardStack(props){

    const { cards, setCard } = props;

    const cardComponent = cards.map((card, index) =>{
        return <Card card={ card } key={ index } setCard={setCard} />
    })

    return(
        <section className="cardStack">
            { cardComponent }
        </section>
    )
}

export default CardStack;