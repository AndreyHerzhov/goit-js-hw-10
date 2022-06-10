import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';


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
      refs.countryInfo.innerHTML = ''
      refs.list.innerHTML = ''
        if(r.length > 1 && r.length < 10) {
         
          r.map(el => {
            const markup = renderCountryList(el)
            addLiToList(markup) 
        })
          
        } else if(r.length > 10) {
          Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
        } else {
          const markup = renderCountryCard(r[0])
          addCountryCard(markup) 
         
        }
    })
    .catch(error =>
      Notiflix.Notify.failure("Oops, there is no country with that name" )
    )
}


function renderCountryList({flags: {svg}, name: {official},}) {
  return ` 
     <li><img src="${svg}" alt="" class="flag">${official}</li>
 `
}

function renderCountryCard({flags: {svg}, name: {official}, capital, population, languages}) {
    const language = Object.values(languages)
    const cap = capital.join('')
    console.log(svg)
  return ` 
  <div class="card">

      <div class="wrapper">
          <img src="${svg}" alt="" class="flag">
          <h1 class="country">${official} </h1>
      </div>
      <p class="capital">Capital: ${cap}</p>
      <p class="population">Population: ${population}</p>
      <p class="language">Language: ${language}</p>
  </div>
   `
}
 
const addCountryCard = (markdown) => {
  refs.countryInfo.insertAdjacentHTML('beforeend', markdown)
}

const addLiToList = (markdown) => {
  refs.list.insertAdjacentHTML('beforeend', markdown)
}



 


 



 