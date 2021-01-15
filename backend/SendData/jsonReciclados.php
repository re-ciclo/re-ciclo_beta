<?php



include_once("../Model/ClassTable/Reciclado.php");

$dados = Reciclado::getAll();

echo json_encode($dados);