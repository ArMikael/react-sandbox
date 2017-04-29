const ArtsData = [
    {
        id: 1,
        artist: 'Isshaq Ismail',
        title: 'Daybreak',
        description: "The morning sky is still dark yet the city street is already awake. Hurrying to work, people come " +
        "and go while enterprising merchants set up shop on the sidewalks. Isshaq Ismail depicts the scene in clear " +
        "colors, finding beauty in the geometry of buildings. Every new day gives us an opportunity to embrace our " +
        "aspirations and also work hard toward achieving our goals, the Ghanaian artist says.",
        year: 1997,
        price: 300000
    },
    {
        id: 2,
        artist: 'Luiz Antonio Lopes',
        title: 'Black Birds',
        description: "Strong colors explode as if bursting from the canvas in this exciting painting by Brazilian " +
        "artist Luiz Antonio Lopes. He paints in a characteristic abstract style, using colors of red, yellow, blue, " +
        "and black that seem to splinter with energy against the white canvas. He fancies that the black parts are " +
        "the wings of birds, representing our dreams and imaginations, unlimited in possibility.",
        year: 1768,
        price: 450000
    },
    {
        id: 3,
        artist: 'Shyrley Cabral',
        title: 'Restless Sea II',
        description: "Surging waves splatter fishermen with salty foam as they rock the boats at harbor. A man in" +
        " red struggles to avoid a collision in the restless sea. Conjuring wind and raging surf, Shyrley Cabral " +
        "depicts a scene from the Brazilian coast.",
        year: 1989,
        price: 770500
    }
];

class Data {
    static get ArtsData() {
        return ArtsData;
    }


}
