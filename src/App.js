import './App.css';
import { useEffect, useState } from 'react'
import RestaurantsList from './components/RestaurantsList/RestaurantsList';
import DetailsPage from './components/DetailsPage/DetailsPage';

function App() {

  const [businesses, setBusinesses] = useState([])
  const [selectedRestaurant, setSelectedRestaurant] = useState({})
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    console.log("Started")
    // const apiUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=37.786882&longitude=-122.399972"
    const subApiUrl = "/v3/businesses/search?term=restaurants&latitude=37.786882&longitude=-122.399972"
    const headers = {
      method: 'GET',
      headers: {
        Accept: "application/json",
        Authorization: "Bearer 3PW75iXnNgFsSrArLrQrtC5SHnilq7lNSVJ4LL-TSFiy19LLZJWh7zFv6F-_W9d9drKzoymoBSMQeVadhbcBA2cWWpfzQQCdmc0OIAEdZ1Pq1fjFFbTVxgK6L-YrY3Yx",
      }
    }
    fetch(subApiUrl, headers).then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data.businesses[1])
      setBusinesses(data.businesses)
    })
  }, [])

  const handleDetais = (value) => {
    setSelectedRestaurant(value)
    setShowDetails(true)
  }

  const goBack = () => {
    setSelectedRestaurant({})
    setShowDetails(false)
  }

  return (
    <div className="App">
      {!showDetails && (
        <RestaurantsList businesses={businesses} showDetails={handleDetais} />
      )}
      {showDetails && (
        <DetailsPage restaurant={selectedRestaurant} backToList={goBack} />
      )}
    </div>
  );
}

export default App;
