const places = [
    {
        id: 1,
        name: "Dublin",
        dscription: "Welcome to Dublin, a city that's as intimate as a village and as friendly as an Irish pub. Framed by mountains, centred on a river and edged by a beautiful bay, the city's streets and alleys are filled with vibrant art and historic buildings, hip cafés and traditional old man pubs, as Dubliners call them. Walk the streets and you'll feel the energy of over 1,000 years of history, as echoes of the Vikings mix with buzzing boutiques, cobbled streets reverberate with the sounds of buskers, and 18th century parks play host to festivals, film and food markets.",
        src: "assets/image/dublin 1.jpg"
    },

    {
        id: 2,
        name: "CORK",
        description: "One of the best places to visit in southern Ireland, Cork follows Dublin as the Republic of Ireland's second largest city. It's also on par with the capital for being highly cosmopolitan. Wander the historic streets to soak up cool vibes emanating from small cafés, eccentric shops, unique museums (that means you, Cork Butter Museum), and lurid art galleries.",
        src: "assets/image/cork 2.jpg"
    },

    {
        id: 3,
        name: "BELFAST",
        description: "In times of old, Belfast was a location non grata. Once an industrial powerhouse (its shipyard produced the doomed Titanic), this capital of Northern Ireland became feared. Today, Belfast has become a big tourist draw.",
        src: "assets/image/belfast 3.jpg"
    },

    {
        id: 4,
        name: "ARAN ISLAND ",
        description: "Want a truly Irish experience? Immerse yourself in life on the Aran Islands. A popular spot for day-trippers from County Galway (a ferry leaves from Rossaveal) and County Clare (ferries depart from Doolin), those who want to thoroughly explore these three unique islands opt to stay longer. Visitors with deeper pockets can opt for a 10-minute flight to the area.",
        src: "assets/image/Aran islands 4.jpg"
    },

    {
        id: 5,
        name: "KILLARNEY",
        description: "County Kerry (on the southwest corner of Ireland) is home to the much-visited Killarney. Those who come here are in search of something a metropolitan high street doesn't have on offer: serenity. Take a look around, and you'll be graced by lakes, waterfalls, and mountains. Miles of trails are calling, and only comfortable sneakers (or hiking boots) will get you to your destination.",
        src: "assets/image/killarney 5.jpg"
    }


]

const images = document.getElementsByClassName("imgs");
const currentImage = document.getElementById("current-img");
const titleImages = document.getElementById("image-title");
const descImages = document.getElementById("image-desc");

for (let i = 0; i <= images.length; i++) {
    images[i].setAttribute('src', places[i].src);
    images[i].addEventListener("click", function () {
        currentImage.setAttribute('src', places[i].src);
        titleImages.innerText = places[i].name;
        descImages.innerText = places[i].description;
    });
}

currentImages.src = places[0].src;
titleImages.innerText = places[0].name;
descImages.innerText = places[0].description;
