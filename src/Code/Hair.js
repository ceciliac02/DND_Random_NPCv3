import React from 'react';

function Colors() {
    const colors = ["Blue", "Pink", "Brown", "Black", "Purple", "Blonde", "Orange", "Red", "Violet", "Green", "Gray", "Gold", "White", "Dark Blue", "Magenta", "Dark Brown", "Dark Purple", "Dark Red", "Dark Green", "Light Blue", "Light Pink", "Light Brown", "Lilac", "Light Blonde", "Light Orange", "Light Red", "Light Green", "Teal", "Lime Green", "Red-Orange", "bald"];
    const randNum = Math.floor(Math.random() * colors.length);
    return colors[randNum];
}

export default Colors;