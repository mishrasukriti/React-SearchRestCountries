import React from "react";
import { Form } from "react-bootstrap";
// import './App.css';


const SelectInputGroup = ({countries}) =>{
    let arr=[];
    for(let i=5; i<=50; i+=5)  {
        arr.push(i);
    }

    return(
        <div className="selectDiv">
            <Form inline >
            <Form.Label className="my-1 mr-2 " htmlFor="inlineFormCustomSelectPref">
                Page-Size
            </Form.Label>
            <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
            {
                arr.map((val,index)=>
                    <option key={index} value={val} > {val} </option>
                )     
            }
            </Form.Control>
            
         </Form>
        </div>
    )
}

export default SelectInputGroup;