let slides = document.querySelectorAll(".foto");
let height = window.innerHeight;
let offset = document.querySelector("#offset").clientHeight - height; 

slides.forEach(function (slide, index) {

    // slide.style.display = "none";

    window.addEventListener("scroll", () => {
        console.log("window.pageYOffset:", window.pageYOffset)
        if (window.pageYOffset >= offset + height * 2 * index) {
            slide.style.display = "block";
        }
        else {
            slide.style.display = "none";
        }
    })

})