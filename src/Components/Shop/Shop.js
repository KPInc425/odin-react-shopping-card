import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import './Shop.css';

const Shop = () => {
    useEffect(() => {
        fetchShopItems();
    }, []);

    const [shopItems, setShopItems] = useState([]);

    const fetchShopItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const shopItems = await data.json();
        console.log(shopItems);
        await setShopItems(shopItems);
    }

    return (
        <div className="shop">
            <h1>Shop Page</h1>
            <ShoppingCart expandedCart={ true }/>

            <div className="shopItems">
                { shopItems.map((item) => <ProductCard key={item.id} {...item} />) }
            </div>
        </div>
    )
}

export default Shop;