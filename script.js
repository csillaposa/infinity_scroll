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
const apiKey = 'API_KEY';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        //catch error
    }
}

//on load
getPhotos();