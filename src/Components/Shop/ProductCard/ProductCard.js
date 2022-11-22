const ProductCard = (props) => {
    // console.log(props);
    return (
        <div className='productCard'>
            <h3>{ props.title || "Title" }</h3>
            <img src={ props.img } alt='' />
            <p className="price"> { props.price || "Price" } </p>
            <p> { props.description || "Description" } </p>
            <p> { props.category || "Category" } </p>
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