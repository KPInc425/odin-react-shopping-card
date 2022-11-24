

const CartItem = ({ title, amt, price }) => {
    const totalPrice = (amt * price);
    return (
        <div className="cartItem">
            <p> Title: { title } </p>
            <p> Amt: { amt } </p>
            <p> Price: { price.toFixed(2) } </p>
            <p> Total: { totalPrice.toFixed(2) } </p>
        </div>
    )
}

export default CartItem;