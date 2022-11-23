import { useState } from "react"

const ProductCard = (props) => {
    return (
        <div className='productCard'>
            <h3>{ props.title || "Title" }</h3>
            <img src={ props.image } alt='' />
            <h5 className="price"> Price: ${ props.price || "Price" } </h5>
            <Rating rate={ props.rating.rate } count={ props.rating.count } />
            <p> Category: { props.category || "Category" } </p>
            <p> Description: { props.description || "Description" } </p>
            <AmountInput />
        </div>
    )
}


const Rating = ({ rate, count }) => {
    return (
        <div className="rating">
            <p>Rate: { rate }</p>
            <p>Count: { count }</p>
        </div>
    )
}

const AmountInput = () => {
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
        console.log(e.target.value);
        if (e.target.value > 0) {
            setAmt(Number(e.target.value));
        }
    }

    

    return (
        <div>
            <button onClick={ decrementAmt } >-</button>
            <button onClick={ incrementAmt } >+</button>
            <input type="text" onChange={ handleChange }/>
            <label>Amt: { amt }</label>
            <button>Add to Cart</button>
        </div>
    )
}

export default ProductCard;