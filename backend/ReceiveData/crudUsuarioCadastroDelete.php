<?php 
header("Access-Control-Allow-Origin:*");
header("Content-type: json");


include_once("../Model/ClassTable/Usuario.php");



$usuario = new Usuario();
$usuario->id_usuario = $_POST['id_usuario'];

$validadeUsuario = $usuario->deleteUsuario();


echo json_encode([$validadeUsuario]);