import { useEffect, useState } from 'react';
import RestaurantCard from '../RestuarantCard/RestaurantCard';
import './RestaurantsList.css'

const RestaurantsList = ({ businesses, showDetails }) => {

    const [filterValue, setFilterValue] = useState('')
    const [restaurants, setRestaurants] = useState(businesses)

    useEffect(() => { setRestaurants(businesses) }, [businesses])

    const filterRestaurants = (e) => {
        const value = e.target.value
        console.log(value)
        const compareVal = value.toLowerCase()
        if (value.length === 0) {
            setRestaurants(businesses)
        }
        else {
            const temp = businesses.filter((res) => {
                return compareVal === res.name.slice(0, value.length).toLowerCase()
            })
            setRestaurants(temp)
        }
        setFilterValue(value)
    }
    return (
        <div>
            <div className='searchLabel'>
                <input placeholder='Search' value={filterValue} onChange={filterRestaurants} />
            </div>

            <div className='row listContainer'>
                {restaurants.map((business) => {
                    return (
                        <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12' key={business.id}>
                            <RestaurantCard restaurant={business} showDetails={showDetails} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RestaurantsList