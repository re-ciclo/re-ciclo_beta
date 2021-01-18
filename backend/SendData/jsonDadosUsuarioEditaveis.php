<?php



require "../Model/ClassTable/Usuario.php";

$dados = Usuario::getDadosEditaveis();

echo json_encode($dados);