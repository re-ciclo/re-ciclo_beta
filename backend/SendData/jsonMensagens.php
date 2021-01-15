<?php



include_once("../Model/ClassTable/Mensagem.php");

$dados = Mensagem::getAll();

echo json_encode($dados);