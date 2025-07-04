// Home.jsx

import React from 'react';

import AttentionGrabber from './AttentionGrabber';
import styles from './styles/Home.module.css';

function Home() {
    return (
        <div className={styles.div}>
            <AttentionGrabber />
            <footer>
                <small>&copy; 2025 Mike Jackson &reg; Full-Stack Web Developer 🌐</small>
            </footer>
        </div>
    );
}

export default Home
