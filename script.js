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

//creating elements for links and photos, add to DOM
function displayPhotos() {
    //forEach to run function for each object in photosArray
    photosArray.forEach((photo) => {
        //creating <a> to link to unspalch
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        //create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        //put <img> inside <a>, then put both inside image container
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

//Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        //catch error
    }
}

//on load
getPhotos();