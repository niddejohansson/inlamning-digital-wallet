import bitcoinLogo from '../assets/vendor-bitcoin.svg';
import ninjaLogo from '../assets/vendor-ninja.svg';
import blockLogo from '../assets/vendor-blockchain.svg';
import evilLogo from '../assets/vendor-evil.svg';
import chip from '../assets/chip-light.svg';

function Card(props) {
    const { card, setCard } = props;
    
    var cardLogo;

    const chipImage = chip;
    var cardClass = "card";

    if (card.company === "bitcoin"){
        cardLogo = bitcoinLogo
        cardClass += " bitcoin"

    } else if(card.company === "blockchain"){
        cardLogo = blockLogo
        cardClass += " blockchain"

    } else if(card.company === "ninja") {
        cardLogo = ninjaLogo
        cardClass += " ninja"

    } else if(card.company === "evilcorp"){
        cardLogo = evilLogo
        cardClass += " evilcorp"

    } else if(card.company === ""){
        cardLogo = bitcoinLogo

    }

    function changeCard(){
        setCard(card)
    }

    return(
        <section className={ cardClass } onClick={ changeCard }>
            <img className='cardLogo' src={ cardLogo } alt="logga"/>
            <img className='chipImg' src={ chipImage } alt="chipImg"/>
            <p id="cardNumberText">{ card.cardNumber.length > 0 ? card.cardNumber : "0000 0000 0000 0000" }</p>
            <p id="cardHolderName">CARDHOLDER NAME</p>
            <p id="cardNameText">{ card.name.length > 0 ? card.name : "Firstnamn lastname" }</p>
            <p id="validThru">VALID THRU</p>
            <p id="cardValidText">{ card.valid.length > 0 ? card.valid : "MM/YY" }</p>
        </section>
    
    )
}

export default Card;