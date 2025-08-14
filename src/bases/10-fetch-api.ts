import type { GiphyRandomResponse, Gif } from '../data/giphy.response';

const API_KEY = 'gWjx3VRDDin6eoynoeApSmCaYOgfBUOF';

const myRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

myRequest
    .then((response) => response.json())
    .then(({data}: GiphyRandomResponse) => {

        const imageUrl = data.images.original.url;


        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        document.body.appendChild(imageElement);
    })
    .catch(error => console.log(error));