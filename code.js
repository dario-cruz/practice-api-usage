// Define the image element located in the dom.
const imgElem = document.getElementById('random-img')
const newImageButton = document.getElementById('re-fresh')

fetchGif()

async function fetchGif() {
    // Fetch random image from giphy and display it on the page.
    const imageRequest = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=aUyhSOuOVKcUPOfGiOTj56j0HjuJJ8SQ&s=dogs', {mode: 'cors'})
    const imageData = await imageRequest.json()
    imgElem.src = imageData.data.images.original.url

//     fetch('https://api.giphy.com/v1/gifs/translate?api_key=aUyhSOuOVKcUPOfGiOTj56j0HjuJJ8SQ&s=dogs', {mode: 'cors'})
//         .then(function(response) {
//         return response.json()
//         })
//         .then(function(response) {
//         imgElem.src = response.data.images.original.url
//         })    
}

newImageButton.addEventListener('click', fetchGif)