import React from "react";
// import { Pagination } from "react-bootstrap";
import SelectInputGroup from './SelectInputGroup';
import Countries from './Countries';
import PaginationBar from './PaginationBar';
import Header from './Header'


const EnclosingDiv = ({countries}) => {
    
    return(
        <div className='enclosingDiv' id='enclosingDiv'> 
            <div id='wrapperDiv' className='container p-0'>
                <Header/>
                <SelectInputGroup/>
                <Countries />
                <PaginationBar/>
            </div>
        </div>
        
    )
}

export default EnclosingDiv;