<?php 
header("Access-Control-Allow-Origin:*");
header("Content-type: json");

include_once("../Model/ClassTable/Endereco.php");

//  // Objeto Endereco recebe os dados para atualizar
    $endereco = new Endereco();
    $endereco->id_usuario = $_POST['id_usuario'];
    $endereco->cep = $_POST['cep'];
    $endereco->logradouro = $_POST['logradouro'];
    $endereco->complemento = $_POST['complemento'];
    $endereco->numero = $_POST['numero'];


// // Update e validações

$validateEndereco = $endereco->updateEndereco();

echo json_encode([$validateEndereco]);



// if($validateUsuario == 1 && $validateEndereco == 1){
    // echo json_encode(true);
// }
  
// echo json_encode($validateUsuarioLogin);
//     }else{
//         echo json_encode([0]);








