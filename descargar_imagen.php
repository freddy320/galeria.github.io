<?php
$carpeta = "imagenes/";

if (isset($_GET["imagen"])) {
    $imagen = $_GET["imagen"];
    $archivo = $carpeta . $imagen;

    if (file_exists($archivo)) {
        // Configurar las cabeceras para forzar la descarga
        header("Content-Type: application/octet-stream");
        header("Content-Disposition: attachment; filename=" . $imagen);
        readfile($archivo);
        exit;
    } else {
        echo "La imagen no existe.";
    }
} else {
    echo "Nombre de imagen no proporcionado.";
}
?>
