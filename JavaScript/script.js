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
async function getData(){
    const url = 'https://api.weatherapi.com/v1/current.json?key=2e2a9ba24b4f41a6bf3181404230809&q=india&aqi=no';
   
   
    const data = fetch()
}; 
getData();
// apiKey = 2e2a9ba24b4f41a6bf3181404230809