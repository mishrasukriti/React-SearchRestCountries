import React from "react";

import Card from './Card'

const CountryCards = ({countries}, {pageNumber}) =>{
    // const allCountries = {countries}
    // const pageNumber = {pageNumber}
    let rows_per_page = 5;
    let startIndex= rows_per_page*(pageNumber-1);
    let endIndex= startIndex+ rows_per_page - 1;
    if(endIndex>=249)   endIndex=249;

    const currentFiveCountries = countries.slice(startIndex, endIndex+1)
    

    

    return(
        <div>
            {
                currentFiveCountries.map((country, index) => (
                    <Card  key={index} country={country}/>
                ))
            }
        </div>
    )
}

export default CountryCards;

function createTable(pageNumber){
    let arr = JSON.parse(localStorage.getItem("jsonData"));
    
    let rows_per_page = parseInt(localStorage.getItem('pageSize'));
    let startIndex= rows_per_page*(pageNumber-1);
    let endIndex= startIndex+ rows_per_page - 1;
    if(endIndex>=99)endIndex=99;
    
    let table= document.createElement('table');
    table.classList.add('table', 'table-striped');
    let tableHead= document.createElement('thead');
    tableHead.classList.add("thead-dark");
    let tableHeadRow= document.createElement('tr');
    let tableHeadcol1= document.createElement('th');
    tableHeadcol1.scope = "col";
    tableHeadcol1.innerText= 'Id';

    let tableHeadcol2= document.createElement('th');
    tableHeadcol2.scope = "col";
    tableHeadcol2.innerText= 'name';

    let tableHeadcol3= document.createElement('th');
    tableHeadcol3.scope = "col";
    tableHeadcol3.innerText= 'Email';

    // Appending table head elements
    tableHeadRow.append(tableHeadcol1, tableHeadcol2, tableHeadcol3);
    tableHead.append(tableHeadRow);

    table.append(tableHead);

    //Creating table body
    let tableBody= document.createElement('tbody');

    for(let i= startIndex; i<= endIndex; i++){
        let row= document.createElement('tr');
        let col1= document.createElement('td');
        col1.innerText= arr[i].id;

        let col2= document.createElement('td');
        col2.innerText= arr[i].name;

        let col3= document.createElement('td');
        col3.innerText= arr[i]["email"];

        row.append(col1, col2, col3);
        tableBody.append(row);
    }
    table.appendChild(tableBody);
    return table;
}
