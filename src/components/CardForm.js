function CardForm(props){

    const { setCard } = props;

    function handleCard(){
        const tempCard={
            cardNumber: document.getElementById('numberInput').value,
            name: document.getElementById('nameInput').value,
            valid: document.getElementById('validInput').value,
            ccv: document.getElementById('ccvInput').value,
            company: document.getElementById('companyDropdown').value
        }
        setCard(tempCard)
    }
   
    return(
        <form className='cardForm'>
            <label id="numberText">Card number<br/>
            <input id='numberInput' className="inputField" type='text' onChange={ handleCard }/>
            </label>
            <label id="nameText">Card holder<br/>
            <input id='nameInput' className="inputField" type='text' onChange={ handleCard }/>
            </label>
            <label id="validText">Valid thru<br/>
            <input id='validInput' type='text' className="inputFieldHalfSize" onChange={ handleCard }/>
            </label>
            <label id="ccvText">CCV<br/>
            <input id='ccvInput'type='text' className="inputFieldHalfSize" onChange={ handleCard }/>
            </label>
            <label id="vendorText">Vendor<br/>
            <select id='companyDropdown' className="inputField" onChange={ handleCard }>
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