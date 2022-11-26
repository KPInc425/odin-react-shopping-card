import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import './Shop.css';

const Shop = () => {
    useEffect(() => {
        fetchShopItems();
    }, []);

    const [shopItems, setShopItems] = useState([]);
    const [itemsInCart, setItemsInCart] = useState([]);
    const [isCartExpanded, setIsCartExpanded] = useState(0);

    const addItemToCart = (item) => {
        const copyItemsInCart = [...itemsInCart];
        const itemFound = findItemInCart(copyItemsInCart, item);

        if (itemFound) {
            itemFound.amt = itemFound.amt + item.amt;
            copyItemsInCart.filter((item) => item.title === itemFound.title);
            setItemsInCart(copyItemsInCart);
        } else {
            setItemsInCart([...itemsInCart, item])
        }
    }

    const findItemInCart = (items, itemToFind) => {
        const foundItem = items.find((item, index) => item.title === itemToFind.title);
        if (foundItem) {
            return foundItem;
        } else {
            return null;
        }
    }

    const changeCartExpansion = () => {
        setIsCartExpanded(!isCartExpanded);
    }

    const fetchShopItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const shopItems = await data.json();
        // console.log(shopItems);
        await setShopItems(shopItems);
    }

    return (
        <div className="shop">
            <h1>Shop Page</h1>
            <ShoppingCart 
            expandedCart={ isCartExpanded } 
            changeCartExpansion={ changeCartExpansion }
            itemsInCart={ itemsInCart }
            />
            <div className="shopItems">
                { shopItems.map((item) => {
                return <ProductCard 
                        key={item.id} 
                        {...item} 
                        addItemToCart={ addItemToCart } 
                        />
                }) 
                }
            </div>
        </div>
    )
}

export default Shop;