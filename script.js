const apiKey = "AIzaSyCSv9orXUrhCIRSIWaUJL9Jl-LSSKCIhTI";

document.getElementById("searchButton").addEventListener("click", () => {
    let searchQuery = document.getElementById("searchInput").value;
    let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=videomusica&key=AIzaSyCSv9orXUrhCIRSIWaUJL9Jl-LSSKCIhTI';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let lista = document.querySelector('#listaVideo');
            lista.innerHTML = ""; 
            data.items.forEach(video => {
                let li = document.createElement('li');
                li.innerHTML = `
                    <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
                    <div>
                        <h3>${video.snippet.title}</h3>
                        <button onclick="playVideo('${video.id.videoId}')">Reproducir</button>
                    </div>
                `;
                lista.appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error));
});

function playVideo(videoId) {
    let player = document.querySelector("#player");
    player.src = 'https://www.youtube.com/embed/${videoId}?autoplay=1';
}