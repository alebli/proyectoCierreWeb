window.addEventListener("load", function() {
    // Crear un bullet x cada foto
    const fotos = document.querySelectorAll(".foto");
    fotos.forEach(foto => createBullet());
    const bolitos = document.querySelectorAll(".bolito");

    fotos.forEach((foto, index) => {
        window.addEventListener("scroll", () => {
            let height = window.innerHeight;

            if (window.pageYOffset >= height + 2 * height * index) {
                activarBullet(bolitos, index);
                mostrarFoto(foto);
            } else {
                ocultarFoto(foto);
                // Achica el primer  bullet[0] en la intro
                if (index == 0) desactivarBullet(bolitos, 0);
            }
        });
    });
});

function activarBullet(bolitos, index) {
    bolitos.forEach(b => b.classList.remove("bolitoBig"));
    bolitos[index].classList.toggle("bolitoBig");
}

function desactivarBullet(bolitos, index) {
    bolitos[index].classList.remove("bolitoBig");
}

function mostrarFoto(foto) {
    foto.style.display = "block";
}

function ocultarFoto(foto) {
    foto.style.display = "none";
}

function createBullet() {
    let divNode = document.createElement("div");
    let divText = document.createTextNode("•");
    divNode.classList.add("bolito");
    divNode.appendChild(divText);
    document.querySelector(".circulos").appendChild(divNode);
}
