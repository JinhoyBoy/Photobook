function openLightbox(imageSrc) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImage = document.getElementById("lightbox-image");

    lightboxImage.src = imageSrc;
    lightbox.style.display = "block";
}

function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}