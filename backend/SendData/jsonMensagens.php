<?php
header("Access-Control-Allow-Origin:*");
header("Content-type: json");


include_once("../Model/ClassTable/Mensagem.php");

$dados = Mensagem::getAll();

echo json_encode($dados);