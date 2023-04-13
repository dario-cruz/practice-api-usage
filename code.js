// Define the image element located in the dom.
const imgElem = document.getElementById('random-img')
console.log(imgElem)
// Function for console.log of the result produced from the fetch promise.
function consoleResult(result) {
    console.log(result.json())
}



// Fetch random image from giphy and display it on the page.
fetch('https://api.giphy.com/v1/gifs/translate?api_key=aUyhSOuOVKcUPOfGiOTj56j0HjuJJ8SQ&s=cats', {mode: 'cors'})
    .then(function(response) {
        return response.json()
    })
    .then(function(response) {
        imgElem.src = response.data.images.original.url
    })    
