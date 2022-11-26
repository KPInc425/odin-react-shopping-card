import CartItem from "./CartItem/CartItems";
import './ShoppingCart.css';

const ShoppingCart = ({ expandedCart, changeCartExpansion, itemsInCart }) => {

    const getTotalPrice = () => {
        const allPrices = itemsInCart.map((item) => item.price * item.amt);
        console.log(allPrices);
        const totalPrice = allPrices.reduce((a, b) => a + b, 0);
        console.log(totalPrice);

        return totalPrice;
    }

    const getTotalItems = () => {
        const allAmounts = itemsInCart.map((item) => item.amt);
        const totalAmount = allAmounts.reduce((a, b) => a + b, 0);

        return totalAmount;
    }

    const handleExpansionClick = () => {
        changeCartExpansion();
    }

    if (expandedCart) {
        return (
            <div className="shoppingCartExpanded">
                <h2>Shopping Cart</h2>
                <div className="cartItemsContainer">
                    <div className="cartItem">
                        <h6>Item</h6>
                        <h6>Amount</h6>
                        <h6>Price</h6>
                        <h6>Total</h6>
                    </div>
                    { 
                    itemsInCart.map((item) => {
                        return (
                            <CartItem
                                key={ item.id }
                                { ...item } 
                            />
                        )})
                    }    
                </div>
                <div class="totals">
                    <p className="totalItems">Total Items: { getTotalItems() }</p>
                    <p className="totalPrice">Total Price: ${ getTotalPrice().toFixed(2) }</p>
                </div>
                <div className="cartBtns">
                    <button>Checkout</button>
                    <button onClick={ handleExpansionClick } >Cancel</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="shoppingCartMin">
                <h3>Shopping Cart</h3>
                <p>Total Items: { getTotalItems() }</p>
                <p>Total Price: ${ getTotalPrice().toFixed(2) }</p>
                <button onClick={ handleExpansionClick } >Go To Cart</button>
            </div>
        )
    }
}



export default ShoppingCart;