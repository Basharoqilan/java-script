const apiKey = 'AIzaSyB0t89pnvW-JKuNEE-o-XN1McP8vdi-9Q4';
let maxResults = 4;

function searchVideos() {
    const input = document.getElementById("input").value;
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(input)}&maxResults=${maxResults}&key=${apiKey}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const result = document.getElementById("result");
            result.innerHTML = '';
            data.items.forEach(item => {
                const video = document.createElement('div');
                video.classList.add('video');
                video.innerHTML = `
                    <h3>${item.snippet.title}</h3>
                    <a href="https://www.youtube.com/watch?v=${item.id.videoId}" target="_blank">
                        <img src="${item.snippet.thumbnails.medium.url}" alt="${item.snippet.title}">
                    </a>
                    <p>${item.snippet.description}</p>
                `;
                result.appendChild(video);
            });
        })
        .catch(error => {
            console.error('Error fetching data from YouTube API:', error);
        });
}

document.getElementById("search").addEventListener("click", searchVideos);

