<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla de Clientes</title>
    <link rel="shortcut icon" href="./img/tbl.png" type="image/x-icon">
    <link rel="stylesheet" href="./CSS/styles.css">
    <link rel="stylesheet" href="./CSS/normalize.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
<header class="header">
    <h1 class="header-1">Tabla de Clientes</h1>
    <div class="imagen">
        <img src="./img/tbl.png" alt="tblClientes">
    </div>        
</header>
<div class="container my-4">
    <div class="table-responsive">
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Mensaje</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $conexion = mysqli_connect("localhost", "root", "", "dbclientes");

                if (!$conexion) {
                    echo "<tr><td colspan='5' class='text-center text-danger'>Error en la conexión a la base de datos</td></tr>";
                    exit;
                }

                $sql = "SELECT * FROM tblclientes";
                $result = mysqli_query($conexion, $sql);

                if (mysqli_num_rows($result) > 0) {
                    while ($row = mysqli_fetch_array($result)) {
                        $id = htmlspecialchars($row["idCliente"]);
                        $nombre = htmlspecialchars($row["nombre"]);
                        $telefono = htmlspecialchars($row["telefono"]);
                        $correo = htmlspecialchars($row["correo"]);
                        $mensaje = htmlspecialchars($row["mensaje"]);
                        
                        echo "<tr>
                            <th scope='row'>$id</th>
                            <td>$nombre</td>
                            <td>$telefono</td>
                            <td>$correo</td>
                            <td>$mensaje</td>
                        </tr>";
                    }
                } else {
                    echo "<tr><td colspan='5' class='text-center'>No hay datos disponibles</td></tr>";
                }

                mysqli_close($conexion);
                ?>
            </tbody>
        </table>
    </div>
    <a style="text-decoration: none;" href="../index.html#formularioClientes" class="btn btn-primary mt-3" target="_top">Formulario</a>

</div>
</body>
</html>
