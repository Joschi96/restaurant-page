export function createMenu() {
    const div = document.createElement('div');
    div.classList.add('tab-content');

    const header = document.createElement('h1');
    header.textContent = "Our Menu";
    div.appendChild(header);

    const paragraph = document.createElement('p');
    paragraph.textContent = "Placeholder for Menu page content.";
    div.appendChild(paragraph);

    return div;
}