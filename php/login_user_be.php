<?php

    include 'conect_be.php';

    $usuario = $_POST['user'];
    $password = $_POST['pwd'];

    $verify_login = mysqli_query($conect, "SELECT * FROM users WHERE user='$usuario' AND pwd='$password'");
    if(mysqli_num_rows($verify_login) > 0){
       header("location:..inicio.html");
       exit;
    }else{   
        echo '
        <script>
            alert("Usuario no existe, por favor verifique sus datos");
            window.location = "..index.html";
        </script>
        ';
        exit;
    }
    mysqli_free_result($verify_login);
    mysqli_close($conect);

?>