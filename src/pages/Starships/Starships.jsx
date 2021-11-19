import React, { useEffect, useState } from 'react'
import { getStarships } from '../../services/api-calls'
import { Link } from 'react-router-dom'

const Starships = (props) => {
  const [allStarships, setResults] = useState([])

  useEffect(() =>  {
    getStarships()
    .then(allStarships => setResults(allStarships.results))
  }, [])

  
return ( 
  <>
  {allStarships.length ? 
    <div className="starship-container">
      {allStarships.map((starship, idx) => 
        <Link className="starships-link" to={`/starship/${idx}`} key={idx} state={{starship}}>
          <p className="starship-p">{starship.name}</p>
        </Link>
      )}
    </div>
  :
  <h2>Loading your starfleet...</h2>
  }
  </>
);
}

export default Starships;