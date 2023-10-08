<?php
$carpeta = "imagenes/";
$archivos = scandir($carpeta);
$imagenes = array();

foreach ($archivos as $archivo) {
    if ($archivo !== "." && $archivo !== "..") {
        $imagenes[] = $archivo;
    }
}

echo json_encode($imagenes);
?>
