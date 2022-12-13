import RestaurantCard from '../RestuarantCard/RestaurantCard';

const RestaurantsList = ({ businesses, showDetails }) => {
    return (
        <div className='row'>
            {businesses.map((business) => {
                return (
                    <div className='col-lg-3 col-md-6' key={business.id}>
                        <RestaurantCard restaurant={business} showDetails={showDetails} />
                    </div>
                )
            })}
        </div>
    )
}

export default RestaurantsList