import AmountInput from "./AmountInput/AmountInput"
import Rating from "./Rating/Rating";
import './ProductCard.css';

const ProductCard = (props) => {
    return (
        <div className='productCard'>
            <h4 className="productTitle">
                { props.title || "Title" } 
                <span className="toolTipText titleToolTip"> { props.title }</span>
            </h4>
            <img src={ props.image } alt='' />
            <h5 className="price"> Price: ${ props.price.toFixed(2) || "Price" } </h5>
            <Rating rate={ props.rating.rate } count={ props.rating.count } />
            <p className="descriptionText"> 
                Description: { props.description || "Description" } 
                <span className="toolTipText fullDescriptionToolTip"> { props.description }</span>
            </p>
            <p className="category"> Category: { props.category || "Category" } </p>
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