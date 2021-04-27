import React from 'react';
import {FetchRandomRace} from './App.js';
import Menu from './Dropdown.js';
import Field from './TextFields.js';

const Layout = () => {
    const race = FetchRandomRace();
    return (
        <div className="container">
            <div className="header">This is your NPC</div>
            <div className="innerCntr">
                <div className="finalCntr">
                    <div className="labels">
                        <Menu />
                    </div>
                    <div className="fieldContainer">
                        <Field />
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Layout;