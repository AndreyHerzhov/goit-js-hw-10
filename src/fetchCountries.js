const BASE_URL = 'https://restcountries.com/v3.1'
export const fetchCountries = function (countryName) {
    const url = `${BASE_URL}/name/${countryName}`
    return fetch(url).then(response =>  response.json())
  }
  