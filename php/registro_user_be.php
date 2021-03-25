<?php
    
    include 'conect_be.php';

     $usuario = $_POST['user'];
     $password = $_POST['pwd'];
     $email = $_POST['email'];
     

     $query = "INSERT INTO users(user, pwd, email) 
               VALUES('$usuario', '$password', '$email')";

        



    $verify_email = mysqli_query($conect, "SELECT * FROM users WHERE email='$email'");
    if(mysqli_num_rows($verify_email) > 0){
        echo '
        <script>
            alert("Este email ya esta registrado, intenta con otro email");
            window.location = "../index.html";
        </script>
        ';
        exit();
        }
    $verify_user = mysqli_query($conect, "SELECT * FROM users WHERE user='$usuario'");
    if(mysqli_num_rows($verify_user) > 0){
        echo '
        <script>
             alert("Este usuario ya esta registrado, intenta con otro usuario");
             window.location = "../index.html";
        </script>
        ';
         exit();
         }
    
     $eject = mysqli_query($conect, $query);
     if($eject){
         echo '
         <script>
             alert("Usuario registrado exitosamente");
             window.location = "../index.html";
         </script>
         ';
     } else{
        echo '
        <script>
            alert("Usuario no registrado exitosamente");
            window.location = "../index.html";
        </script>
        ';
     }

     mysqli_close($conect);
?>