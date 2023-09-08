let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
}

// Change slides every 3 seconds (adjust the time as needed)
setInterval(showSlides, 3000);

// Run showSlides() once on page load to start the slideshow
showSlides();