
const sampleChannels = [
    { name: "قناة الرياضة", rating: 4.5, date: "2025-07-10" },
    { name: "قناة الأطفال", rating: 4.8, date: "2025-07-11" },
    { name: "قناة الأخبار", rating: 4.2, date: "2025-07-09" }
];

let favorites = [];

function loadChannels() {
    displayChannels(sampleChannels);
}

function displayChannels(channels) {
    const list = document.getElementById("channelList");
    list.innerHTML = "";
    channels.forEach(channel => {
        const item = document.createElement("div");
        item.className = "channel-item";
        item.innerHTML = `<strong>${channel.name}</strong>
            <br>⭐ ${channel.rating}
            <br><small>📅 ${channel.date}</small>
            <br><button onclick='addFavorite("${channel.name}")'>💜 أضف للمفضلة</button>`;
        list.appendChild(item);
    });
}

function filterChannels() {
    const query = document.getElementById("search").value.toLowerCase();
    const filtered = sampleChannels.filter(c => c.name.toLowerCase().includes(query));
    displayChannels(filtered);
}

function sortChannels() {
    const sortType = document.getElementById("sort").value;
    let sorted = [...sampleChannels];
    if (sortType === "name") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "rating") {
        sorted.sort((a, b) => b.rating - a.rating);
    } else if (sortType === "latest") {
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    displayChannels(sorted);
}

function addFavorite(name) {
    if (!favorites.includes(name)) {
        favorites.push(name);
        renderFavorites();
    }
}

function renderFavorites() {
    const favList = document.getElementById("favoritesList");
    favList.innerHTML = "";
    favorites.forEach(name => {
        const item = document.createElement("div");
        item.className = "channel-item";
        item.innerText = name;
        favList.appendChild(item);
    });
}
