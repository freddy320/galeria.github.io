<?php
// Ruta donde se guardarán las imágenes
$carpeta = "imagenes/";

// Verificar si la carpeta no existe y crearla si es necesario
if (!file_exists($carpeta)) {
    mkdir($carpeta, 0777, true);
}

if (isset($_FILES["imagen"])) {
    $archivo = $carpeta . basename($_FILES["imagen"]["name"]);
    $tipoArchivo = pathinfo($archivo, PATHINFO_EXTENSION);

    // Verificar si el archivo es una imagen
    $esImagen = getimagesize($_FILES["imagen"]["tmp_name"]);
    if ($esImagen !== false) {
        // Mover el archivo a la carpeta de imágenes
        if (move_uploaded_file($_FILES["imagen"]["tmp_name"], $archivo)) {
            echo "La imagen se ha subido correctamente.";
        } else {
            echo "Hubo un error al subir la imagen.";
        }
    } else {
        echo "El archivo no es una imagen válida.";
    }
}
?>

