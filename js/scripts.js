let slides = document.querySelectorAll(".foto");
let bolitos = document.querySelectorAll(".bolito");
let height = window.innerHeight;
let offset = height; 

slides.forEach(function (slide, index) {

    window.addEventListener("scroll", () => {
        console.log("window.pageYOffset:", window.pageYOffset)
        if (window.pageYOffset >= offset + height * 2 * index) {
            bolitos.forEach(b => b.style.fontSize = "24px");
            bolitos[index].style.fontSize = "48px"
            slide.style.display = "block";
        }
        else {
            slide.style.display = "none";
        }
    })

})