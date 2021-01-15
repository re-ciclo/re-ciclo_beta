<?php
            
    
    header('Access-Control-Allow-Origin:*');
    header("Content-type: json");

    include_once("../Model/ClassTable/Usuario.php");
    
    

    $login = new Usuario;
    $login->email = $_POST['a'];
    $login->senha = $_POST['b'];
           
    $validateUsuarioLogin = $login->loginUsuario();

    if($validateUsuarioLogin){
        echo json_encode(true);
    }else{
        echo json_encode(false);
    }

