// app.js
// Ternary Operator

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

// Randomly return either 'heads' or 'tails'.
function coinToss() {
    return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
    kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
    doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

root.render(img);
