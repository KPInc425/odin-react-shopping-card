import { useState } from "react";

const AmountInput = ({ addItemToCart, itemTitle, itemPrice, itemID }) => {
    const [amt, setAmt] = useState(0);

    const incrementAmt = () => {
        setAmt((amt + 1));
    }

    const decrementAmt = () => {
        if (amt <= 0) {
            setAmt(0);
        } else {
            setAmt((amt - 1));
        }
    }

    const handleChange = (e) => {
        // console.log(e.target.value);
        if (Number(e.target.value) > 0) {
            setAmt(Number(e.target.value));
        }
    }

    const handleClick = (e) => {
        if (amt > 0) {
            const newItem = {
                title: itemTitle,
                amt: amt,
                price: itemPrice,
                id: itemID
            }
            let amtInput = e.target.parentNode.firstChild;
            amtInput.value = "";
            setAmt(0);
            addItemToCart(newItem);
        }
    }

    return (
        <div className="amtInput">
            <input type="text" onChange={ handleChange } placeholder={ 0 } />
            <button onClick={ decrementAmt } >-</button>
            <label>Amt: { amt }</label>
            <button onClick={ incrementAmt } >+</button>
            <button onClick={ handleClick } >Add to Cart</button>
        </div>
    )
}

export default AmountInput;