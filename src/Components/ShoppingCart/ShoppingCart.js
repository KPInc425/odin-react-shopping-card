import { useState } from "react";
import CartItem from "./CartItem/CartItems";

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
                <p className="totalItems">Total Items: { getTotalItems() }</p>
                <p className="totalPrice">Total Price: ${ getTotalPrice().toFixed(2) }</p>
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