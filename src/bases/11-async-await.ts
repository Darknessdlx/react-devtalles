import type { GiphyRandomResponse, Gif } from '../data/giphy.response';

const API_KEY = 'gWjx3VRDDin6eoynoeApSmCaYOgfBUOF';

const createImageInsideDOM = (url: string) => {
    const imageElement = document.createElement('img');
    imageElement.src = url;
    document.body.appendChild(imageElement);
};

const getRandomGifUrl = async (): Promise<string> => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const { data }: GiphyRandomResponse = await response.json();
    return data.images.original.url;
};



getRandomGifUrl().then(createImageInsideDOM);
