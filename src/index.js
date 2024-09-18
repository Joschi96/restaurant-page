import './styles.css';
import {createHome} from './home';
import {createMenu} from './menu';
import {createAbout} from './about';

function loadTab(tabFunction) {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';  // Clear existing content
    contentDiv.appendChild(tabFunction());  // Load new content
}

function addNavEvents() {
    document.querySelector('#home-btn').addEventListener('click', () => loadTab(createHome));
    document.querySelector('#menu-btn').addEventListener('click', () => loadTab(createMenu));
    document.querySelector('#about-btn').addEventListener('click', () => loadTab(createAbout));
}

// Initially load the Home tab when the page loads
window.onload = () => {
    loadTab(createHome);  // Default tab is Home
    addNavEvents();       // Attach event listeners to buttons
};
