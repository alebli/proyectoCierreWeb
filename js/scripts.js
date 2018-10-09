window.addEventListener("load", function () {
    let slides = document.querySelectorAll(".foto");
    let bolitos = document.querySelectorAll(".bolito");
    let height = window.innerHeight;
    let offset = height;
    let circChico = "24px";
    let circGrande = "48px";

    bolitos[0].style.fontSize = circGrande;

    slides.forEach(function (slide, index) {

        window.addEventListener("scroll", () => {
            if (window.pageYOffset >= offset + height * 2 * index) {
                bolitos.forEach(b => b.style.fontSize = circChico);
                bolitos[index].style.fontSize = circGrande
                slide.style.display = "block";
            }
            else {
                slide.style.display = "none";
            }
        })

    });
});