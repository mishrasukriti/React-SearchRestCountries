import React from "react";


const CountryCards = ({countries, currentPage}) =>{
    let rows_per_page = 5;
    let startIndex = rows_per_page*((currentPage)-1);
    let endIndex= startIndex+ rows_per_page - 1;
    if(endIndex>=249)   endIndex=249;

    console.log("currentPage is: "+ currentPage)
    console.log("startIndex is : "+ startIndex)
    console.log("endIndex is : "+ endIndex)
    let currentFiveCountries = countries.slice(startIndex, endIndex+1)
    console.log("all countries are: "+JSON.stringify(countries))
    console.log("five countries are: "+JSON.stringify(currentFiveCountries))

    

    return(
        <div>
            {
                
                <section className="grid" >
                    {currentFiveCountries.map((country) =>{
                        const {numericCode, name, population, region, capital, languages, flag} = country;
                        
                        return (
                            <article key={numericCode} className="card">
                                <div>
                                    <h3> {name} </h3>
                                    <img src={flag} alt={name} className="p-3"/>
                                    <div className="details">
                                        <h5>
                                            Population: <span> {population} </span>
                                        </h5>
                                        <h5>
                                            Region: <span> {region} </span>
                                        </h5>
                                        <h5>
                                            Capital: <span> {capital} </span>
                                        </h5>
                                        <h5>
                                            Language: <span> {languages[0].name} </span>
                                        </h5>
                                    </div>

                                </div>
                            </article>
                        )
                        
                    })}
                </section> 
            }
        </div>
    )
}

export default CountryCards;

