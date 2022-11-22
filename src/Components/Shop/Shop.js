import { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';
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
            <div class="shopItems">
                { shopItems.map((item) => <ProductCard {...item} />) }
            </div>
        </div>
    )
}

export default Shop;