import './App.css';
import { useEffect, useState } from 'react'
import RestaurantsList from './components/RestaurantsList/RestaurantsList';
import DetailsPage from './components/DetailsPage/DetailsPage';

function App() {

  const [businesses, setBusinesses] = useState([])
  const [selectedRestaurant, setSelectedRestaurant] = useState({})
  const [showDetails, setShowDetails] = useState(false)
  const [latitude, setLatitude] = useState("39.162811")
  const [longitude, setLongitude] = useState("-86.505434")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("Started")
    // const apiUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=37.786882&longitude=-122.399972"
    findRestaurant()
  }, [])

  const handleDetais = (value) => {
    setSelectedRestaurant(value)
    setShowDetails(true)
  }

  const goBack = () => {
    setSelectedRestaurant({})
    setShowDetails(false)
  }

  const handleLon = (e) => {
    setLongitude(e.target.value)
  }

  const handleLat = (e) => {
    setLatitude(e.target.value)
  }

  const findRestaurant = () => {
    setLoading(true)

    const subApiUrl = "/v3/businesses/search?term=restaurants"
    const latitudeParams = "&latitude=" + latitude
    const longitudeParams = "&longitude=" + longitude
    // 39°10'36.4"N 86°32'45.3"W
    const headers = {
      method: 'GET',
      headers: {
        Accept: "application/json",
        Authorization: "Bearer 3PW75iXnNgFsSrArLrQrtC5SHnilq7lNSVJ4LL-TSFiy19LLZJWh7zFv6F-_W9d9drKzoymoBSMQeVadhbcBA2cWWpfzQQCdmc0OIAEdZ1Pq1fjFFbTVxgK6L-YrY3Yx",
      }
    }
    fetch(subApiUrl + latitudeParams + longitudeParams, headers).then((response) => {
      return response.json()
    }).then((data) => {
      setBusinesses(data.businesses)
      setLoading(false)
      goBack()
    })
  }

  return (
    <div className="App">
      <nav className='navbar AppNavbar'>
        <div class="locations">
          <label className='ipsLabel'>
            latitude:
            <input className='ips' value={latitude} onChange={handleLat} />
          </label>
          <label className='ipsLabel'>
            longitude:
            <input className='ips' value={longitude} onChange={handleLon} />
          </label>
          <button onClick={findRestaurant} >Find Restaurant</button>
        </div>
      </nav>
      {loading && (
        <div className='AppContentDiv'>
          <div class="spinner-border text-light spinnerTop" role="status">
          </div>
        </div>
      )}
      {!loading && (
        <div className='AppContentDiv' >
          {!showDetails && (
            <RestaurantsList businesses={businesses} showDetails={handleDetais} />
          )}
          {showDetails && (
            <DetailsPage restaurant={selectedRestaurant} backToList={goBack} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
