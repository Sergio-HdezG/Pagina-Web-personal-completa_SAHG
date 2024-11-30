<?php
$conexion = mysqli_connect("localhost","root","","dbClientes");
if (!$conexion) {
    echo 'No se pudo conectar a la base de datos';
} else {
    echo 'Conexión exitosa';
}