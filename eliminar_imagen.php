<?php
$carpeta = "imagenes/";

if (isset($_GET["imagen"])) {
    $imagen = $_GET["imagen"];
    $archivo = $carpeta . $imagen;

    if (file_exists($archivo)) {
        if (unlink($archivo)) {
            echo "La imagen se ha eliminado correctamente.";
        } else {
            echo "Hubo un error al eliminar la imagen.";
        }
    } else {
        echo "La imagen no existe.";
    }
} else {
    echo "Nombre de imagen no proporcionado.";
}
?>
