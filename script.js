const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

/* Setting up Unsplash API
    unsplash.com/documentation
    quick shortcuts - setting up an application - jump to documentation
    sign in
    Unsplash Developers - Schema - Location
    API is available at: https://api.unsplash.com/ response in json
    Authorization: https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
    API key: Your Apps - New Application
*/

const count = 10;
const apiKey = 'eEOjgtu82bLyYpwq1NqGaDI_Zh4LvLNxPLN8WZlzkiQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.log(photosArray);
    } catch (error) {
        //catch error
    }
}

//on load
getPhotos();