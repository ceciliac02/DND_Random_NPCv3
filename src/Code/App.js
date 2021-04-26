import React from 'react';
import '../style.css';
import Data from '../races.json';
import Layout from './Layout.js';

export const FetchRandomRace = () => {
    const data = Data;
    const randNum = Math.floor(Math.random() * data.length);
    const fetchRace = Data[randNum];
    console.log(fetchRace);
    return fetchRace;
}



function App () {
    return (
        <div className="background">
            <Layout />
        </div>
    )
}

export default App;