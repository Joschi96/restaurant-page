import './styles.css';
import {createHome} from './home';
import {createMenu} from './menu';
import {createAbout} from './about';
import '/node_modules/modern-normalize/modern-normalize.css';

function loadTab(tabFunction, buttonId) {
    const contentDiv = document.querySelector('#content');

    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(button => button.classList.remove('active'));
    document.querySelector(`#${buttonId}`).classList.add('active');


    contentDiv.innerHTML = '';  // Clear existing content
    contentDiv.appendChild(tabFunction());  // Load new content
}

function addNavEvents() {
    document.querySelector('#home-btn').addEventListener('click', () => loadTab(createHome, 'home-btn'));
    document.querySelector('#menu-btn').addEventListener('click', () => loadTab(createMenu, 'menu-btn'));
    document.querySelector('#about-btn').addEventListener('click', () => loadTab(createAbout, 'about-btn'));
}

// Initially load the Home tab when the page loads
window.onload = () => {
    loadTab(createHome, 'home-btn');  // Default tab is Home
    addNavEvents();       // Attach event listeners to buttons
};
