const DetailsPage = ({ restaurant, backToList }) => {
    const goBack = () => {
        backToList()
    }

    return (
        <div>
            <button onClick={goBack}>go back</button>
            <div>{restaurant.name}</div>
            <div>
                <img className="resturantImage" src={restaurant.image_url} />
            </div>
            <div>{restaurant.phone}</div>
            <div>{restaurant.review_count}</div>
        </div>
    )
}

export default DetailsPage