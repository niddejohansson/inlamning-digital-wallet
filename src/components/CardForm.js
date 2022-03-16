import { useRef } from 'react'
import './CardForm.css';


function CardForm(props){

    const numberEl = useRef(null);
    const nameEl = useRef(null);
    const validEl = useRef(null);
    const ccvEl = useRef(null);
    const companyEl = useRef(null);

    const { setCard } = props;

    function handleCard(){

        const tempCard={
            cardNumber: numberEl.current.value,
            name: nameEl.current.value,
            valid: validEl.current.value,
            ccv: ccvEl.current.value,
            company: companyEl.current.value
        }
        setCard(tempCard)
    }
   
    return(
        <form className='cardForm'>
            <label id="numberText">Card number<br/>
            <input id='numberInput' className="inputField" type='text' ref={ numberEl } maxLength="16" minLength="14" onChange={ handleCard }/>
            </label>
            <label id="nameText">Card holder<br/>
            <input id='nameInput' className="inputField" type='text' ref={ nameEl } onChange={ handleCard }/>
            </label>
            <label id="validText">Valid thru<br/>
            <input id='validInput' type='text' ref={ validEl } className="inputFieldHalfSize" maxLength="5" onChange={ handleCard }/>
            </label>
            <label id="ccvText">CCV<br/>
            <input id='ccvInput'type='text' ref={ ccvEl } className="inputFieldHalfSize" maxLength="3" onChange={ handleCard }/>
            </label>
            <label id="vendorText">Vendor<br/>
            <select id='companyDropdown' className="inputField" ref={ companyEl } onChange={ handleCard }>
                <option value=""></option>
                <option value="bitcoin">Bitcoin inc</option>
                <option value="ninja">Ninja bank</option>
                <option value="blockchain">Block chain inc</option>
                <option value="evilcorp">Evil corp</option>
            </select>
            </label>
        </form>
    )
}

export default CardForm;