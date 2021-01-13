<?php



include_once("../Model/ClassTable/Material.php");

$dados = Material::getAll();

echo json_encode($dados);