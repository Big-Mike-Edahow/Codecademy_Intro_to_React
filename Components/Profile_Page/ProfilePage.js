// ProfilePage.js

import React from 'react';
import NavBar from './NavBar';

function ProfilePage() {
    return (
        <div>
            <NavBar />
            <h1>All About Me!</h1>
            <p>I like movies and monkeying around in the trees.</p>
            <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
        </div>
    );
}

export default ProfilePage;
