<?php 
header("Access-Control-Allow-Origin:*");
header("Content-type: json");


include_once("../Model/ClassTable/Endereco.php");



$endereco = new Endereco();
$endereco->id_usuario = $_POST['id_usuario'];

$validadeEndereco = $endereco->deleteEndereco();


echo json_encode([$validadeEndereco]);