<?php
header("Access-Control-Allow-Origin:*");
header("Content-type: json");


include_once("../Model/ClassTable/Material.php");

$dados = Material::getAll();

echo json_encode($dados);