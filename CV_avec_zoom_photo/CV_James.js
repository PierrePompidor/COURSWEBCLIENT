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
