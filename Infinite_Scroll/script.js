const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader'); 

let photosArray = []; 

//Unsplash API
const count=10;
const apiKey = '-uErmoyP_XOaZ0E5zQ1dKJBbaGQWMtRyaKPe9-R6PJo';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

//Create elements For Links & Photos, Add to DOM 
function displayPhotos() {
    //Run function for each object in the photosArray
    photosArray.forEach((photo)=> {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item,{
            href: photo.links.html, 
            target: '_blank', 
        });
        //Create <img> for photo 
        const img = document.createElement('img');
        setAttributes(img,{
            src: photo.urls.regular,
            alt: photo.alt.desription, 
            title: photo.alt.desription, 
        });
        //Put <img> inside <a>, then put both inside imageConatiner Element
        item.appendChild(img); 
        imageContainer.appendChild(item);
    })
}

//Get photos from Unsplash APi
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json(); 
        displayPhotos(); 
    } catch (error) {
        //catch error here
    }
}

//On load
getPhotos();