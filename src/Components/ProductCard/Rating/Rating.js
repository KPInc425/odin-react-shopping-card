const Rating = ({ rate, count }) => {
    return (
        <div className="rating">
            <p>Rate: { rate }</p>
            <p>Count: { count }</p>
        </div>
    )
}

export default Rating;