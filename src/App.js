import React, {useEffect, useState} from  'react';

import './App.css';
import PaginationBar from './components/PaginationBar';
import Header from './components/Header'
import Filter from './components/Filter'
import CountryCards from './components/CountryCards';


function App(){
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('')
  

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


  const handleSearch = (e)=>{
    if(e.target.value === null || e.target.value === undefined || e.target.value === '') {
      dataFetch();
      return;
    }
    setSearchText(e.target.value);
    const filteredCountries = countries.filter(country =>
      JSON.stringify(country).toLowerCase().includes(searchText.toLowerCase())
    )
    if(filteredCountries.length !== 0) {
      setCountries(filteredCountries);
    }
  }

  return (
    
    <div>
    

      <Header/>
      <Filter handleSearch={handleSearch}/>
      
      <CountryCards countries={countries} currentPage={currentPage} />
      <PaginationBar countries={countries} currentPage={currentPage} setCurrentPage={setCurrentPage}/>

    </div>
  )

}


export default App;
