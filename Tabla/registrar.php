<?php
include 'conexion.php';

$nombre = $_POST['nombre'] ?? null;
$telefono = $_POST['telefono'] ?? null;
$correo = $_POST['correo'] ?? null;
$mensaje = $_POST['mensaje'] ?? null;

if (empty($nombre) || empty($telefono) || empty($correo) || empty($mensaje)) {
    echo '<script>
            alert("Por favor, completa todos los campos antes de enviar el formulario.");
            window.history.go(-1);
          </script>';
    exit;
}

try {
    $stmt = $conexion->prepare("INSERT INTO tblClientes (nombre, telefono, correo, mensaje) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $nombre, $telefono, $correo, $mensaje);

    if ($stmt->execute()) {
        echo '<script>
                alert("Registro efectuado correctamente.");
                window.location.href = "../clientes.html";
              </script>';
    } else {
        throw new Exception("Error al registrar los datos.");
    }

} catch (Exception $e) {
    echo '<script>
            alert("Error: ' . $e->getMessage() . '");
            window.history.go(-1);
          </script>';
} finally {
    $stmt->close();
    $conexion->close();
}
?>