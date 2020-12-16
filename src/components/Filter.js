import React from "react"

const Filter = ({handleSearch})=>{

    return(
        <section className="filter" >
            <form >
                <input type="search" name="search" id="search" placeholder="Search for a country" onChange={handleSearch} />
            </form>    
        </section>
    )
}

export default Filter;