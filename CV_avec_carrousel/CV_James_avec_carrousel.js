var largeurImage;
var hauteurImage;

function zoom(image) {
    largeurImage = image.style.width;
    hauteurImage = image.style.height;
    image.style.width = "auto";
    image.style.height = "auto";    
}

function dezoom(image) {
    image.style.width = largeurImage;
    image.style.height = hauteurImage;
}

var photos = ["Connery.jpg", "Lazenby.jpg", "Moore.jpg", "Dalton.jpg", "Brosnan.jpg", "Craig.jpg"];
var numImage = 1;

function carrousel() {
    document.getElementById("photo").src = photos[numImage];
    numImage += 1;
    if (numImage == photos.length) numImage = 0; 
}
