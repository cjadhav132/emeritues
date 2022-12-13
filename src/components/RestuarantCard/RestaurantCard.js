import './restaurantCard.css'

const RestaurantCard = ({ restaurant, showDetails }) => {
    const handleShowDetails = () => {
        showDetails(restaurant)
    }

    return (
        <div className='restaurantContainer'>
            <div>
                <img className="resturantImage" src={restaurant.image_url} />
            </div>
            <div>{restaurant.name}</div>
            <div>{restaurant.rating}</div>
            <div>{restaurant.is_closed ? "yes" : "no"}</div>
            <div>{restaurant.price ? restaurant.price : "--"}</div>
            <div className='detailsButton'>
                <button onClick={handleShowDetails}>
                    Click to see details
                </button>
            </div>
        </div>
    )
}

export default RestaurantCard