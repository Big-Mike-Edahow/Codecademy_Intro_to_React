// app.js
// Create Element

import React from 'react';
import { createRoot } from 'react-dom/client'

const container = document.getElementById('app');
const root = createRoot(container);

const greatestDivEver = React.createElement(
    'div',
    null,
    'i am div'
);

root.render(greatestDivEver);
