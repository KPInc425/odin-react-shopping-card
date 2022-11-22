const ProductCard = (props) => {
    return (
        <div className='productCard'>
            <h3>{ props.title || "Title" }</h3>
            <img src={ props.image } alt='' />
            <h5 className="price"> Price: ${ props.price || "Price" } </h5>
            <p> Description: { props.description || "Description" } </p>
            <p> Category: { props.category || "Category" } </p>
            <Rating rate={ props.rating.rate } count={ props.rating.count } />
        </div>
    )
}


const Rating = ({ rate, count }) => {
    return (
        <div className="rating">
            <p>Rate: { rate }</p>
            <p>Count: { count }</p>
        </div>
    )
}

export default ProductCard;