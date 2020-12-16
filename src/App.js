// import logo from './logo.svg';
import React, {useEffect, useState} from  'react';
// import ReactDOM from 'react-dom';

import './App.css';
import PaginationBar from './components/PaginationBar';
import Header from './components/Header'
import Filter from './components/Filter'
import CountryCards from './components/CountryCards';


function App(){
  const [countries, setCountries] = useState([]);
  // const [countryCount, setCountryCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  

  function dataFetch() {

    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then((value) => {
            setCountries(value);
            console.log(countries);
        });
  }

  useEffect(() => {
  dataFetch()
  }, [])

  return (
    <div>
    
    {/* {countries.map((country, index) => (
      <CountryCard  key={index} country={country}/>
    ))} */}

      <Header/>
      <Filter/>
      
      <CountryCards countries={countries} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
      <PaginationBar countries={countries} pageNumber={pageNumber} setPageNumber={setPageNumber}/>

    </div>
  )

}


// ReactDOM.render(<App />, document.getElementById('root'));
export default App;
