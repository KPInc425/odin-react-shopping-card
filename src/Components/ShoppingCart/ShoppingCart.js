import { useEffect, useState } from "react";

const ShoppingCart = ({ expandedCart }) => {
    const [itemsInCart, setItemsInCart] = useState([
        {
            title: "title",
            amt: 5,
            price: 14.99,
        }
    ]);

    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0.00);

    const addToTotalItems = (itemAmtToAdd) => {
        setTotalItems((totalItems + itemAmtToAdd));
    }

    const addToTotalPrice = (priceToAdd) => {
        setTotalPrice((totalPrice + priceToAdd));
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
                                props={item} 
                                addToTotalItems={ addToTotalItems } 
                                addToTotalPrice={ addToTotalPrice }
                            />
                        )})
                    }    
                </div>
                <p className="totalItems">Total Items: { totalItems }</p>
                <p className="totalPrice">Total Price: ${ totalPrice }</p>
                <div className="cartBtns">
                    <button>Checkout</button>
                    <button>Cancel</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="shoppingCartMin">
                <h3>Shopping Cart</h3>
                <p>Total Items: { "Total" }</p>
                <p>Total Price: ${ "Price" }</p>
                <button cla>Go To Cart</button>
            </div>
        )
    }
}

const CartItem = ({ props, addToTotalItems, addToTotalPrice }) => {
    const totalPrice = (props.amt * props.price);
    useEffect(() => {
        addToTotalItems(props.amt);
        addToTotalPrice(totalPrice);
    }, []);



    return (
        <div className="cartItem">
            <p> Title: { props.title } </p>
            <p> Amt: { props.amt } </p>
            <p> Price: { props.price } </p>
            <p> Total: { totalPrice } </p>
        </div>
    )
}

export default ShoppingCart;