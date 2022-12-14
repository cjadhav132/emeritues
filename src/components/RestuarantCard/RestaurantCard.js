import './restaurantCard.css'
import Ratings from '../Ratings/Ratings'

const RestaurantCard = ({ restaurant, showDetails }) => {
    const handleShowDetails = () => {
        showDetails(restaurant)
    }

    return (
        <div className='restaurantContainer row'>
            <div className='col-12'>
                <img className="resturantImage" src={restaurant.image_url}  alt=''/>
            </div>
            <div className='col-12 name'>
                <div>{restaurant.name}</div>
            </div>
            <div className='col-6 centerContent'>
                <Ratings rating={restaurant.rating} />
                <div>{restaurant.price ? restaurant.price : "--"}</div>
            </div>
            <div className='centerContent col-6' >
                <button className='btn btn-outline-primary' style={{ height: 'fitContent' }} onClick={handleShowDetails}>
                    Click to see details
                </button>
            </div>
        </div>
    )
}

export default RestaurantCard