import React from 'react';
import Data from '../races.json';

const raceList = () => {
    const data = Data;
    const races = data.map((num) => num);

    const list = races.map((name) => <option key={name.id} id={name.id} className="options" onClick={() => {document.getElementById(name.id).classList.toggle("race-active")}}>{name.name}</option>);
    return list;
}

const genderList = () => {
    const genders = ["Any Gender", "Female", "Male", "Nonbinary"];
    const list = genders.map((gender) => <option className="options">{gender}</option>);
    return list;
}

const heightList = () => {
    const heights = ["All Heights", "Tall", "Average", "Short"];
    const list = heights.map((height) => <option className="options">{height}</option>);
    return list;
}

const behaviorList = () => {
    const behaviors = ["All Behaviors", "Friendly", "Hostile", "Apathetic"];
    const list = behaviors.map((beh) => <option className="options">{beh}</option>);
    return list;
}

function Menu () {
    



    return (
        <div className="labelContainer">
            <select id="selectedRace" className="category">{raceList()}</select>
            <select id="selectedGender" className="category">{genderList()}</select>
            <select id="selectedHeight" className="category">{heightList()}</select>
            <div id="hair" className="category">Hair</div>
            <div id="trait" className="category">Trait</div>
            <div id="quirk" className="category">Quirk</div>
            <div id="hobby" className="category">Hobby</div>
            <select id="behavior" className="category">{behaviorList()}</select>
            <div id="profession" className="category">Profession</div>
        </div>
    )
}

export default Menu;