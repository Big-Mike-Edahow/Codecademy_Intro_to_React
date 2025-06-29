// App.js

import React from 'react';
import Greeting from './Greeting';

function App() {
    return (
        <div>
            <h1>
                MovieFlix
            </h1>
            <Greeting name="Mike" signedIn={true} />
        </div>
    );
}

export default App;
