<?php 
header("Access-Control-Allow-Origin:*");
header("Content-type: json");

include_once("../Model/ClassTable/Usuario.php");

// // Objeto Usuario recebe os dados para atualizar
    $usuario = new Usuario();
    $usuario->id_usuario = $_POST['id_usuario'];
    $usuario->nome = $_POST['nome'];
    $usuario->email = $_POST['email'];
    $usuario->telefone = $_POST['telefone'];
     
    
    
//     // // Update e validações

    $validateUsuario = $usuario->updateUsuario();

//     echo json_encode([$validateUsuario]);

echo json_encode([$validateUsuario]);