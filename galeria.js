function cargarImagenesEnGaleria() {
    const galleryContainer = document.querySelector(".gallery");

    fetch("listar_imagenes.php")
        .then(response => response.json())
        .then(data => {
            data.forEach(imagen => {
                const imgElement = document.createElement("img");
                imgElement.src = "imagenes/" + imagen;
                imgElement.alt = imagen;

                galleryContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", cargarImagenesEnGaleria);