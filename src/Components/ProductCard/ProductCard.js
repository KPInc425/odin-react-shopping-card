import AmountInput from "./AmountInput/AmountInput"
import Rating from "./Rating/Rating";

const ProductCard = (props) => {
    return (
        <div className='productCard'>
            <h3>{ props.title || "Title" }</h3>
            <img src={ props.image } alt='' />
            <h5 className="price"> Price: ${ props.price.toFixed(2) || "Price" } </h5>
            <Rating rate={ props.rating.rate } count={ props.rating.count } />
            <p> Category: { props.category || "Category" } </p>
            <p> Description: { props.description || "Description" } </p>
            <AmountInput 
                addItemToCart={ props.addItemToCart }
                itemTitle={ props.title }
                itemPrice={ props.price }
                itemID={ props.id }    
            />
        </div>
    )
}






export default ProductCard;