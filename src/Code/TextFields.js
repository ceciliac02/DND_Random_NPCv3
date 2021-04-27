import React from 'react';
import {FetchRandomRace} from './App.js';
import Color from './Hair.js';

const genderList = () => {
    const genders = ["Female", "Male", "Nonbinary"];
    const randNum = Math.floor(Math.random() * genders.length);
    return genders[randNum];
}

const heightList = () => {
    const heights = ["Tall", "Short", "Average"];
    const randNum = Math.floor(Math.random() * heights.length);
    return heights[randNum];
}

function Fields () {
    const race = FetchRandomRace();
    return (
        <div className="fields">
            <div id="raceField" className="field">{race.name}</div>
            <div id="genderField" className="field">{genderList()}</div>
            <div id="heightField" className="field">{heightList()}</div>
            <div id="hairField" className="field"><Color />{" Hair"}</div>
        </div>
    )
}

export default Fields;