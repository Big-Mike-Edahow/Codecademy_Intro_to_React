// app.js
// Developer Profile

import React from 'react';
import { createRoot } from 'react-dom/client'
const container = document.getElementById('app');
const root = createRoot(container);

const profile = (
    <div>
        <h1>Mike Jackson</h1>
        <img src="https://Big-Mike-Edahow.github.io/images/Big_Mike_Cure_Touch.jpg"
        width="320px" />
        <article>
            My name is Mike Jackson.<br />
            I am a software developer.<br />
            I specialize in creating React applications.
        </article>
    </div>
);
root.render(profile);
