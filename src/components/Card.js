import React from 'react'


const Card = ({key}, {country})=>{


    return(
        <>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
               
            </Card.Body>
            </Card>

            {/* <section className="grid" >
                {countries.map((country) =>{
                    let count = {countryCount};
                    if(parseInt({count})>=5) return;
                    const {numericCode, name, population, region, capital, flag} = country;
                    count++;
                    setCountryCount({count});
                    return (
                        <article key={numericCode}>
                            <div>
                                <img src={flag} alt={name} />
                                <div className="details">
                                    <h3> {name} </h3>
                                    <h4>
                                        Population: <span> {population} </span>
                                    </h4>
                                    <h4>
                                        Region: <span> {region} </span>
                                    </h4>
                                    <h4>
                                        Capital: <span> {capital} </span>
                                    </h4>
                                </div>

                            </div>
                        </article>
                    )
                    
                })}
            </section> */}
        </>
    )
}

export default Card