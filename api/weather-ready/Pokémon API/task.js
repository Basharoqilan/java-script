function searchimg() {
    let img = document.getElementById("input").value;
    const apiurl=`https://pokeapi.co/api/v2/pokemon-form/${img}`;
    fetch(apiurl)
        .then(response => response.json())
        .then(data => {
    const image = document.getElementById("img");
    image.innerHTML = '';
    const photo = document.createElement('div');
    photo.classList.add('photo');
    photo.innerHTML = `<img src="${data.sprites.front_default}" alt="${data.name}">`;
    image.appendChild(photo);
        })
        .catch(error => {
            console.error('Error fetching data from YouTube API:', error);
        });
}
document.getElementById("search").addEventListener("click", searchimg);
