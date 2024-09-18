import logo from './logo.jpg';

export function createHome() {
    const div = document.createElement('div');
    div.classList.add('tab-content');

    
    const img = document.createElement('img');
    img.src = logo;
    img.alt = "floating_feast_logo";
    img.id = "logo";
    div.appendChild(img);
    
    const header = document.createElement('h1');
    header.innerHTML = 'Dine Beyond the Clouds at <span>The Floating Feast</span>';
    div.appendChild(header);

    const paragraph = document.createElement('p');
    paragraph.textContent = `Leave the world behind and embark on a dining experience like no other.
                             At The Floating Feast, we defy gravity, serving dishes that elevate your senses 
                             as you dine above the clouds. Each course is designed to take you on a celestial journey, 
                             from airy appetizers that melt on your tongue to heavenly desserts that twinkle with the 
                             sweetness of the stars. Feel weightless, feel free – let your imagination soar as you feast in the sky.`;
    div.appendChild(paragraph);

    return div;
}