<?php



require "../Model/ClassTable/Usuario.php";

$dados = Usuario::getAll();

echo json_encode($dados);