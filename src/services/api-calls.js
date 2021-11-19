const baseUrl = "https://swapi.dev/api/"


export const getStarships = () => {
  return fetch(`${baseUrl}starships`)
  .then(res => res.json())
}

export const getDetails = (apiUrl) => {
  return fetch(`${apiUrl}`)
  .then(res => res.json())
}