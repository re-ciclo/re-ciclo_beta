<?php
header("Access-Control-Allow-Origin:*");
header("Content-type: json");


include_once("../Model/ClassTable/Reciclado.php");

$dados = Reciclado::getAll();

echo json_encode($dados);