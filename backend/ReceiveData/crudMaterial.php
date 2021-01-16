<?php

include_once("../Model/ClassTable/Material.php");


$material = new Material();

$material->id_material = $_POST['id_material'];
$material->id_reciclado = $_POST['id_reciclado'];
$material->id_usuario = $_POST['id_usuario'];
$material->id_material = $_POST['id_material'];
$material->peso_total = $_POST['peso_total'];

$material->getAll();
$material->registerMaterial();
$material->updateMaterial();
$material->deleteMaterial();