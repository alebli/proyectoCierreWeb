let slides = document.querySelectorAll(".foto");

console.log("estos son los slides: " + slides);

let height = window.innerHeight;


slides.forEach(function (slide, index) {
    console.log(slide)

    // slide.style.display = "none";

    window.addEventListener("scroll", () => {

        // let breakpoint = 2 * height * (index)

        // console.log("index: ", index)

        if (window.pageYOffset > 2 * height * (index + 1)) {
            slide.style.display = "block";
        }
        else if (window.pageYOffset < 2 * height * (index) + 1) {
            slide.style.display = "none";
        }
    })

})