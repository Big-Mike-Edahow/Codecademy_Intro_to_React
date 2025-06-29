// NavBar.js

import React from 'react';

function NavBar() {
    const pages = ['Home', 'Blog', 'Pics', 'Bio', 'Art', 'Shop', 'About', 'Contact'];
    const navLinks = pages.map(page => {
        return (
            <a href={'/' + page}>
                &nbsp;{page}
            </a>
        )
    });

    return <nav>{navLinks}</nav>;
}
export default NavBar;
