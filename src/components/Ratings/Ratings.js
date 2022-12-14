import star from './imgs/star.png'
import './Ratings.css'

const Ratings = ({ rating }) => {
    const getRatingColor = () => {
        if (rating >= 4.5) {
            return "veryGood"
        }
        if (rating >= 4) {
            return "good"
        }
        if (rating >= 3) {
            return "avg"
        }
        return "bad"
    }
    return (
        <div className={`mainCotainer ${getRatingColor()}`} >
            <img src={star} className="ratingsImg" alt=''/>
            <div className='ratingsLabel'>{rating}</div>
        </div>
    )
}

export default Ratings