
refs.input.addEventListener('input', debounce(countryName,DEBOUNCE_DELAY))

const createList = function (elements){

}

function filterCountries (arr) {
  
}

function countryName(e) {
  const countryToFind = e.target.value;
  if(countryToFind === '' ) {
    refs.list.innerHTML = ''
    return
  } 
  
  fetchCountryByName(countryToFind)
    .then(r =>  { 
      if(r.length > 1) {
        const filteredArray = r.map(el =>  { 
        const countryArray = el.name.official
        // console.log(countryArray)
        return countryArray
        }).filter(c => c.includes(countryToFind)) 
        createList(filteredArray)
        // console.log(filteredArray)
        

        }  else {
          const {name: {official}, capital, languages, population, flags: {svg}} = r[0]
          refs.list.innerHTML = ''
          console.log(r)
          const language = Object.values(languages)
          const cap = capital.join('')
          console.log(language.join(','), cap, population, official, svg)
          renderMarkup(official, cap, population, language, svg)
        }
      
      }
    ) 
    .catch(error => console.log(error))  
}

 

function renderCountryCard(country, cap, population, language, flag) {
  
    return ` 
    <div class="card">

        <div class="wrapper">
            <img src="${flag}" alt="" class="flag" width=10px>
            <h1 class="country">${country} </h1>
        </div>
        
        <p class="capital">Capital: ${cap}</p>
        <p class="population">Population: ${population}</p>
        <p class="language">Language: ${language}</p>
    </div>
     `
  }
   

function renderMarkup(country, cap, population,language, flag) {
  const markup = renderCountryCard(country, cap, population, language, flag)
  addLiToList(markup)
}

const addLiToList = (markdown) => {
  refs.countryInfo.insertAdjacentHTML('beforeend', markdown)
}

 