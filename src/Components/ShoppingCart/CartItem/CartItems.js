

const CartItem = ({ title, amt, price }) => {
    const totalPrice = (amt * price);
    return (
        <div className="cartItem">
            <p> { title } </p>
            <p> { amt } </p>
            <p> ${ price.toFixed(2) } </p>
            <p> ${ totalPrice.toFixed(2) } </p>
        </div>
    )
}

export default CartItem;