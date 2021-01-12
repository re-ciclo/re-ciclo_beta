<?php



include_once("../Model/ClassTable/Reciclados.php");

$dados = Reciclado::getAll();

echo json_encode($dados);