import './DetailsPage.css'
import phone from './imgs/phoneCall.png'
import loc from './imgs/location.png'
import Ratings from '../Ratings/Ratings'
const DetailsPage = ({ restaurant, backToList }) => {
    const goBack = () => {
        backToList()
    }



    const address2 = restaurant.location.address2 ? restaurant.location.address2 + ', ' : ''
    const address3 = restaurant.location.address3 ? restaurant.location.address3 + ', ' : ''
    const address = restaurant.location.address1 + ', ' + address2 + address3 + restaurant.location.city

    return (
        <div>
            <button onClick={goBack}>go back</button>
            <div className='mainContentDiv'>
                <div >
                    <img className="resturantImage detailImg" src={restaurant.image_url} alt='' />
                </div>
                <div className='detailContainer'>
                    <div className='RestuarantName'>{restaurant.name}</div>
                    <div className='phoneContainer' >
                        <img src={phone} className="phoneImg" alt='' />
                        <div>{restaurant.phone}</div>
                    </div>
                    <div className='phoneContainer' >
                        <img src={loc} className="phoneImg" alt='' />
                        <div>{address}</div>
                    </div>
                    <div style={{ marginLeft: '8px' }} >reviews: {restaurant.review_count}</div>
                    <div className='detailRating'>
                        <Ratings rating={restaurant.rating} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage