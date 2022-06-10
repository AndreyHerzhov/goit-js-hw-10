import './css/styles.css';
import debounce from 'lodash.debounce';


const BASE_URL = 'https://restcountries.com/v3.1'
const DEBOUNCE_DELAY = 300;

function fetchCountryByName (countryName) {
  const url = `${BASE_URL}/name/${countryName}`
  return fetch(url).then(response =>  response.json())
}

 
 const refs = {
  input: document.querySelector('#search-box'),
  countryInfo: document.querySelector('.country-info'),
  list: document.querySelector('.country-list')
}

 

refs.input.addEventListener('input', debounce(countryName,DEBOUNCE_DELAY))

function countryName (e) {
  const countryToFind = e.target.value;

  fetchCountryByName(countryToFind)
    .then(r => {
        if(r.length > 1) {
          return
        } else {
          const markup = renderCountryCard(r[0])
          addLiToList(markup)
          console.log(markup)
        }
    })
}

function renderCountryCard({flags: {svg}, name: {official}, capital, population, languages}) {
          const language = Object.values(languages)
          const cap = capital.join('')
  return ` 
  <div class="card">

      <div class="wrapper">
          <img src="${svg}" alt="" class="flag" width=10px>
          <h1 class="country">${official} </h1>
      </div>
      
      <p class="capital">Capital: ${cap}</p>
      <p class="population">Population: ${population}</p>
      <p class="language">Language: ${language}</p>
  </div>
   `
}
 

const addLiToList = (markdown) => {
  refs.countryInfo.insertAdjacentHTML('beforeend', markdown)
}

 


 



 