import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getDetails } from '../../services/api-calls'

const StarshipDetails = (props) => {
  const [starshipDetails, setStarshipDetails] = useState([])

  let location = useLocation()

  useEffect(()=> { 
    getDetails(location.state.starship.url)
    .then(starshipDetails => setStarshipDetails(starshipDetails))
  },[])

  return (  
    <>
      {starshipDetails.length ?
        <div>
          <h1>{starshipDetails.name}</h1>
          <h1>{starshipDetails.model}</h1>
        </div>
      :
      <>
      <p>Loading Starship Details...</p>
      </>
      }
    </>
  );
}

export default StarshipDetails;