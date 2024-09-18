export function createMenu() {
    const div = document.createElement('div');
    div.classList.add('tab-content', 'menu-container');

    // Create the header
    const header = document.createElement('h1');
    header.textContent = "Our Menu";
    header.classList.add('menu-header');
    div.appendChild(header);

    // Create Low Altitude (Starters)
    const lowAltitudeSection = document.createElement('div');
    lowAltitudeSection.classList.add('menu-section');
    const lowAltitudeHeader = document.createElement('h2');
    lowAltitudeHeader.textContent = "Low Altitude – Starters";
    lowAltitudeHeader.classList.add('menu-section-header');
    lowAltitudeSection.appendChild(lowAltitudeHeader);

    const starters = [
        { name: "Cloud Puffs", description: "Light, airy dumplings filled with mushroom mousse, resting on a mist of savory steam." },
        { name: "Breeze Bites", description: "Miniature puff pastries with whipped feta and sun-kissed tomatoes, drizzled with herb-infused olive oil." },
        { name: "Dawn Dew Salad", description: "Fresh greens kissed with citrus and edible flower petals, with a cloudberry vinaigrette." }
    ];

    starters.forEach(starter => {
        const item = document.createElement('p');
        item.classList.add('menu-item');
        item.innerHTML = `<strong>${starter.name}</strong>: ${starter.description}`;
        lowAltitudeSection.appendChild(item);
    });
    div.appendChild(lowAltitudeSection);

    // Create Mid Altitude (Main Dishes)
    const midAltitudeSection = document.createElement('div');
    midAltitudeSection.classList.add('menu-section');
    const midAltitudeHeader = document.createElement('h2');
    midAltitudeHeader.textContent = "Mid Altitude – Main Dishes";
    midAltitudeHeader.classList.add('menu-section-header');
    midAltitudeSection.appendChild(midAltitudeHeader);

    const mains = [
        { name: "Skyline Symphony", description: "Grilled salmon with citrus glaze, served on quinoa and asparagus in saffron cream." },
        { name: "Nebula Risotto", description: "Creamy risotto with truffle essence, roasted vegetables, and stardust Parmesan." },
        { name: "Astral Roast", description: "Slow-cooked beef roast, seasoned with space-aged spices and velvety mashed potatoes." }
    ];

    mains.forEach(main => {
        const item = document.createElement('p');
        item.classList.add('menu-item');
        item.innerHTML = `<strong>${main.name}</strong>: ${main.description}`;
        midAltitudeSection.appendChild(item);
    });
    div.appendChild(midAltitudeSection);

    // Create High Altitude (Desserts)
    const highAltitudeSection = document.createElement('div');
    highAltitudeSection.classList.add('menu-section');
    const highAltitudeHeader = document.createElement('h2');
    highAltitudeHeader.textContent = "High Altitude – Desserts";
    highAltitudeHeader.classList.add('menu-section-header');
    highAltitudeSection.appendChild(highAltitudeHeader);

    const desserts = [
        { name: "Moonlit Meringue", description: "A fluffy meringue floating on lemon curd with candied lavender stars." },
        { name: "Galactic Gelato", description: "Starfruit sorbet, black sesame, and cosmic chocolate, served with a wafer galaxy." },
        { name: "Stellar Soufflé", description: "An airy chocolate soufflé, dusted with powdered sugar resembling the Milky Way." }
    ];

    desserts.forEach(dessert => {
        const item = document.createElement('p');
        item.classList.add('menu-item');
        item.innerHTML = `<strong>${dessert.name}</strong>: ${dessert.description}`;
        highAltitudeSection.appendChild(item);
    });
    div.appendChild(highAltitudeSection);

    // Create Ethereal Beverages
    const beverageSection = document.createElement('div');
    beverageSection.classList.add('menu-section');
    const beverageHeader = document.createElement('h2');
    beverageHeader.textContent = "Ethereal Beverages";
    beverageHeader.classList.add('menu-section-header');
    beverageSection.appendChild(beverageHeader);

    const beverages = [
        { name: "Celestial Sangria", description: "Stardust-infused fruits and white wine in a crystal-clear goblet." },
        { name: "Sunset Spritzer", description: "Sparkling water, blood orange, and hibiscus, with a touch of golden syrup." }
    ];

    beverages.forEach(beverage => {
        const item = document.createElement('p');
        item.classList.add('menu-item');
        item.innerHTML = `<strong>${beverage.name}</strong>: ${beverage.description}`;
        beverageSection.appendChild(item);
    });
    div.appendChild(beverageSection);

    return div;
}
