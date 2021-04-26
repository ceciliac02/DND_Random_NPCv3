import React from 'react';
import Data from '../races.json';
 
const dropdownOptions = () => {
    const data = Data;
    const length = data.map((num) => <li className="options">{num.name}</li>);
    return length;
    
}

function toggleList () {
    let classPromise = new Promise((resolve, reject) => {
        const list = document.querySelectorAll(".options");
        if (list.length > 0) {
            resolve('Success')
        }
        else {
            reject('Fail')
        }
    })
    classPromise.then((message) => {
        console.log(document.querySelectorAll(".options"))
    }).catch((message) => {
        console.log("oops")
    })
}


function Menu () {
    return (
        <div className="labelContainer">
            <ul>
                <li className="default" onClick={() => {document.getElementById("list").classList.toggle("active")}}>All Races</li>
                <div id="list">{dropdownOptions()}</div>
                
            </ul>
        </div>
    )
}

export default Menu;