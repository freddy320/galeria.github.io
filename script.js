

function subirImagen() {
    const input = document.getElementById("imagenInput");
    const mensajeDiv = document.getElementById("mensaje");
    const imagenContainer = document.getElementById("imagenContainer");
    
    const archivo = input.files[0];
    if (archivo) {
        const formData = new FormData();
        formData.append("imagen", archivo);

        fetch("upload.php", {
            method: "POST",
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            mensajeDiv.textContent = data;
            input.value = "";
            cargarImagenes(); 
        })
        .catch(error => {
            mensajeDiv.textContent = "Hubo un error al subir la imagen.";
            console.error(error);
        });
    } else {
        mensajeDiv.textContent = "Selecciona una imagen antes de subirla.";
    }
}



function cargarImagenes() {
    const imagenContainer = document.getElementById("imagenContainer");
    imagenContainer.innerHTML = "";

    fetch("listar_imagenes.php")
        .then(response => response.json())
        .then(data => {
            data.forEach(imagen => {
                const imgElement = document.createElement("img");
                imgElement.src = "imagenes/" + imagen;
                imgElement.alt = imagen;

                const descargarButton = document.createElement("button");
                descargarButton.innerHTML = '<i class="fas fa-download">  <Samp> Descargar</Samp></i>'; // Icono de descarga de FontAwesome
                descargarButton.className = "descargar";
                descargarButton.onclick = () => descargarImagen(imagen);

                const eliminarButton = document.createElement("button");
                eliminarButton.innerHTML = '<i class="fas fa-trash"> <Samp> Eliminar</Samp></i>'; // Icono de eliminar de FontAwesome
                eliminarButton.className = "eliminar";
                eliminarButton.onclick = () => eliminarImagen(imagen);

                const divElement = document.createElement("div");
                divElement.appendChild(imgElement);
                divElement.appendChild(descargarButton);
                divElement.appendChild(eliminarButton);

                imagenContainer.appendChild(divElement);
            });
        })
        .catch(error => console.error(error));
}





function descargarImagen(nombreImagen) {

    window.location.href = "descargar_imagen.php?imagen=" + nombreImagen;
}


function eliminarImagen(nombreImagen) {
    const confirmar = confirm("¿Estás seguro de que quieres eliminar esta imagen?");
    
    if (confirmar) {
        
        fetch("eliminar_imagen.php?imagen=" + nombreImagen)
            .then(response => response.text())
            .then(data => {
                mensajeDiv.textContent = data;
                
                const divAEliminar = document.querySelector(`div[data-imagen="${nombreImagen}"]`);
                if (divAEliminar) {
                    divAEliminar.remove();
                   
                }

            
            } )
            .catch(error => {
                mensajeDiv.textContent = "Hubo un error al eliminar la imagen.";
                console.error(error);
            });

            cargarImagenes();
    }

}







document.addEventListener("DOMContentLoaded", cargarImagenes);
