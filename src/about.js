export function createAbout() {
    const div = document.createElement('div');
    div.classList.add('tab-content');

    const header = document.createElement('h1');
    header.textContent = "About Us";
    div.appendChild(header);

    const paragraph = document.createElement('p');
    paragraph.textContent = "Placeholder for About page content.";
    div.appendChild(paragraph);

    return div;
}