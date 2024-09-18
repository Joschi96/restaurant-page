export function createAbout() {
    const div = document.createElement('div');
    div.classList.add('tab-content');

    const header = document.createElement('h1');
    header.textContent = "About The Floating Feast";
    div.appendChild(header);

    const paragraphs = [
        "Welcome to The Floating Feast, where your dining experience is lifted to new heights – quite literally. Our vision is simple: to take you on a culinary journey beyond the ordinary, far above the clouds, where flavors soar, and your senses take flight. From the moment you step into our floating dining room, surrounded by the endless sky, you’ll leave the everyday world behind.",
        "Our chefs craft each dish as a masterpiece, inspired by the elements of air, space, and the unknown. Every meal at The Floating Feast is a balance of the delicate and the daring – from light, ethereal starters to rich, celestial desserts. We believe that dining is more than just a meal; it’s an experience. Here, you won’t just eat, you’ll float, you’ll drift, and most importantly, you’ll dream.",
        "Let your imagination soar with every bite, as we elevate dining to new altitudes."
    ];

    paragraphs.forEach(text => {
        const paragraph = document.createElement('p');
        paragraph.classList.add('about-paragraph');
        paragraph.textContent = text;
        div.appendChild(paragraph);
    });

    return div;
}